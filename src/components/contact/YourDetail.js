

const YourDetail = ()=>{
    return(
        <div className="text-left text-white flex flex-col ">
          <label>Full Name</label>
          <input className="bg-zinc-800 border-2 border-zinc-500 rounded-lg w-72 mb-2 p-2" placeholder="Enter Name"/>
          <label>Email Address</label>
          <input className="bg-zinc-800 border-2 border-zinc-500 rounded-lg w-72 mb-2 p-2" placeholder="Enter Email"/>
          <label>Message</label>
          <input className="bg-zinc-800 border-2 border-zinc-500 rounded-lg w-72 mb-2 p-2" placeholder="Enter Message"/>
          <button className="bg-teal-500 py-1 mt-8 rounded-md text-bold w-40">Send Message 🗒️</button>
        </div>
    )
}

export default YourDetail;