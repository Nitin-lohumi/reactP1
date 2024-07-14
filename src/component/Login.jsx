import React,{ useContext } from "react";
import { context } from "../App";
function Login(){
   const {appColor} = useContext(context);
   return (
    <>
    <h1>thiis is login page {appColor}</h1>
    <i>heuuu</i>
    </>
   )
}
export default Login;