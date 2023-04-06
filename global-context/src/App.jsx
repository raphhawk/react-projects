import "./App.css";
import { useGlobalContext } from "./context";

function App() {
  const { name, setName } = useGlobalContext();
  return (
    <h2
      onClick={() => {
        setName("bob" ? "peter" : "bob");
      }}
    >
      Global Context {name}
    </h2>
  );
}

export default App;
