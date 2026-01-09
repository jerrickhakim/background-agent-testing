# Using Claude as an Agent for Code Edits: A Comprehensive Guide

## Table of Contents
1. [Overview](#overview)
2. [Custom Tools Approach](#custom-tools-approach)
3. [Claude Agent SDK Approach](#claude-agent-sdk-approach)
4. [Comparison](#comparison)
5. [When to Use Each](#when-to-use-each)
6. [Best Practices](#best-practices)

## Overview

Claude can function as an autonomous agent for making code changes to repositories. There are two primary ways to enable this:

1. **Custom Tools Approach**: Define your own tool specifications and handle the interaction loop manually
2. **Claude Agent SDK Approach**: Use Anthropic's official SDK with built-in agentic capabilities

Both approaches allow Claude to understand codebases, make targeted edits, and reason about changes. The choice depends on your specific needs, existing architecture, and level of control required.

## Custom Tools Approach

### How It Works

With custom tools, you define a set of functions as JSON schemas and manually implement the agentic loop:

1. Send a prompt with tool definitions to Claude
2. Claude responds with tool_use blocks specifying which tools to call
3. You execute the tools and return results to Claude
4. Claude processes results and may request more tool calls
5. Repeat until Claude completes the task

### Example Implementation

```python
import anthropic
import json

client = anthropic.Anthropic()

# Define your tools
tools = [
    {
        "name": "view_file",
        "description": "View the contents of a file in the repository",
        "input_schema": {
            "type": "object",
            "properties": {
                "path": {
                    "type": "string",
                    "description": "File path relative to repository root"
                }
            },
            "required": ["path"]
        }
    },
    {
        "name": "edit_file",
        "description": "Create or update a file",
        "input_schema": {
            "type": "object",
            "properties": {
                "path": {"type": "string"},
                "content": {"type": "string"},
                "operation": {"type": "string", "enum": ["create", "update"]}
            },
            "required": ["path", "content", "operation"]
        }
    }
]

messages = [
    {
        "role": "user",
        "content": "Fix the bug in src/utils.js where the calculateTotal function doesn't handle negative numbers"
    }
]

# Agentic loop
while True:
    response = client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=4096,
        tools=tools,
        messages=messages
    )
    
    # Check if Claude is done
    if response.stop_reason == "end_turn":
        break
    
    # Process tool calls
    if response.stop_reason == "tool_use":
        tool_results = []
        
        for block in response.content:
            if block.type == "tool_use":
                # Execute your tool
                result = execute_tool(block.name, block.input)
                tool_results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": result
                })
        
        # Add assistant response and tool results to messages
        messages.append({"role": "assistant", "content": response.content})
        messages.append({"role": "user", "content": tool_results})
```

### Advantages

- **Full Control**: You decide exactly which tools are available and how they behave
- **Lightweight**: No dependencies on additional SDKs or frameworks
- **Flexible**: Easy to integrate with existing systems and workflows
- **Transparent**: You see exactly what tools are being called and when
- **Cost Effective**: Only pay for API calls, minimal overhead

### Disadvantages

- **Manual Implementation**: You must implement the agentic loop yourself
- **Error Handling**: Responsible for validating tool inputs and handling failures
- **State Management**: Must manage conversation history and context
- **Debugging**: Harder to debug since you're managing the entire flow

## Claude Agent SDK Approach

### How It Works

The Claude Agent SDK provides a higher-level abstraction for agentic tasks:

```python
from anthropic import Anthropic
from anthropic_tools import Tool, Toolbox

client = Anthropic()

# Define tools using the SDK
toolbox = Toolbox()

@toolbox.tool
def view_file(path: str) -> str:
    """View the contents of a file in the repository"""
    with open(path, 'r') as f:
        return f.read()

@toolbox.tool
def edit_file(path: str, content: str, operation: str) -> str:
    """Create or update a file"""
    if operation == "create":
        with open(path, 'w') as f:
            f.write(content)
    elif operation == "update":
        with open(path, 'a') as f:
            f.write(content)
    return f"File {path} updated successfully"

# Run agent with automatic loop handling
result = client.agentic_run(
    prompt="Fix the bug in src/utils.js",
    toolbox=toolbox,
    model="claude-3-5-sonnet-20241022"
)
```

### Advantages

- **Simplified Implementation**: SDK handles the agentic loop automatically
- **Built-in Best Practices**: Follows Anthropic's recommendations for agent design
- **Better Error Handling**: SDK includes error handling and recovery mechanisms
- **Cleaner Code**: Decorators and automatic serialization reduce boilerplate
- **Monitoring**: Built-in logging and observability features

### Disadvantages

- **Less Control**: Abstraction hides some implementation details
- **SDK Dependency**: Requires using Anthropic's SDK (additional dependency)
- **Vendor Lock-in**: Tied to Anthropic's tooling approach
- **Learning Curve**: Need to learn SDK-specific patterns and conventions

## Comparison

| Feature | Custom Tools | Agent SDK |
|---------|-------------|-----------|
| **Setup Time** | Moderate | Fast |
| **Control Level** | High | Medium |
| **Complexity** | Higher | Lower |
| **Error Handling** | Manual | Automatic |
| **Dependencies** | Minimal | SDK Required |
| **Debugging** | More Transparent | More Abstracted |
| **Customization** | Unlimited | SDK Constraints |
| **Production Ready** | With Effort | Built-in |
| **Learning Curve** | Steep | Gentle |

## When to Use Each

### Use Custom Tools When:

- You need **maximum control** over tool execution
- You're **integrating with existing systems** that have their own patterns
- You want **minimal dependencies** in your codebase
- You're building **specialized agents** with unique requirements
- You need **fine-grained visibility** into agent behavior for debugging
- You're working on **research or experimentation** where flexibility matters
- You have **complex tool interactions** that don't fit SDK patterns

### Use Claude Agent SDK When:

- You want to **get started quickly** with minimal boilerplate
- You need **production-grade agent infrastructure** out of the box
- You prefer **clean, decorator-based APIs** in your code
- You want **automatic error handling and recovery**
- You're building **standard code editing agents** for repositories
- You value **following Anthropic's best practices** by default
- You want **built-in monitoring and observability**
- You need **less custom implementation** and maintenance

## Best Practices

### For Both Approaches

1. **Clear Tool Descriptions**: Write detailed, specific descriptions for each tool. Claude needs to understand exactly what each tool does to use them effectively.

2. **Granular Tools**: Create focused tools that do one thing well, rather than tools that do multiple things.

3. **Input Validation**: Always validate tool inputs before execution, even if you trust Claude. Bad data can cause crashes.

4. **Error Messages**: Return clear, actionable error messages when tools fail. Claude learns from these.

5. **Context Awareness**: Provide enough context about the codebase structure so Claude understands the domain.

6. **Constraint Definition**: Be explicit about constraints and limitations. Tell Claude what tools can't do.

7. **Iterative Testing**: Test agents on small tasks before scaling to larger projects.

8. **Token Budget**: Keep track of token usage, especially for long agentic loops. Set reasonable limits.

### Custom Tools Specific

1. **Conversation Memory**: Implement proper message history management to maintain context across multiple tool calls.

2. **Stop Condition Logic**: Clearly define when the agent should stop and return results.

3. **Tool Execution Safety**: Sandbox tool execution or implement safety checks to prevent unintended modifications.

4. **Retry Logic**: Implement retry mechanisms for transient failures.

### SDK Specific

1. **Tool Registration**: Ensure all tools are properly registered before running the agent.

2. **Type Hints**: Use proper type hints in tool definitions for better SDK support.

3. **Documentation**: Document custom tools thoroughly since they're part of your public interface.

4. **SDK Updates**: Keep the SDK updated to get bug fixes and new features.

## Real-World Example: Code Review Agent

### Custom Tools Version

```python
def run_code_review_agent(repo_path, file_to_review):
    tools = [
        # Tool definitions for viewing files, analyzing code, etc.
    ]
    
    messages = [
        {
            "role": "user",
            "content": f"Review {file_to_review} and suggest improvements"
        }
    ]
    
    while True:
        response = client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=4096,
            tools=tools,
            messages=messages
        )
        
        if response.stop_reason == "end_turn":
            return extract_final_response(response)
        
        if response.stop_reason == "tool_use":
            # Handle tool calls...
            messages.append({"role": "assistant", "content": response.content})
            messages.append({"role": "user", "content": tool_results})
```

### SDK Version

```python
from anthropic_tools import Toolbox

toolbox = Toolbox()

@toolbox.tool
def view_file(path: str) -> str:
    """View file contents"""
    with open(path) as f:
        return f.read()

@toolbox.tool
def analyze_code(code: str, language: str) -> str:
    """Analyze code for issues"""
    # Use appropriate linter or analyzer
    pass

result = client.agentic_run(
    prompt=f"Review {file_to_review} and suggest improvements",
    toolbox=toolbox,
    model="claude-3-5-sonnet-20241022"
)
```

## Conclusion

Both approaches are viable for using Claude as an agent for code edits. The choice depends on your priorities:

- Choose **custom tools** if you need maximum flexibility and control
- Choose **Agent SDK** if you prioritize speed and following best practices

Start with whichever matches your current project structure, and don't hesitate to switch approaches as your needs evolve. Many successful projects use custom tools initially and migrate to the SDK as they scale.

The most important factor is that Claude, as an agent, is remarkably effective at understanding code, identifying issues, and making targeted edits—regardless of which approach you choose.
