import { useState } from "react"
import { DetailsSection, Navbar, Slider } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./providers/CartProvider";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";
import Profile from "./pages/Profile";


function App() {

  const [cartCounter, setCartCounter] = useState(0);

  const router = createBrowserRouter(
    [
      {
        path: '/product/:imageUrl',
        element: (<div className="font-kumbhsans md:max-w-[80%] md:mx-auto md:px-4">
          <Navbar cartCounter={cartCounter} setCartCounter={setCartCounter} />
          {/* TODO: Slide funcional */}
          <div className="flex flex-col md:flex-row md:px-0 md:gap-6 md:py-20 items-center md:justify-center lg:px-14 lg:gap-16">
            <Slider />
            <DetailsSection cartCounter={cartCounter} setCartCounter={setCartCounter} />
          </div>
        </div>),

      },
      {
        path: '/',
        element: (<div className="font-kumbhsans md:max-w-[80%] md:mx-auto md:px-4">
          <Navbar cartCounter={cartCounter} setCartCounter={setCartCounter} />
          {/* TODO: Slide funcional */}
          <div className="flex flex-col md:flex-row md:px-0 md:gap-6 md:py-20 items-center md:justify-center lg:px-14 lg:gap-16">
            <Home />
          </div>
        </div>),

      },
      {
        path: '/auth',
        element: (<div className="font-kumbhsans md:max-w-[80%] md:mx-auto md:px-4">
          <Navbar cartCounter={cartCounter} setCartCounter={setCartCounter} />
          {/* TODO: Slide funcional */}
          <div className="flex flex-col md:flex-row md:px-0 md:gap-6 md:py-20 items-center md:justify-center lg:px-14 lg:gap-16">
            <Auth />
          </div>
        </div>),

      },
      {
        path: '*',
        element: (<div className="font-kumbhsans md:max-w-[80%] md:mx-auto md:px-4">
          <Navbar cartCounter={cartCounter} setCartCounter={setCartCounter} />
          {/* TODO: Slide funcional */}
          <div className="flex flex-col md:flex-row md:px-0 md:gap-6 md:py-20 items-center md:justify-center lg:px-14 lg:gap-16">
            <h1 className="text-red-500">Oops! 404 Error: Page not found</h1>
          </div>
        </div>),

      },
      {
        path: '/contact',
        element: (<div className="font-kumbhsans md:max-w-[80%] md:mx-auto md:px-4">
          <Navbar cartCounter={cartCounter} setCartCounter={setCartCounter} />
          {/* TODO: Slide funcional */}
          <div className="flex flex-col md:flex-row md:px-0 md:gap-6 md:py-20 items-center md:justify-center lg:px-14 lg:gap-16">
            <Contact />
          </div>
        </div>),

      },
      {
        path: '/profile',
        element: (<div className="font-kumbhsans md:max-w-[80%] md:mx-auto md:px-4">
          <Navbar cartCounter={cartCounter} setCartCounter={setCartCounter} />
          {/* TODO: Slide funcional */}
          <div className="flex flex-col md:flex-row md:px-0 md:gap-6 md:py-20 items-center md:justify-center lg:px-14 lg:gap-16">
            <Profile />
          </div>
        </div>),

      },



    ]
  )



  return (
    <CartProvider>
      <Toaster/>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App
