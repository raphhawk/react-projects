import { css } from "../../css.jsx";
import { Reviews } from "./components/Reviews.jsx";

function App() {
  return (
    <main className={css.main}>
      <h1 className={css.heading}>Our Reviews</h1>
      <hr className={css.hr} />
      <Reviews />
    </main>
  );
}

export default App;
