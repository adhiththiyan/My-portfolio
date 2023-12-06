import { Link } from "react-router-dom"
import "./Pricing.css"

const PricingCard =()=>{
    return(
        <div className="pricing">
            <div className="card-container">
                <div className="card">
                    <h3>--Basic--</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 100</p>
                    <p>-3 days-</p>
                    <p>-3 pages-</p>
                    <p>-Featured-</p>
                    <p>Responsive Design</p>
                    <Link to="/contact" className="btn">Purchase Now</Link>
                </div>
                <div className="card">
                    <h3>--Basic--</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 100</p>
                    <p>-3 days-</p>
                    <p>-3 pages-</p>
                    <p>-Featured-</p>
                    <p>Responsive Design</p>
                    <Link to="/contact" className="btn">Purchase Now</Link>
                </div>
                <div className="card">
                    <h3>--Basic--</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 100</p>
                    <p>-3 days-</p>
                    <p>-3 pages-</p>
                    <p>-Featured-</p>
                    <p>Responsive Design</p>
                    <Link to="/contact" className="btn">Purchase Now</Link>
                </div>
            </div>
        </div>
    )
}
export default PricingCard