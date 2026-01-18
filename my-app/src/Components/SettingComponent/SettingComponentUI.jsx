import React, { useState, useContext } from "react";
import { Settings } from "lucide-react";
import { PageContext } from "../PageContext";
import Personalize from "./Personalize";

const SettingComponentUI = () => {
  const { isSettingOpen, setIsSettingOpen, isPersonalizeOpen, setIsPersonalizeOpen } = useContext(PageContext);
  const color = "#4F46E5";

  return (
    <div>
      <Settings
        size={30}
        className="rounded-md hover:text-black hover:bg-blue-400 py-1 px-1 ml-3"
        onClick={() => setIsSettingOpen(true)}
        onMouseEnter={() => setIsSettingOpen(true)}
      />
      <div
        className={`absolute right-1 z-1 bg-blue-500 text-white text-center p-1 mt-1 rounded-md shadow-lg flex flex-col gap-1 ${
          isSettingOpen ? "flex" : "hidden"
        }`}
      >
        <div className="hover:bg-blue-400 px-12 py-1 rounded-lg">Recents</div>
        <div className="hover:bg-blue-400 px-12 py-1 rounded-lg" onClick={() => setIsPersonalizeOpen(!isPersonalizeOpen)}>
          Personalize
        </div>
        <div className="hover:bg-blue-400 px-12 py-1 rounded-lg">Shortcuts</div>
        <div className="hover:bg-blue-400 px-12 py-1 rounded-lg">
          My Account
        </div>
        <div className="hover:bg-blue-400 px-12 py-1 rounded-lg">Settings</div>
        <div className="hover:bg-blue-400 px-12 py-1 rounded-lg">Help</div>
      </div>
      {isPersonalizeOpen && <Personalize />}

    </div>
  );
};

export default SettingComponentUI;
