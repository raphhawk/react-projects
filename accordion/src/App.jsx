import { Question } from "./Question";
import questions from "./data";

function App() {
  return (
    <main className="flex flex-row border w-5/6 my-20 mx-auto bg-white rounded-lg">
      <div className="p-4 mt-20">
        <h1 className="capitalize text-3xl subpixel-antialiased font-sans ">
          questions and answers about login
        </h1>
      </div>
      <div className="flex-flex-col w-full">
        {questions.map((q) => (
          <Question q={q} key={q.id} />
        ))}
      </div>
    </main>
  );
}

export default App;
