import React, { useState } from "react";
import FormInput from "./components/FormInput";

function App() {
  const [password, setPassword] = useState("");
  const [hide, setHide] = useState(false);
  return (
    <div>
      <button onClick={() => setHide(!hide)}>Toggle</button>
      {!hide && (
        <FormInput
          type="email"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          wrong={true}
        ></FormInput>
      )}
    </div>
  );
}

export default App;
