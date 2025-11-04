import { useState } from "react";
import "./App.css";
import { MyDetailsContextProvider } from "./context.js";
import Profile from "./Profile.jsx";

function App() {
  const [myname, setMyname] = useState("");

  const updateMyName = () => {
    setMyname("");
  };

  return (
    <MyDetailsContextProvider value={{ myname, updateMyName }}>
      <h1>Hello</h1>
      <button onClick={() => setMyname("Anandhu")}>Set your name</button>
      <Profile />
    </MyDetailsContextProvider>
  );
}

export default App;
