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
  const [count,setCount] = useState(0);
  const [color,setColor] = useState();
  setInterval(()=> {
    setCount(count+1);
   if( count <=3 ){
    setColor(colors[count]);
   }else{
    do{
      setCount(0);
      setColor(colors[count]);
      console.log(count);
     }while(count!=0);
   }
  }, 1000);
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
    <context.Provider value={{appColor:color}}> 
     <button onClick={click}>click</button>
     {check==1?<Login/>:<About/>}
    </context.Provider>
    </>
  );

}
export default App;
