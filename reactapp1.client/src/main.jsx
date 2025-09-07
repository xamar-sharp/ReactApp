import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootRoute, { myAction as action1 } from './routes/RootRoute'
import ErrorElement from './routes/ErrorElement'
import Project from './routes/Project'
import { projectsLoader as loader1 } from './routes/projectsLoader'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const browserRouter = createBrowserRouter(
    [{
        path: '/', element: <RootRoute />,action:action1,loader:loader1, errorElement: <ErrorElement />,
        children: [{
            path: 'projects/:projectId',
            element: <Project/>
        }]
    }
    ]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={browserRouter }/>
  </StrictMode>,
)
