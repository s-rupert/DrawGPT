import { createContext, useState, useRef } from "react";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [OpFile, setOpFile] = useState(false)
  const [OpEdit, setOpEdit] = useState(false)
  const [OpView, setOpView] = useState(false)


  const FuncOption = ()=> {
    if(OpFile){
        setOpFile(false)
    } else if(OpEdit){
        setOpEdit(false)
    } else if(OpView){
      setOpView(false)
    }
  }


  return (
    <PageContext.Provider
      value={{
        OpFile,
        setOpFile,
        OpEdit,
        setOpEdit,
        OpView,
        setOpView,
        FuncOption
      }}
    >
      {children}
    </PageContext.Provider>
  );
};