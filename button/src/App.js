import './App.css';

function App() {

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-6">
      <h1 className="text-bold text-2xl py-5">Click the button</h1>
      <div className="h-10">
        <button type="button" className="rounded-xl bg-sky-500 px-5 py-3 hover:bg-sky-600 active:bg-sky-800 border-b-[6px] active:translate-y-[4px] active:border-b-[2px] border-b-sky-700" id='btn1'>Button</button>
      </div>
    </div>
  );
}

export default App;