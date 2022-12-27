import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/header";
import Home from "./components/home-page/home";
import LoginPage from "./components/login";
import SignUpPage from "./components/sign-up";
import Notfound from "./components/404-page/notfound";
import UsersPage from "./components/users";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
