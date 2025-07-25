import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom';
import Destination from './Components/Destination.jsx';
import Crew from './Components/Crew.jsx';

const router = createBrowserRouter([
  {path: '/', element: <App/> },
  {path: '/Destination', element: <Destination/> },
  {path: '/Crew', element: <Crew/> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
