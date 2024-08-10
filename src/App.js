import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Main from './components/Main';

const App = () => 
{
  const appRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "main",
        element: <Main/>
      }
    ]
  )

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App
