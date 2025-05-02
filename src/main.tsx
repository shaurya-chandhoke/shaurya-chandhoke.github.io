import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className="flex min-h-screen w-full flex-col">
            <App/>
        </div>
    </StrictMode>,
)
