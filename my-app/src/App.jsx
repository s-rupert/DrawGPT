import { useState } from 'react'
import './App.css'
import Pencil from './assets/Pencil';
import Pencil1 from './assets/Pencil1';
import Pencil2 from './assets/Pencil2';
import Pencil3 from './assets/Pencil3';
import Pencil4 from './assets/Pencil4';
import Pencil5 from './assets/Pencil5';
import Pencil6 from './assets/Pencil6';

import {
  PencilRuler,
  ChevronDown,
  Eraser,
  Smile,  
  Ruler,
} from "lucide-react";

function App() {
  const [color, setColor] = useState('#3b82f6');

  return (
    <div className='flex justify-left'>
      <div className='flex items-center justify-center border-2 border-black px-2 gap-1'>
        <div>
          <PencilRuler size={30} />
          <div>Tools</div>
        </div>
        <div>
          <ChevronDown size={15} />
        </div>
      </div>
      <div className='flex items-center justify-center border-2 border-black px-2 gap-1'>
        <div>
          <Eraser size={30} />
          <div>Eraser</div>
        </div>
        <div>
          <ChevronDown size={15} />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center border-2 border-black px-2 gap-1'>
        <div className=''>Pencils</div>
        <div className='flex pb-1'>
          <Pencil size={40} />
          <Pencil1 size={40} />
          <Pencil2 size={40} />
          <Pencil3 size={40} />
          <Pencil4 size={40} />
          <Pencil5 size={40} className="text-yellow-500" />
          <Pencil6 size={40} className="text-red-600" />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center border-2 px-2'>
        <div>Colors</div>
        <div className='flex items-center justify-center'>
          <div>
            <div className='flex gap-1 py-1'>
              <div className='w-5 h-5 rounded-full bg-gray-200'></div>
              <div className='w-5 h-5 rounded-full bg-lime-500'></div>
              <div className='w-5 h-5 rounded-full bg-yellow-500'></div>
              <div className='w-5 h-5 rounded-full bg-teal-500'></div>
              <div className='w-5 h-5 rounded-full bg-cyan-500'></div>
              <div className='w-5 h-5 rounded-full bg-green-500'></div>
              <div className='w-5 h-5 rounded-full bg-orange-500'></div>
            </div>
            <div className='flex gap-1 py-1'>
              <div className='w-5 h-5 rounded-full bg-blue-500'></div>
              <div className='w-5 h-5 rounded-full bg-rose-500'></div>
              <div className='w-5 h-5 rounded-full bg-pink-500'></div>
              <div className='w-5 h-5 rounded-full bg-indigo-500'></div>
              <div className='w-5 h-5 rounded-full bg-purple-500'></div>
              <div className='w-5 h-5 rounded-full bg-slate-500'></div>
              <div className='w-5 h-5 rounded-full bg-black'></div>
            </div>
          </div>
          <div className="px-2">
            <input
              type="color"
              onChange={(e) => setColor(e.target.value)}
              className="w-10 h-10 border-none cursor-pointer"
            />
            <p className="text-sm">Select</p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center border-2 border-black px-2 gap-1'>
        <div>
          <Smile size={30}/>
          <div>Emoji</div>
        </div>
        <div>
          <ChevronDown size={15} />
        </div>
      </div>
       <div className='flex items-center justify-center border-2 border-black px-2 gap-1'>
        <div>
          <Ruler size={30}/>
          <div>Ruler</div>
        </div>
        <div>
          <ChevronDown size={15} />
        </div>
      </div>
    </div>
  )
}

export default App
