import Home from "./routes/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";

import SignPage from "./routes/sign-page/sign-page.component";
import Profile from "./routes/profile.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="greet" element={<Profile />}></Route>
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="checkout" element={<Checkout />} />
        <Route path="signin" element={<SignPage />} />
      </Route>
    </Routes>
  );
};

export default App;
