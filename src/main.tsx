import ReactDOM from 'react-dom/client'
import './View/Styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './View/App.tsx'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
