import { Link } from "react-router-dom"
import "./aboutcontent.css"
import image1 from "../assests/photo-444.avif"
import image2 from "../assests/photo1.avif"

const AboutContent =()=>{
    return(
        <div className="about">
            <div className="left">
                <h1>who i am I</h1>
                <p>I am react developer. I create a responsive website for my clients</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={image1} className="img"></img>
                    </div>
                    <div className="img-stack bottom">
                        <img src={image2} className="img"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutContent