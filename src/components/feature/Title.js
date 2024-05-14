import React from "react";

const Title = (props)=>{
    return(<div className="text-white">
        <p className="text-sm">{props.p}</p>
        <h1 className=" text-2xl ">{props.H1}<span className="text-teal-500">{props.H2}</span>.</h1>
    </div>
    )
}

export default Title;