

const SkillList = ()=>{
    return(
        <div className="w-96 text-white flex flex-col gap-6 py-3 sm:px-5 ">
        <div className=" flex gap-6">
            <span className="border-teal-500 border-2 bg-zinc-700 rounded-full p-2 py-4">HTML</span>
            <span className="border-teal-500 border-2 bg-zinc-700 rounded-md p-4 sm:px-10 ">JAVASCRIPT</span>
            <span className="border-teal-500 border-2 bg-zinc-700 rounded-full p-4 ">CSS</span>
        </div>
        <div className=" flex gap-6">
            <span className="border-teal-500 border-2 bg-zinc-700 rounded-full p-4 sm:px-10 ">REACT</span>
            <span className="border-teal-500 border-2 bg-zinc-700 rounded-md p-4 sm:px-10 ">TAILWIND</span>
            
        </div>
        <div className=" flex gap-6">
            <span className="border-teal-500 border-2 bg-zinc-700 rounded-md p-2 py-4 sm:px-10 md:px-5">UI DESIGN</span>
            <span className="border-teal-500 border-2 bg-zinc-700 rounded-full p-4 sm:px-10 ">TYPESCRIPT</span>
            
        </div>

        </div>
    )
}
export default SkillList;