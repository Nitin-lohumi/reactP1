import React,{ useContext } from "react";
import { context } from "../App";
function About(){
    const color = useContext(context);
   return(
    <>
    <h1 style={{color:color.appColor}}>
        hello this is {color.appColor}
    </h1>
    </>
   )
}
export default About;