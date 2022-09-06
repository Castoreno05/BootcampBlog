import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { setContext } from "@apollo/client/link/context";
import Homepage from "./components/Homepage/Homepage";
import SingleBlog from "./components/SingleBlog/SingleBlog";
import DashboardTest from "./components/DashBoard/DashBoardTest";
import Dashboard from "./components/DashBoard/DashBoard";
// import Dashboard from "./components/DashBoard/DashBoard";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/LogIn/LogIn";
import Logout from "./components/Logout/logout";
import SingleBlog from "./components/SingleBlog/SingleBlog";
import DashboardTest from "./components/DashBoard/DashBoardTest";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});



const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Homepage />} />

              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/dashboard" element={<DashboardTest />} />

              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />

              <Route path="/blogs/:blogId" element={<SingleBlog />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
