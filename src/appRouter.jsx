import {createBrowserRouter} from "react-router-dom"
import App from "./App.jsx"
import MainPage from "./pages/MainPage/MainPage.jsx"
import NewsPage from "./pages/NewsPage/NewsPage.jsx"
import {FilterProvider} from "./context/FilterContext.jsx"

export const appRouter = createBrowserRouter([
  {
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      {path: "/", element: (
          <FilterProvider>
            <MainPage />
          </FilterProvider>
        )
      },
      {path: "/news/:id", element: <NewsPage />}
    ]
  }
])