import Home from "./components/routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Shop from "./components/routes/shop/shop.component.jsx";
import Checkout from "./components/routes/checkout/checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
