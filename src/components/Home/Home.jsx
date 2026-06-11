import React from 'react'
import { useSelector } from 'react-redux'
import BookCard from '../BookCard/BookCard'
import "./Home.css" 
import { Link } from 'react-router-dom'

const Home = () => {
    const categories = [
         { label: 'Fiction', emoji: '📖' },
          { label: 'Non-Fiction', emoji: '📖' },
           { label: 'Sci-Fi', emoji: '📖' },
            { label: 'Fantasy', emoji: '📖' },
    ]

    const books = useSelector((state)=>state.books.booksList);
    const popularBooks= books.slice(0,4);


  return (
    <div className="home-container">
   <div className="hero">
        <h1>Welcome to LibraryApp 📚</h1>
        <p>Discover, explore, and manage your favourite books all in one place.</p>
      </div>
      <div  className="section-title">Browse by category</div>
      <div className="categories-container">{categories.map((cat,id)=>(
        <Link key={id} to={`/category/${cat.label}`} className='category-link'>{cat.label} {cat.emoji}</Link>
      ))}</div>

      <div className="section-title">Popular books</div>
      <div className='books-grid'> 
        {
            popularBooks.map((book)=>(<BookCard key={book.id} book={book}/>))
        }
      </div>
    </div>
  )
}

export default Home
