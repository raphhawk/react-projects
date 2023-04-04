import "./App.css";
import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [colors, setColors] = useState(new Values("#3449eb").all(10));

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <main>
      <ToastContainer position="top-center" />
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </main>
  );
}

export default App;
