import React from "react";
import testingimage from "../images/Designer _Isometric.png"



function A() {
    return (
        <div>
            <h1>
                a
            </h1>
        </div>
    )
}

function B() {
    return (
        <div>
            <h1>b
            </h1>        </div>
    )
}

function C() {
    return (
        <div>
            <img  src={testingimage} alt=""/>


        </div>
    )
}


export {
    A,
    B, C

}  