import "./App.css";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import { useGlobalContext } from "./context";

function App() {
  const { sidebar, modal } = useGlobalContext();
  return (
    <div>
      {<Home />}
      {sidebar && <Sidebar className="" />}
      {modal && <Modal />}
    </div>
  );
}

export default App;
