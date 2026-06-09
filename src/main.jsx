import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux";
import{store} from "./store/store.js" 
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import BrowseBooks from './components/BrowseBooks/BrowseBooks.jsx';
import AddBook from './components/AddBooks/AddBook.jsx';
import NotFound from './components/Not_found/NotFound.jsx';


// create the routeer with routes;
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {index:true,element:<Home/>},
      {path:"browser",element:<BrowseBooks/>},
      {path:"add-book",element:<AddBook/>}
    ]
  },
  {
    path:"*",
    element:<NotFound/>
  }
])


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <RouterProvider router={router}/>
  </Provider>,
)
