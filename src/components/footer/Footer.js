

const Footer = () =>{
    return(
        <div className="md:mx-10 sm:mx-2 text-center bg-zinc-800">
        <div className="text-center text-white bg-zinc-800 flex py-4  justify-between mt-20 max-[600px]:flex-col"> 
          <div className="logo  ">
            <p className="font-bold text-xl mx-5 hover:font-extrabold cursor-pointer font-sans">Leinad<span className="text-teal-500 font-serif">.</span></p>
          </div>

          <div className="flex md:gap-16 md:pr-28 sm:gap-2 sm:pr-3">
            <div>
              <p>first link</p>
              <p>second link</p>
            </div>
          <div className="w-1 h-32 border-l-2 border-white"></div>
            <div>
              <p>first link</p>
              <p>second link</p>
              <p>third link</p>
            </div>
          <div className="w-1 h-32 border-l-2 border-white"></div>
            <div>
              <p>first link &nbsp; second link</p>
              <div className="flex gap-3 my-3 sm:flex-col md:flex-row">
                <span className="text-xl">📞</span>
                <span className="text-xl">⏹️</span>
                <span className="text-xl">📱</span>
                <span className="text-xl"> ⚽</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t-2 border-white mt-8"></div>
        <p className="text-white pb-8 pt-2  ">I'm currently open to<span className="text-teal-500"> development</span>.</p>
         </div>
    )
}

export default Footer;