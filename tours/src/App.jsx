import "./App.css";
import { cssStyles } from "./css";
import Card from "./components/Card";

const url = "https://course-api.com/react-tours-project";

function App() {
  return (
    <section className={cssStyles.section}>
      <h1 className={cssStyles.h1}>Our Tours</h1>
      <article className="bg-gray-200 w-1/2"></article>
      <Card url={url} />
    </section>
  );
}

export default App;
