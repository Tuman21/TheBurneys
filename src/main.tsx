import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { router } from './app/routes'
import './styles/index.css'

const redirectPath = sessionStorage.getItem('redirect')
if (redirectPath) {
  sessionStorage.removeItem('redirect')
  void router.navigate(redirectPath, { replace: true })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
