import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Auth from "../../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

const logout = (event) => {
  event.preventDeafult();
  Auth.logout();
};

function NavBar({ currentPage, handlePageChange }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top" expand="xxl">
        <Navbar.Brand>
          <a href="https://github.com/Castoreno05/Project_3" target="_blank">
            <img
              src={"https://img.icons8.com/color/48/000000/github--v1.png"}
              width="40px"
              height="40px"
            />{" "}
            {""}
          </a>
          Bootcamp Blog
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link
              href="/"
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> Home
            </Nav.Link>
            <Nav.Link
              href="/dashboard"
              onClick={() => handlePageChange("Dashboard")}
              className={
                currentPage === "Dashboard" ? "nav-link active" : "nav-link"
              }
            >
              <FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon> Dashboard
            </Nav.Link>
            <Nav.Link
              href="/resources"
              onClick={() => handlePageChange("Resources")}
              className={
                currentPage === "Resources" ? "nav-link active" : "nav-link"
              }
            >
              <FontAwesomeIcon icon={faFileCode}></FontAwesomeIcon> Resources
            </Nav.Link>
            <Nav.Link
              href="/login"
              onClick={() => handlePageChange("Login")}
              className={
                currentPage === "Login" ? "nav-link active" : "nav-link"
              }
            >
              <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon> Login
            </Nav.Link>
            <Nav.Link
              href="/signup"
              onClick={() => handlePageChange("SignUp")}
              className={
                currentPage === "SignUp" ? "nav-link active" : "nav-link"
              }
            >
              <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon> SignUp
            </Nav.Link>
            <Nav.Link
              href="/logout"
              onClick={() => handlePageChange("Logout")}
              className={
                currentPage === "Logout" ? "nav-link active" : "nav-link"
              }
            >
              <FontAwesomeIcon icon={faLeftLong}></FontAwesomeIcon> Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;


// import React from "react";
// import "./navbar.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse } from "@fortawesome/free-solid-svg-icons";
// import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
// import { faFileCode } from "@fortawesome/free-solid-svg-icons";
// import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
// import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
// import { faClipboard } from "@fortawesome/free-solid-svg-icons";
// import Auth from "../../utils/auth";

//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();

//   }
// function NavBar({ currentPage, handlePageChange }) {
//   return (
//     <div className="container-nav">
//       <ul className="nav nav-tabs homeTabs">
//       <li className="nav nav-tabs bg-dark homeTab">
//         <a
//           href="/"
//           onClick={() => handlePageChange("Home")}
//           className={currentPage === "Home" ? "nav-link active" : "nav-link"}
//         >
//           <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
//           Home
//         </a>
//       </li>
//       <li className="nav nav-tabs bg-dark dashboardTab">
//         <a
//           href="/dashboard"
//           onClick={() => handlePageChange("Dashboard")}
//           className={
//             currentPage === "Dashboard" ? "nav-link active" : "nav-link"
//           }
//         >
//           <FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon>
//           Dashboard
//         </a>
//       </li>
//       <li className="nav nav-tabs bg-dark resourcesTab">
//         <a
//           href="/resources"
//           onClick={() => handlePageChange("Resources")}
//           className={
//             currentPage === "Resources" ? "nav-link active" : "nav-link"
//           }
//         >
//           <FontAwesomeIcon icon={faFileCode}></FontAwesomeIcon>
//           Resources
//         </a>
//       </li>
//       <li className="nav nav-tabs bg-dark loginTab">
//         <a
//           href="/login"
//           onClick={() => handlePageChange("Login")}
//           className={currentPage === "Login" ? "nav-link active" : "nav-link"}
//         >
//           <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
//           Login
//         </a>
//       </li>
//       <li className="nav nav-tabs bg-dark signupTab">
//         <a
//           href="/signup"
//           onClick={() => handlePageChange("SignUp")}
//           className={currentPage === "SignUp" ? "nav-link active" : "nav-link"}
//         >
//           <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
//           Sign Up
//         </a>
//       </li>
//       <li className="nav nav-tabs bg-dark signoutTab">

//       <button
//       className="signoutBtn"
//       style={{ cursor: "pointer" }}
//       type="submit"
//        onClick={logout}
//     >
//       <FontAwesomeIcon icon={faLeftLong}></FontAwesomeIcon>
//       Logout
//     </button>
//         {/* <a
//           href="/SignOut"
//           onClick={() => handlePageChange("SignOut")}
//           className={currentPage === "SignUp" ? "nav-link active" : "nav-link"}
//         >
//           Logout
//         </a> */}
//       </li>
//     </ul>
//     </div>

//   );
// }

// export default NavBar;
