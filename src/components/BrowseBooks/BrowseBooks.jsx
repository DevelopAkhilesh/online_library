import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import BookCard from '../BookCard/BookCard'

const categories = ['All', 'Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy']

const BrowseBooks = () => {
  const { label } = useParams()
  const navigate = useNavigate()
  const books = useSelector((state) => state.books.booksList)

  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState(label || 'All')
  const [filteredBooks, setFilteredBooks] = useState([])
// for handling the category
  useEffect(() => {
    setActiveCategory(label || 'All')
  }, [label])
// filter the book based on category
  useEffect(() => {
    let list = books

    if (activeCategory && activeCategory !== 'All') {
      list = list.filter((book) => book.category === activeCategory)
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      list = list.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query)
      )
    }

    setFilteredBooks(list)
  }, [activeCategory, books, searchQuery])
// handle category
  const handleCategory = (cat) => {
    setActiveCategory(cat)
    if (cat === 'All') {
      navigate('/browser')
    } else {
      navigate(`/category/${cat}`)
    }
  }

  return (
    <div className="page-wrapper">
      <div className="page-title">Browse books</div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-btn">🔍</button>
      </div>

      <div className="filter-bar">
        {categories.map((cat, id) => (
          <button
            key={id}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => handleCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <div className="empty-state">No books found </div>
        )}
      </div>
    </div>
  )
}

export default BrowseBooks
