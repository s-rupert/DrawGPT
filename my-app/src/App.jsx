import { useState } from "react";
import "./App.css";
import { X, Minimize, MinusIcon } from "lucide-react";
import LoadingPage from "./Pages/LoadingPage";
import Workshop from "./Pages/Workshop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="border-2 border-black w-full h-screen">
      <div className="z-auto flex flex-row w-full h-7 bg-black text-white justify-between pl-1">
        <h2>DrawGPT</h2>
        <div className="flex flex-row">
          <button
            className="py-1 px-3 hover:bg-gray-800"
            onClick={() => window.electronAPI.minimize()}
          >
            <MinusIcon size={20} />
          </button>
          <button className="py-1 px-3 hover:bg-gray-800">
            <Minimize size={20} onClick={() => window.electronAPI.restore()} />
          </button>
          <button
            className="py-1 px-3 hover:bg-red-900"
            onClick={() => window.electronAPI.close()}
          >
            <X size={20} />
          </button>
        </div>
      </div>
      {/* <LoadingPage /> */}
      <Workshop />
    </div>
  );
}

export default App;
