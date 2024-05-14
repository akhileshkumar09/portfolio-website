
import Title from "./Title";
import Card from "./Card";
import Featurecard from "./FeatureCard";

const Feature = ()=>{
    return (
       <div className="text-center bg-zinc-900 md:mx-10 sm:mx-2 p-4 ">   
         <Title p="SERVICES" H1="What" H2=" I do"/>   
        
         <div className="flex justify-around max-[1000px]:flex-wrap  flex-shrink ">
         <Card logo="🕸️" count="01" title="Web Development" text="Experts are trying to determine whether artificially stimulating production of
             melatonin might help slow the aging process . . . "/>

         <Card  logo="📱" count="02" title="Ui Design" text="Spending too much time seated at work or at home not only reduces muscular
             and respiratory fitness but also increases appetite and curbs the desire to
             participate in activities."/>

         <Card logo="📝" count="03" title="Content Writing" text="Science has shown that sleep is a key antiaging tool, because when we sleep
             we generate melatonin, a hormone that occurs naturally in our bodies."/>
         </div> 
           
         <Title p="PORTIFOLIO" H1="Featured" H2=" Project"/>    
         <div className="flex justify-around max-[1000px]:flex-wrap flex-shrink">
         <Featurecard img="https://tse3.mm.bing.net/th?id=OIP._rdHB9LTODxUDFgl5QlfBAHaFQ&pid=Api&P=0&h=180" featureTitle="BeginningReads™" text="TextProject’s BeginningReads program supports teachers, parents, and tutors in bringing children into reading."/>
         <Featurecard img="https://i0.wp.com/textproject.org/wp-content/uploads/sow/SOW-logo.png?fit=485%2C258&ssl=1" featureTitle="Stories of Words" text="Stories of Words aims to develop students’ interest in interesting words (e.g., snickerdoodles, terrapin, scuba)."/>
         <Featurecard img="https://i0.wp.com/textproject.org/wp-content/uploads/2022/10/topic-reads.jpg?w=1140&ssl=1" featureTitle="TextProject" text="TopicReads is an evidence-based set of texts that support vocabulary, background knowledge, and comprehension for struggling, middle-school readers"/>
         </div>
         <div className="flex justify-around max-[1000px]:flex-wrap flex-shrink">
         <Featurecard img="https://i0.wp.com/textproject.org/wp-content/uploads/fyi4k/FYI-for-KIDS.png?fit=282%2C302&ssl=1" featureTitle="FYI for Kids" text="A collection of engaging and high-quality magazine articles designed to enhance the Common Core classroom’s reading repertoire."/>
         <Featurecard img="https://i0.wp.com/textproject.org/wp-content/uploads/favorites/Kyle-keeps-track-of-cash.jpg?fit=150%2C150&ssl=1" featureTitle="Kyle Keeps Track of Cash" text="Written by Lisa Bullard; illustrated by Mike ByrneThis book is one in a series that focuses on money and economics for young kids."/>
         <Featurecard img="https://i0.wp.com/textproject.org/wp-content/uploads/favorites/wild-animal.jpg?w=225&ssl=1" featureTitle="Wild Animal Neighbors" text="Everyone knows that bears live in the forest and alligators live in the swamp. But as cities spread out more and more, wild animals can be found living in our cities."/>
         </div>
       </div>
    )
}

export default Feature;