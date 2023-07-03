import { useState } from "react";
import Quote from "./components/Quote";
function App() {
  const [randomButton, setRandomButton] = useState(false);
  const handleClick = () => setRandomButton(!randomButton);

  return (
    <>
      <nav
        className="flex justify-end font-semibold text-xl text-center p-5 cursor-pointer"
        onClick={handleClick}
      >
        <p className="">Random</p>
        <i>
          <span className="material-symbols-outlined">refresh</span>
        </i>
      </nav>
      <main className="w-full flex justify-center mt-60 max-w-xl m-auto">
        <Quote randomButton={randomButton} />
      </main>
    </>
  );
}

export default App;
