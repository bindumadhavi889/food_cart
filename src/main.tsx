import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'
import store from './store'
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer position='top-center'/>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
