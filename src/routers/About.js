import AboutContent from "../components/AboutContent"
import Footer from "../components/Footer"
import Heroimage2 from "../components/Heroimage2"
import Navbar from "../components/Navbar"
const About =()=>{
    return(
        <div>
            <Navbar/>     
            <Heroimage2 heading="About" text="Frontend developer with a focus on creating user-friendly web experiences using HTML, CSS, JavaScript, and React. Eager to learn and passionate about design and performance."/>   
            <AboutContent/>    
            <Footer/>
        </div>
    )
}
export default About