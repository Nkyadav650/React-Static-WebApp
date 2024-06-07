import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

const Sidebar = () => {
   return (
      <div >
         <ListGroup>
            <div className="sidebar">
               <div>
                  <Link className="list-group-item" to="/" action>Home</Link>
               </div>
               <div>
                  <Link className="list-group-item" to="/about" action>About</Link>
               </div>
               <div>
                  <Link className="list-group-item" to="/services" action>Services</Link>
               </div>
               <div>
                  <Link className="list-group-item" to="/contact" action>Contact</Link>
               </div>
               <div>
                  <Link className="list-group-item" to="/image" action>View Image</Link>
               </div>
            </div>
         </ListGroup>
      </div>
   )
}
export default Sidebar;