import React from 'react';

function Loader() {
    return (
      <div className="flex items-center justify-center mt-10">
        <div className="relative w-40 h-10 border-4 border-gray-800 rounded-md">
          <div className="absolute right-[-8px] top-1 h-6 w-2 bg-gray-800 rounded-sm"></div>
          <div className="battery-fill h-full bg-black rounded-xs animate-battery"></div>
        </div>
  
        <style>
          {`
            @keyframes battery {
              0% { width: 0%; }
              100% { width: 100%; }
            }
  
            .animate-battery {
              animation: battery 4s linear infinite;
            }
          `}
        </style>
      </div>
    );
  }
  
  export default Loader;
  