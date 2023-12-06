import "./heroimage.css"
import image1 from "../assests/photo-444.avif"
import { Link } from "react-router-dom"

const Heroimage =()=>{
    return(
        <div className="hero">
            <div className="mask">
              <img src={image1} className="into-img"></img>
            </div>
            <div className="content">
                <p>Hi Iam Adhiththiyan</p>
                <h1>Frontend Developer</h1>
                <div>
                <Link to="/project" className="btn">Project</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
            </div>
            
        </div>
    )
}
export default Heroimage