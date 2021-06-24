import { useState } from "react";
import {Link} from "react-router-dom";
import Logo from '../Images/logohere.png'
function UserCard({item}){
//getting id as props from Users component
const [id,setId] = useState(item.id)
    return (
        //setting id to URL for user differentiation
        <Link
            to={{pathname:`/User/${id}`, state: id }}
            className={"card-margin align-left is-row is-card"}
        >
            <div className="is-50">
                <div className="image-container">
                    <img className="card-logo" src={Logo} alt="Logo" />
                </div>
            </div>
            <div className="is-50">
                <h3>{item.firstName} - {item.lastName}</h3>
            </div>
        </Link>
    );
}

export default UserCard
