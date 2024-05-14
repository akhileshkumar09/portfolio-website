import Title from "../feature/Title";
import Profile from "./Profile";
import Detail from "./Detail";
import Skill from "./Skills";
import SkillList from "./SkillList";

const About = () =>{
    return(
        <div  className="text-center bg-zinc-800 md:mx-10 sm:mx-2 p-4">
        <Title p="know" H1="About" H2=" me"/>
        <div className="flex justify-around sm:flex-col sm:items-center md:flex-row flex-shrink py-10 ">
        <Profile/>
        <Detail/>
        </div>
        <div className="flex justify-around sm:flex-col sm:items-center md:flex-row flex-shrink py-10 ">
        <Skill/>
        <SkillList/>
        </div>
        </div>
        

    )
}

export default About;