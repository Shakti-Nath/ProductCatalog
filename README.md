This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Study Guide

### Follow tutorial 
- Next.js 14 Tutorial: https://youtu.be/mEral6yz130?si=d6QnOocKnRFusO9s 

### The mock api documentation 
- https://api.escuelajs.co/docs#/products/ProductsController_getAll
- https://fakeapi.platzi.com/en/about/introduction/


# Upcoming Tasks 
here's the list of upcoming tasks with short descriptions and potential approaches:

## 1. Create clickable product buttons for detailed view

- **Description:** Make the product buttons or cards clickable, which will navigate to a separate page displaying more details and images of the selected product.
- **Approach:**
  - Implement a click event handler on the product button/card component.
  - On click, use React Router or a similar routing library to navigate to a new route or component that fetches and displays the detailed product information.

## 2. Create a sidebar with category filters

- **Description:** Implement a sidebar with checkboxes or filters for different product categories, allowing users to filter the displayed products based on their selections.
- **Approach:**
  - Create a separate component for the sidebar and category filters.
  - Use state management (e.g., React Context or Redux) to manage the selected filters and update the product list accordingly.
  - Alternatively, you can pass the filter state and functions as props to the relevant components.

## 3. Implement user context and profile page

- **Description:** Utilize the mock API's authentication features (LLT and SLT) to maintain a user context and implement a profile page that displays user details.
- **Approach:**
  - Set up authentication flow using the mock API's LLT and SLT tokens.
  - Create a user context or state management solution to store the user's information and authentication status.
  - Develop a profile page component that fetches and displays the user's details from the API or the stored context.

## 4. Add products to cart and persist across sessions

- **Description:** Implement logic to add products to a shopping cart and persist the cart data in the browser, ensuring it doesn't disappear after login or page refresh.
- **Approach:**
  - Create a cart state or context to manage the added products.
  - Implement functions to add, remove, and update cart items.
  - Use browser storage (e.g., localStorage or sessionStorage) to persist the cart data across sessions or page refreshes.

## 5. Implement checkout page with COD and email notifications

- **Description:** Develop a checkout page that allows users to place orders using Cash on Delivery (COD) and sends email notifications to users who have placed orders on an hourly basis using a cron job and a pub-sub model.
- **Approach:**
  - Create a checkout page component that displays the cart items and allows users to confirm the order with COD payment.
  - Set up a cron job or scheduled task to run hourly and fetch the list of new orders.
  - Implement a pub-sub model (e.g., using a message queue or a third-party service) to send email notifications to users who have placed orders during that hour.

## 6. Integrate real payment gateway (far-fetched)

- **Description:** Integrate a real payment gateway to enable online payments for orders, instead of relying on COD.
- **Approach:**
  - Research and choose a suitable payment gateway service (e.g., Stripe, PayPal, or others).
  - Follow their integration documentation and implement the necessary client-side and server-side code to handle payment processing, order confirmation, and secure transactions.

### Detailed Approaches and Guidelines for New Developers:

#### 1. Create clickable product buttons for detailed view

- In the component that renders the product list or cards, wrap each product item with a `Link` component from the React Router library.
- Set the `to` prop of the `Link` component to the desired route path for the product details page, passing the product ID or any other necessary data as a route parameter or state.
- Create a new component for the product details page, which will receive the product ID or data from the route parameters or state.
- In the product details component, use the received product ID or data to fetch the detailed product information from the API or data source.
- Display the fetched product details, including images, descriptions, pricing, and any other relevant information.

#### 2. Create a sidebar with category filters

- Create a new component for the sidebar and category filters.
- In the sidebar component, render a list of checkboxes or filter options for each product category.
- Use state management (e.g., React Context or Redux) to create a global state for the selected filters.
- Implement functions or actions to update the selected filters state when a checkbox or filter option is clicked or changed.
- In the component that renders the product list, subscribe to the selected filters state and filter the product data based on the selected categories before rendering.
- Alternatively, you can pass the selected filters state and update functions as props to the relevant components.

#### 3. Implement user context and profile page

- Set up authentication flow with the mock API's LLT and SLT tokens, following the API documentation.
- Create a user context or state management solution (e.g., React Context or Redux) to store the user's information and authentication status.
- Implement a higher-order component or a custom hook to handle the authentication logic and provide the user context to other components.
- Create a profile page component that fetches the user's details from the API or retrieves them from the user context.
- Display the user's information (e.g., name, email, profile picture) in the profile page component.
- Implement protected routes or components that require authentication by checking the user context or state.

#### 4. Add products to cart and persist across sessions

- Create a cart context or state management solution (e.g., React Context or Redux) to manage the cart items.
- Implement functions or actions to add, remove, and update cart items, updating the cart state accordingly.
- Use browser storage (e.g., localStorage or sessionStorage) to persist the cart data across sessions or page refreshes.
- In the component that renders the product list or cards, provide an "Add to Cart" button or functionality.
- When the "Add to Cart" button is clicked, call the appropriate function or action to add the product to the cart state and update the browser storage.
- In the cart component or page, retrieve the cart data from the browser storage and display the added products.

#### 5. Implement checkout page with COD and email notifications

- Create a checkout page component that displays the cart items and allows users to confirm the order with COD payment.
- Implement server-side code (e.g., using Node.js or a backend framework) to handle the order placement and email notifications.
- Set up a cron job or scheduled task (e.g., using a library like `node-cron` or a cloud service like AWS Lambda or Cloud Functions) to run hourly.
- In the cron job or scheduled task, fetch the list of new orders placed within the last hour from the database or data source.
- Implement a pub-sub model using a message queue service (e.g., RabbitMQ, Apache Kafka, or a cloud service like AWS SQS or Google Cloud Pub/Sub) or a third-party email service (e.g., SendGrid, Mailgun).
- For each new order, publish a message to the message queue or send an email notification to the user using the email service.

#### 6. Integrate real payment gateway (far-fetched)

- Research and choose a suitable payment gateway service (e.g., Stripe, PayPal, or others) based on your project's requirements and constraints.
- Follow the integration documentation provided by the payment gateway service for client-side and server-side integration.
- On the client-side (React application), implement the necessary components and functionality to collect payment information (e.g., credit card details, billing address) and initiate the payment process.
- On the server-side, set up the required endpoints and integrate with the payment gateway's API to handle payment processing, order confirmation, and secure transactions.
- Implement error handling, security measures (e.g., tokenization, encryption), and appropriate user feedback for successful or failed transactions.
- Ensure compliance with relevant regulations and security standards (e.g., PCI-DSS) when handling sensitive payment information.
