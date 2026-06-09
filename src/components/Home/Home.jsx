import React from 'react'
import { useSelector } from 'react-redux'
import BookCard from '../BookCard/BookCard'
import "./Home.css" 

const Home = () => {

    const books = useSelector((state)=>state.books.booksList);
    const popularBooks= books.slice(0,4);


  return (
    <div>
   <div className="hero">
        <h1>Welcome to LibraryApp 📚</h1>
        <p>Discover, explore, and manage your favourite books all in one place.</p>
      </div>

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
