import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {ThemeProvider} from "./context/ThemeContext.jsx"
import {RouterProvider} from "react-router-dom"
import {appRouter} from "./appRouter.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  </StrictMode>,
)
