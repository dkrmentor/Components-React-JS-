import React from "react";

function Child(props){
    return(
        <div>
           

            <h1>
                {props.title}
            </h1>
            <h2>
                {props.name}
            </h2>
            <h3>
                {props.age}
            </h3>
        </div>
    )
}

function Child2(props){
    return(
        <div>
            <button onClick={()=>props.gettdata("dhara")}>
                Send
            </button>

        </div>
    )
}


export {Child, Child2};