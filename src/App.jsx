
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./Components/MainLayout";
import { ThemeProvider } from "./hooks/useTheme";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Contact from "./Routes/Login";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: '/dentista/:id',
          element: <Detail />
        }
      ]
    }
  ])

  return (
    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>


  );
}

export default App;
