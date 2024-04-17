import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { LANGUAGE_VERSIONS } from "./Constants";

export default function HeaderPart({ language, setLanguage ,code}) {
  const handleClick = (e) => {
    setLanguage(e.target.innerText.toLowerCase());
  };
  return (
    <div className="headerComp">
      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        title={language}
        className="mt-2"
        data-bs-theme="dark"
        onClick={handleClick}
      >
        {LANGUAGE_VERSIONS&&LANGUAGE_VERSIONS.map((item)=>(
            <Dropdown.Item key={item.language}>
            {/* {item.language.charAt(0).toUpperCase()+item.language.slice(1)} */}
            {item.language}
          </Dropdown.Item>
        ))}
        {/* <Dropdown.Item href="#/action-1" active>
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </DropdownButton>
      <div className="run-code">
        <button onClick={()=>console.log(code)}>Run Code</button>
      </div>
    </div>
  );
}
