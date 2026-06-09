import React from 'react'
import { Link } from 'react-router-dom'
import"./BookCard.css"

const BookCard = ({book}) => {
    function renderStars(rating) {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating)
}
  return (
   <Link to={`/book/${book.id}`} className="book-card">
      
      <div className="book-cover" style={{ background: book.coverBg || '#eeedfb' }}>
        {book.cover || '📖'}
      </div>
 
      <h3>{book.title}</h3>
      <p className="author">{book.author}</p>
      <span className="category-tag">{book.category}</span>
      <div className="stars">{renderStars(book.rating)}</div>
      <div className="view-link">View details →</div>
    </Link>
  )
}

export default BookCard
