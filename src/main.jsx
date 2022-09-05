import React from 'react'
import ReactDOM from 'react-dom/client'
import { DataBrowserRouter, Route } from 'react-router-dom'
import './index.css'

import Root from './routes/root'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataBrowserRouter>
      <Route path="/" element={<Root />} />
    </DataBrowserRouter>
  </React.StrictMode>
)
