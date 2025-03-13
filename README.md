# Picsart Job Application

by Julian Torregrosa

## Project Overview

This project is a Single Page Application (SPA) built with React and TypeScript. It features a responsive, optimized, and virtualized masonry grid layout that dynamically fetches images from the Pexels API. Additionally, it includes a detailed photo view with relevant metadata.

The application prioritizes performance optimization, lazy loading, and efficient rendering using modern React techniques.

## Requirements

To run this project locally, ensure you have the following installed:

- **Node.js** (version 20.18+)
- **Git** (for cloning the repository)
- **Pexels API Key** (required for fetching images)

## How to Run the Project

Follow these steps to set up and run the application:

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate into the project directory:
   ```sh
   cd picsart-masonry
   ```
3. Create a local environment file:
   ```sh
   cp .env .env.local
   ```
4. Update `.env.local` with your Pexels API Key:
   ```sh
   PEXELS_API_KEY=your_api_key_here
   ```
5. Install dependencies:
   ```sh
   npm ci
   ```
6. Start the development server:
   ```sh
   npm run dev
   ```
7. Open your browser and go to:
   ```
   http://localhost:5173/
   ```

## Technical Decisions

### Styling

- Used **styled-components** as the styling approach to maintain modularity and scoped styles.
- No additional UI libraries were used to keep the bundle size small.

### Masonry Grid Optimization

- Implemented a **virtualized masonry grid** without using external libraries for layout management.
- Used an **Intersection Observer** to dynamically load images when they enter the viewport, reducing initial render time and improving performance.
- Pagination is handled by fetching new pages from the API only when the user clicks **Load More**, preventing unnecessary network requests.
- Applied **lazy loading (`loading="lazy"`)** to images, ensuring they are only loaded when they appear on screen.

### Routing & Navigation

- Used **React Router** for navigation between the grid view and the detailed photo view.
- The selected photo ID is passed via the URL and used to fetch detailed photo data dynamically.

### API Integration

- Created a **PhotosService** to handle API requests cleanly and reuse logic.
- Used **Axios** for HTTP requests and centralized API configurations in a **HttpClient** class.
- Implemented error handling to ensure failed requests do not crash the application.

## Design Decisions

- The application follows a **dark theme** for a modern and visually appealing experience.
- The masonry grid dynamically adjusts the number of columns based on screen width to ensure responsiveness.
- In the **photo detail view**, the layout adapts based on the image orientation (vertical or horizontal), providing a better user experience.

## Conclusion

This project demonstrates an optimized, high-performance React application with efficient image loading, virtualization, and API integration. The focus was on creating a scalable and responsive UI while ensuring minimal performance overhead.

Future improvements could include:

- Adding **unit tests** to improve reliability.
- Implementing a **search feature** to dynamically filter images based on user input.
- Enhancing **accessibility** by improving keyboard navigation and ARIA attributes.

This implementation showcases strong front-end engineering skills, focusing on performance, maintainability, and scalability.
