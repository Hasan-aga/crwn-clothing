import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";

import { startFetchCategories } from "./store/categories/categories.action";
import Spinner from "./components/spinner/spinner.component";

const Shop = lazy(() => import("./routes/shop/shop.component"));
const SignPage = lazy(() => import("./routes/sign-page/sign-page.component"));
const Profile = lazy(() => import("./routes/profile/profile.component"));
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
const Home = lazy(() => import("./routes/home/home.component"));
const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  // load the categories
  useEffect(() => {
    dispatch(startFetchCategories());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route path="greet" element={<Profile />}></Route>
          <Route path="shop/*" element={<Shop />}></Route>
          <Route path="checkout" element={<Checkout />} />
          <Route path="signin" element={<SignPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
