import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

interface ButtonProbs
{
    data : string
    className : string
}

let Button = ({data , className} : ButtonProbs)=>
{
    return (
        <>
        <button className={className} >{data}</button>
        </>
    );
}
export default Button;