# TechShop - E-Commerce Shop Page

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A modern, fully functional e-commerce shop page built with Node.js, Express, HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices.
- **Product Filtering**: Filter products by category and price range.
- **Product Sorting**: Sort products by price, rating, or featured status.
- **Add to Cart**: Persistent cart functionality using localStorage.
- **Wishlist**: Add products to a wishlist.
- **Shopping Cart Counter**: Real-time cart counter in the navigation..
- **Featured Products**: Showcase featured products on the homepage.
- **Modern UI**: Clean and modern user interface with smooth animations.
- **Product Ratings**: Display product ratings and reviews.
- **Toast Notifications**: User-friendly notifications for actions like adding to cart.

## Project Structure

```
.
├── server.js           # Express server and API endpoints
├── package.json        # Project dependencies
├── public/
│   ├── index.html      # Home page
│   ├── shop.html       # Shop page with filtering
│   ├── contact.html    # Contact page
│   ├── faqs.html       # FAQs page
│   ├── message.html    # Message submission confirmation page
│   ├── app.js          # Home page JavaScript
│   ├── shop.js         # Shop page JavaScript
│   └── styles.css      # Global styles
└── README.md           # This file
```

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/jerrickhakim/background-agent-testing.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the server:**
    ```bash
    npm start
    ```
4.  **Open your browser** and navigate to `http://localhost:3000`.

## API Endpoints

-   `GET /api/products` - Returns all available products.

## Technologies Used

-   **Backend**: Node.js, Express.js
-   **Frontend**: HTML5, CSS3, Vanilla JavaScript
-   **Storage**: localStorage for cart persistence

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug fixes, please open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m '''Add some AmazingFeature'''`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
