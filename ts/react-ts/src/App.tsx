import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button
        style={{
          background: "white",
          border: "1px solid #ccc",
          color: "black",
        }}
      >
        Edit Profile
      </Button>
    </div>
  );
}

export default App;
