import "./menu.scss";
import {Link} from "react-router-dom"


 function Menu({ menuOpen, setMenuOpen }) {
  return (
    
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/experience/">Experience </Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
        <Link to="/project/">Projects</Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
        <Link to="/about/">About</Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
        <Link to="/contact/">Contact</Link>
        </li>
       
      </ul>
    </div>
  );
}

export default Menu