import About from './component/About';
import './App.css';
import { createContext, useState } from 'react';
import Login from './component/Login';
export const context = createContext();
function App() {
  const colors={
    "1":'green',
    "2" : "blue",
    "3" : "yellow"
   }
   const read="this is a readable line";
   console.log(colors);
  const [count,setCount] = useState(0);
  const [color,setColor] = useState();
  const [readable,setread] = useState(read);
  setInterval(()=> {
    setCount(count+1);
    if(count==1||count==2||count==3){
      setColor(colors[count]);
    }
  }, 1500);
  const [check,setcheck] = useState(0);
  function click(){
   if(check==0){
    setcheck(1);
   }
   else{
    setcheck(0);
   }
  }
  return(
    <>
    <context.Provider value={{appColor:color,write:readable}}> 
     <button onClick={click}>click</button>
     {check==1?<Login/>:<About/>}
    </context.Provider>
    </>
  );

}
export default App;
