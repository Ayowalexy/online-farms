import "./dropdown.styles.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const DropDown = () => {
    const { user } = useSelector( state => state.authReducer);
    const navigate = useNavigate()
  return (
    <div className="dropdown-container" onClick={() => navigate('/auth')}>
        <div  className="sign-cta">Sign In</div>
        <div  className="sign-cta">{user?.email}</div>
    </div>
  )
};
export default DropDown;
