import "./workcard.css"
import { NavLink } from "react-router-dom"

const WorkCard =(props)=>{
    return(
        <div className="work-container">
            <div className="project-card">
                    <img src={props.imgsrc}></img>
                    <h2 className="title">{props.title}</h2>
                    <div className="detail">
                        <p>{props.text}</p>
                        <div className="pro-btn">
                            <NavLink to={props.view} className="btn">View</NavLink>
                            <NavLink to="https://github.com/adhiththiyan" className="btn">Source</NavLink>

                        </div>
                    </div>
                </div>
            
        </div>
    )
}
export default WorkCard