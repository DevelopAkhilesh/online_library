import React from 'react'
import { useState } from 'react';
import { addBook } from '../../store/bookSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './AddBook.css'

const INITIAL_FORM = {
  title: '',
  author: '',
  category: '',
  rating: '',
  description: '',
}
const AddBook = () => {
    const [form, setForm] = useState(INITIAL_FORM);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const navigate = useNavigate();


    // geting the value from the inout fields
    const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' })) // clear error on change
  }
// for error if the data is properly filled or not
   const validate = () => {
    const newErrors = {}
    if (!form.title.trim())       newErrors.title = 'Title is required.'
    if (!form.author.trim())      newErrors.author = 'Author is required.'
    if (!form.category)           newErrors.category = 'Please select a category.'
    if (!form.rating)             newErrors.rating = 'Please select a rating.'
    if (!form.description.trim()) newErrors.description = 'Description is required.'
    return newErrors
  }

  const handleSubmit = ()=>{
    const validationErrors = validate();

     if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    const newBook = {
      id: Date.now(), // unique id using timestamp
      title: form.title.trim(),
      author: form.author.trim(),
      category: form.category,
      rating: parseInt(form.rating),
      description: form.description.trim(),
      
      
    }
    // dispatch the book
    dispatch(addBook(newBook));
    // redirect to browse page
      navigate('/browser')
    


  }
  return (
    <div className="page-wrapper">
       <div className="section-title" style={{ marginBottom: '20px' }}>
        Add a new book
      </div>

      <div className="form-card">
         <div className="form-row">
          <label htmlFor="title">Book title *</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="e.g. The Great Gatsby"
            value={form.title}
            onChange={handleChange}
            className={errors.title ? 'invalid' : ''}
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>

          <div className="form-row">
          <label htmlFor="author">Author *</label>
          <input
            id="author"
            name="author"
            type="text"
            placeholder="e.g. F. Scott Fitzgerald"
            value={form.author}
            onChange={handleChange}
            className={errors.author ? 'invalid' : ''}
          />
          {errors.author && <p className="error">{errors.author}</p>}
        </div>
        <div className="form-row">
          <label htmlFor="category">Category *</label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            className={errors.category ? 'invalid' : ''}
          >
            <option value="">Select a category</option>
            <option>Fiction</option>
            <option>Non-Fiction</option>
            <option>Sci-Fi</option>
            <option>Fantasy</option>
          </select>
          {errors.category && <p className="error">{errors.category}</p>}
        </div>

         <div className="form-row">
          <label htmlFor="rating">Rating *</label>
          <select
            id="rating"
            name="rating"
            value={form.rating}
            onChange={handleChange}
            className={errors.rating ? 'invalid' : ''}
          >
            <option value="">Select rating</option>
            <option value="5">★★★★★ (5)</option>
            <option value="4">★★★★☆ (4)</option>
            <option value="3">★★★☆☆ (3)</option>
            <option value="2">★★☆☆☆ (2)</option>
            <option value="1">★☆☆☆☆ (1)</option>
          </select>
          {errors.rating && <p className="error">{errors.rating}</p>}
        </div>

         <div className="form-row">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            placeholder="Write a short description of the book..."
            value={form.description}
            onChange={handleChange}
            className={errors.description ? 'invalid' : ''}
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

         <button className="submit-btn" onClick={handleSubmit}>
          Add book to library
        </button>
 
        <p className="form-note">
          After adding, you'll be redirected to Browse books
        </p>

      </div>
    </div>
  )
}

export default AddBook
