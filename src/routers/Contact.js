import Form from "../components/Form"
import Footer from "../components/Footer"
import Heroimage2 from "../components/Heroimage2"
import Navbar from "../components/Navbar"
const Contact =()=>{
    return(
        <div>
            <Navbar/>         
            <Heroimage2 heading="Contact" text="Let's have chat"/>  
            <Form/> 
            <Footer/>
        </div>
    )
}
export default Contact