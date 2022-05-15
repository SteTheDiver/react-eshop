import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
} from "./pages";

import { Navbar, Footer, Sidebar } from "./components";

function App() {
  return (
    <BrowserRouter>
      {/* <Router> */}
      <Navbar />
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      {/* </Router> */}
    </BrowserRouter>
  );
}

export default App;
