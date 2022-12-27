import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './app/store'
import { fetchAllPosts } from './features/post/postSlice'
import { fetchAllUsers } from './features/user/userSlice'
import './index.css'

store.dispatch(fetchAllPosts());
store.dispatch(fetchAllUsers());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

    <BrowserRouter>
    <App />
    </BrowserRouter>

    </Provider>
  </React.StrictMode>,
)
