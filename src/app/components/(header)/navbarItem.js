import React from "react";

import "./header.css";

export default function NavbarItem(props) {
  return (
    <>
      <li className="nav-item" id={props.active ? "active" : "not-active"}>
        <a
          className="nav-link"
          id={props.active ? "active" : "not-active"}
          href={props.href || "#"}
          role="button"
          aria-expanded="false"
        >
          {props.name}
        </a>
      </li>
    </>
  );
}
