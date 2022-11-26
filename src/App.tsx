import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import Button from "./components/Button/Button";
import { StyledButton } from "./components/Button/style";
import { StyledContainer } from "./components/Container/style";
import Form from "./components/Form/Form";
import Input from "./components/Input/Input";
import { UserContext, UserProvider } from "./context/UserContext";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useContext, useEffect, useState } from "react";
import { User } from "firebase/auth";
import Header from "./components/Header/Header";
import CreatePost from "./pages/CreatePost/CreatePost";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import About from "./pages/About/About";
import EditPost from "./pages/EditPost/EditPost";
function App() {
  const { user, setTrigger, trigger } = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState<User | undefined | null>();
  useEffect(() => {
    setCurrentUser(user);
  }, []);
  console.log(user);
  return (
    <div className="App">
      <StyledContainer>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<Search />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/posts/create"
              element={user ? <CreatePost /> : <Navigate to="/login" />}
            />
            <Route
              path="/posts/edit/:id"
              element={user ? <EditPost /> : <Navigate to="/" />}
            />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </StyledContainer>
    </div>
  );
}

export default App;
