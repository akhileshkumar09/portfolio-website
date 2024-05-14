import Title from "../feature/Title"
import MyDetail from "./MyDetail";
import YourDetail from "./YourDetail";

const Contact = () => {
    return(
        <div className="text-center py-10">
          <Title p="GET NOTICE" H1="Contact" H2=" Me"/>
          <div className=" text-white flex flex-col items-center  py-10">
            <p>I'm currently open to full-time contract or part time opportunity in</p>
            <p>Web development</p>
          </div>
          <div  className=" bg-zinc-800 md:mx-40 sm:mx-2 py-10 flex justify-around sm:flex-col sm:items-center md:flex-row">
           <MyDetail/>
           <YourDetail/>
          </div>
        </div>
    )
}

export default Contact;