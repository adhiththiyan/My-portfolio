import { Link } from "react-router-dom"
import "./navbar.css"
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from "react"

const Navbar =()=>{
    const [click, setClick] = useState(false)
    const [color, setColor]  = useState(false)
    const changeColor =()=>{
        if(window.scrollY >= 100){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }
    window.addEventListener("scroll",changeColor)
    const handle =()=>{
        setClick(!click)
    }
    return(
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/"><h1>Portfolio</h1></Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="hambuger" onClick={handle}>
                {!click ? (
                    <FaBars style={{color:"#fff"}} size={20}></FaBars>
                ):
                (<FaTimes style={{color:"#fff"}} size={20}></FaTimes>)}
                
                

            </div>
        </div>
    )
}
export default Navbar