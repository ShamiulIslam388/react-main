import React, { useState } from "react";

//icons
import { Icon } from "@iconify/react";

// style
import "./MobileMenu.css";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Icon
        icon="bx:menu"
        className="mobilemenu-menu-icon"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div
        className={
          isOpen
            ? "mobilemenu-menu-container active"
            : "mobilemenu-menu-container"
        }
      >
        <div className="mobilemenu-menu-item" onClick={() => setIsOpen(false)}>
          Home
        </div>
        <div className="mobilemenu-menu-item" onClick={() => setIsOpen(false)}>
          About
        </div>
        <div className="mobilemenu-menu-item" onClick={() => setIsOpen(false)}>
          Contact
        </div>
        <div className="mobilemenu-menu-item" onClick={() => setIsOpen(false)}>
          Login
        </div>
        <Icon
          icon="ci:close-big"
          className="mobilemenu-close-icon"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
}

export default MobileMenu;
