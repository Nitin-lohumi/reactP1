import React,{ useContext } from "react";
import { context } from "../App";
function Login(){
   const state = useContext(context);
   return (
    <>
    <h1>thiis is login page {state.appColor}</h1>
    <i>{state.write}</i>
    </>
   )
}
export default Login;