'use client'
import './logOutButton.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonThroughWindow } from "@fortawesome/free-solid-svg-icons";

export default function SignOutButton() {
    return(
        <form action="http://localhost:5000/auth/logout">
            <button type='submit' id="signOutButton">
                <FontAwesomeIcon icon={faPersonThroughWindow} style={{fontSize: '1.5vw'}}/>
                &nbsp;<div>Log out</div>
            </button>
        </form>
    );
} 