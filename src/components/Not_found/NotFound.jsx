import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import "./NotFound.css"
const NotFound = () => {
  const loacation = useLocation();
  return (
    <div className="not-found">
    <div className="big-code">404</div>
    <h2>Page not found</h2>
    <p>The route you tried to visit doesn't exist:</p>

     <code>{location.pathname}</code>
      <Link to="/" className="home-link">
        🏠 Go to home
      </Link>
    </div>
  )
}

export default NotFound
