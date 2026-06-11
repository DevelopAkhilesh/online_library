import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import "./Details.css";
// for rendering the stars
function renderStars(rating) {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating)
}
const Details = () => {
  // id of the book from the link
  const {id}=useParams();
  // navigate bake to browse
  const navigate = useNavigate();
  // getting the books from the store
  const book = useSelector((state)=>state.books.booksList.find((b)=>b.id===parseInt(id)));
  
  return (
    <div className="page-wrapper">
      <button className="back-btn" onClick={() => navigate('/browser')}>
        ← Back to browse
      </button>

      <div className="detail-card">
      <div className="detail-header">
        <div className="detail-cover" style={{ background:'#eeedfb' }}>
          {'📖'}
        </div>
        <div className="detail-meta">
          <h2>{book.title}</h2>
            <p className="author">by {book.author}</p>
            <span className="badge">{book.category}</span>

            <div className="rating-row">
              <span className="stars-lg">{renderStars(book.rating)}</span>
              <span style={{ fontSize: '13px', color: '#888' }}>
                {book.rating} / 5
              </span>
            </div>
        </div>
      </div>
       <hr className="detail-divider" />
       <div className="section-title" style={{ marginBottom: '10px' }}>
          Description
        </div>
        <p className="detail-desc">{book.description}</p>
      </div>
    </div>
  )
}

export default Details
