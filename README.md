# Book Store

A small React + Vite library app for browsing, searching, and adding books.

## Features

- Home page with category links and popular books.
- Browse page with category filtering and search by title or author.
- Add Book page with form validation and Redux-powered state.
- Detailed book page for individual books.
- Client-side routing with React Router.
- State management with Redux Toolkit.

## Tech Stack

- React
- Vite
- React Router DOM
- Redux Toolkit
- JavaScript

## Project Structure

- `src/main.jsx` - app entry, router setup, Redux provider
- `src/App.jsx` - root layout and outlet container
- `src/components/Navbar/Navbar.jsx` - navigation bar
- `src/components/Home/Home.jsx` - home page with categories and popular books
- `src/components/BrowseBooks/BrowseBooks.jsx` - browse page with filters and search
- `src/components/AddBooks/AddBook.jsx` - add book form with validation
- `src/components/Details/Details.jsx` - book detail view
- `src/store/bookSlice.js` - Redux slice for book list state
- `src/store/store.js` - Redux store configuration
- `src/utils/books.data.js` - initial sample book data

## Available Scripts

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Routes

- `/` - Home page
- `/browser` - Browse all books
- `/category/:label` - Browse books by category
- `/add-book` - Add a new book
- `/book/:id` - Book details

## Notes

- New books are stored in Redux state during the current session.
- Categories include `Fiction`, `Non-Fiction`, `Sci-Fi`, and `Fantasy`.
- The app uses a sample book list seeded from `src/utils/books.data.js`.


Github link - https://github.com/DevelopAkhilesh/online_library.git