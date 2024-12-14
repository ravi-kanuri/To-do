import React, { createContext, useState,useEffect } from 'react';
import Header from './Header';
import Body from './Body';
import './App.css';

const newdata=sessionStorage.getItem("data");

const DataContext = createContext();

function App() {
  const [data, setData] = useState(newdata ? JSON.parse(newdata) : []);

  useEffect(()=>{
    sessionStorage.setItem("data",JSON.stringify(data))
  },[data])

  return (
    <DataContext.Provider value={{ data, setData }}>
      <Header />
      <hr />
      <Body />
    </DataContext.Provider>
  );
}

export { DataContext }; 
export default App;

