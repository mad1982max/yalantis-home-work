import { useEffect } from "react";
import { createPortal } from "react-dom";
import "Components/BurgerMenu/burgerMenu.css";

const BurgerMenuPortal = ({ children }) => {
  const mount = document.getElementById("portal-root");
  const el = document.createElement("div");
  el.innerHTML = "FUTURE PORTAL FOR FILTERS";
  el.classList.add("portal");

  useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el);
};

export default BurgerMenuPortal;
