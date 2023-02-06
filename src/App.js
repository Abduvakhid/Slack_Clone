import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Loader from "./components/Loader";
import { Route, Routes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import "./App.css";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Chat />} />
            </Routes>
          </AppBody>
        </>
      )}
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
