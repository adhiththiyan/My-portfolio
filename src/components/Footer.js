import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Vellore</p>
                            <p>Crrently staying in Bangalore</p>
                        </div>
                    </div>
                    <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        9566853297
                    </h4>
                </div>

                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        adhiththiyan07@gmail.com
                    </h4>
                </div>
                </div>
                <div className="right">
                    {/* <h4>About the company</h4> */}
                    <p>I'm a passionate frontend developer dedicated to creating stunning and user-centric websites. With a focus on clean code and cutting-edge technologies, I aim to deliver the best user experiences possible. Let's embark on a journey to build the web of the future together.</p>
                    <div className="social">
                    <FaFacebook size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                    <FaTwitter size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                    <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                    </div>
                </div>                
            </div>
        </div>
    )
}
export default Footer