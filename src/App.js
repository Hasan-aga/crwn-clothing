import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.util";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "./store/categories/categories.action";

import SignPage from "./routes/sign-page/sign-page.component";
import Profile from "./routes/profile.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsub = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      dispatch(setCurrentUser(user));
    });
    return unsub;
  }, []);

  // load the categories
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

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
