import Footer from "../components/Footer"
import Heroimage2 from "../components/Heroimage2"
import Navbar from "../components/Navbar"
import PricingCard from "../components/PricingCard"
import Work from "../components/Work"

const Project =()=>{
    return(
        <div>
            <Navbar/>       
            <Heroimage2 heading="Project" text="Explore my recent web development projects, where I showcase my skills and creativity as a frontend developer"/>   
            <Work/>
            <PricingCard/>  
            <Footer/>
        </div>
    )
}
export default Project