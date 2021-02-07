import { useEffect } from "react";
import { createPortal } from "react-dom";
import "Components/Portal/productPortal.css";

const Portal = ({ type, children }) => {
  console.log("props.type", type);
  const mount = document.getElementById(type);
  const el = document.createElement("div");
  el.classList.add("portal");

  useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el);
};

export default Portal;
