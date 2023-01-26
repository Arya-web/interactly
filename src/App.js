import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {Landing } from "./screens";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landing />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
