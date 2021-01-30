import { useEffect } from "react";
import { createPortal } from "react-dom";
import "Components/NewProductPortal/newProductPortal.css";

const NewProductPortal = ({ children }) => {
  const mount = document.getElementById("product-portal-root");
  const el = document.createElement("div");
  el.classList.add("portal");

  useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el);
};

export default NewProductPortal;
