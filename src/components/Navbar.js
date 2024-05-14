import React,{ useState,useEffect } from "react";


const Navbar = () => {

    const [showElement,setShowElement] = useState(true);
    const [hideClass, setHideClass] = useState('');
    const [additionalClass, setAdditionalClass] = useState('');
    const [bgClass, setBgClass] = useState('');

    const handleOnClick = ()=>{
        setShowElement(true);
        setAdditionalClass('flex-col')
        setHideClass('h-screen')
        setBgClass('w-full')
    }

    const handleHideDiv = ()=>{
        setShowElement(false);
        setAdditionalClass('')
        setHideClass('')
        setBgClass('')
    }

    const showVisiability = () => {
        if(window.innerWidth >= 916){
            setShowElement(true);
        } else {
            setShowElement(false);
        }
    }


    useEffect(()=>{
       showVisiability();
       window.addEventListener('resize', showVisiability);
       return()=>{
        window.removeEventListener('resize', showVisiability);
       }
    },[]);

    return (
        <>
         {/* <div onClick={handleHideDiv} className={` flex justify-center items-center `}> */}
        <div className="text-white flex justify-between w-full py-5">
        <div className="logo">
            <p className="font-semibold text-4xl sm:text-xl mx-5 hover:font-extrabold cursor-pointer font-sans" >
            Leinad<span className="text-teal-500 font-serif">.</span>
            </p>
        </div>

        <div  className={`${bgClass}`}>
          {showElement && <ul onClick={handleHideDiv} className={`${hideClass}  flex gap-12 mx-20 ${additionalClass}`} >
                <li className="cursor-pointer  hover:text-teal-500 hover:font-bold ">Home</li>
                <li className="cursor-pointer  hover:text-teal-500 hover:font-bold" >Featured projects</li>
                <li className="cursor-pointer  hover:text-teal-500 hover:font-bold" >About me</li>
                <li className="cursor-pointer  hover:text-teal-500 hover:font-bold" >Contact me</li>
                <li className="cursor-pointer text-black hover:font-bold bg-teal-400 px-2 rounded-lg w-36"  >View Resume &nbsp;✉️</li>
            </ul>}
           {!showElement && <button onClick={handleOnClick} className="mx-10 "><hr className="w-6 border-t-2 border-zinc-400 m-1"/><hr className="w-6 border-t-2 border-zinc-400 m-1"/><hr className="w-6 border-t-2 border-zinc-400 m-1"/></button>}
        </div>
        </div>
        {/* </div> */}
        </>
    )
}

export default Navbar;