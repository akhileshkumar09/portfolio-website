

const Card = (props)=>{
    return(
     <div className="w-60 text-left hover:bg-teal-400 text-white hover:text-black  my-10 rounded p-5 bg-zinc-800">
        <span className="relative   text-4xl ">{props.logo}</span>
        <span className="relative   text-4xl font-bold text-gray-500 left-32 ">{props.count}</span>
        <h2 className="font-semibold text-xl "> {props.title}</h2>
        <hr className="w-44 my-1 border-zinc-700 border-b-2"/>
        <p className="">{props.text} </p>
     </div>

    )
}

export default Card;

// Experts are trying to determine whether artificially stimulating production of
//         melatonin might help slow the aging process . . . 