import Home from "./routes/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/sign-in/sign-in.component";
import SignupForm from "./components/sign-up/sign-up.component";
import SignPage from "./components/sign-page/sign-page.component";

const Greet = () => <h2>Hello Route</h2>;
const Shop = () => <h2>Start Shopping</h2>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="greet" element={<Greet />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="signin" element={<SignPage />} />
      </Route>
    </Routes>
  );
};

export default App;
