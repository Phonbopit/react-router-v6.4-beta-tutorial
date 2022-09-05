import React from 'react'
import ReactDOM from 'react-dom/client'
import { DataBrowserRouter, Route } from 'react-router-dom'
import './index.css'

import ErrorPage from './error-page'

import Index from './routes/index'
import Root, { loader as rootLoader, action as rootAction } from './routes/root'
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from './routes/contact'
import EditContact, { action as editAction } from './routes/edit'
import { action as destroyAction } from './routes/destroy'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataBrowserRouter>
      <Route
        path="/"
        element={<Root />}
        errorElement={<ErrorPage />}
        loader={rootLoader}
        action={rootAction}
      >
        <Route index element={<Index />} />

        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route path="contacts/:contactId/destroy" action={destroyAction} />
      </Route>
    </DataBrowserRouter>
  </React.StrictMode>
)
