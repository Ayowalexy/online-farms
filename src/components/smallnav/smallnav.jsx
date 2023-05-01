import Crown from "../../assets/crown.svg"
import { Link } from "react-router-dom";
import "./smallnav.styles.scss"
const SmallNav = () => {
    return(
        <div className="smallnav-container">
        <div className="nav-items" style={{display: "flex", alignItems: "flex-start", paddingLeft: "1rem", paddingTop: "1rem"}}>
        <Link className="logo" style={{width:"1.5rem", height: "1.5rem"}} to="/">
        <img src= {Crown} alt="" style={{width: "100%", height: "100%", objectFit: "contain"}}/>
        </Link>
        </div>
        </div>

    )
}
export default SmallNav;