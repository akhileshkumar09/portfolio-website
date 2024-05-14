


const Featurecard = (props) =>{
    return(
        <>
    <div className="text-white   text-left m-4" style={{width:'250px'}}>
        <div className="border-2 p-2 rounded flex justify-center" style={{width:'220px'}}>
        <img src={props.img} alt="project" style={{ width: '200px', height: '200px' }}/>
        </div>
        <h3 className="text-2xl pt-4 text-teal-500">{props.featureTitle}</h3>
        <p>{props.text}</p>
    </div>
    </>)
    
}


export default Featurecard;