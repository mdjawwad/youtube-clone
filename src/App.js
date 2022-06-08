import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Header from "./component/header/Header";
import Sidebar from "./component/sidebar/Sidebar";
import ChannelScreen from "./screen/channelScreen/ChannelScreen";
import HomeScreen from "./screen/homeScreen/HomeScreen";
import LoginScreen from "./screen/loginScreen/LoginScreen";
import SearchScreen from "./screen/SearchScreen";
import Subscription from "./screen/subscription/Subscription";
import WatchScreen from "./screen/WatchScreen/WatchScreen";

import "./_app.scss";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main ">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  const navigate = useNavigate();
  const { accessToken, loading } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/auth");
    }
  }, [accessToken, loading, navigate]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        />
        <Route path="/auth" element={<LoginScreen />} />
        <Route
          path="/search/:query"
          element={
            <Layout>
              <SearchScreen />
            </Layout>
          }
        />
        <Route
          path="/watch/:id"
          element={
            <Layout>
              <WatchScreen />
            </Layout>
          }
        />
        <Route
          path="/feed/subscription"
          element={
            <Layout>
              <Subscription />
            </Layout>
          }
        />

        <Route
          path="/channel/:channelId"
          element={
            <Layout>
              <ChannelScreen />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
