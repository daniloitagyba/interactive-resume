import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const ResumeEditor = import.meta.env.DEV
  ? lazy(() => import('./editor/ResumeEditor'))
  : null

const isLocalBrowser = ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname)
const isEditorRoute =
  import.meta.env.DEV && isLocalBrowser && window.location.pathname === '/editar'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {isEditorRoute && ResumeEditor ? (
      <Suspense fallback={<div className="min-h-screen bg-theme-bg" />}>
        <ResumeEditor />
      </Suspense>
    ) : (
      <App />
    )}
  </React.StrictMode>,
)
