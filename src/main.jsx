import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CalendarioProvider } from './calendario/CalendarioContext'
import MostraCalendario from './calendario/conteinerCalendario/ConteirnerCalendario'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <CalendarioProvider>
        <App/>
        <MostraCalendario/>
      </CalendarioProvider>
  </React.StrictMode>,
)
