import Quote from "./components/Quote";
function App() {
  return (
    <>
      <nav className="flex justify-end font-semibold text-xl text-center p-5">
        <p className="">Random</p>
        <i>
          <span className="material-symbols-outlined">refresh</span>
        </i>
      </nav>
      <main className="w-full flex justify-center mt-60 max-w-xl m-auto">
        <Quote />
      </main>
    </>
  );
}

export default App;
