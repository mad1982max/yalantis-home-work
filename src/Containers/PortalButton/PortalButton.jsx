import { useSelector, useDispatch } from "react-redux";
import NewProductPortal from "Components/NewProductPortal/NewProductPortal";
import CreationForm from "Components/ModalForm/ModalForm";
import { menuVisibility } from "Bus/Selectors/pageSelector";
import { setVisibility } from "Bus/Slicers/pageSlicer";
import addNewIco from "Assets/img/ico/add.png";
import hideIco from "Assets/img/ico/hide.png";
import edit from "Assets/img/ico/edit.png";
import "Containers/PortalButton/portalButton.css";

const PortalButton = ({ modalPayload }) => {
  const dispatch = useDispatch();
  const showPortal = () => dispatch(setVisibility());
  const portalVisibility = useSelector(menuVisibility);

  return (
    <>
      <button
        onClick={showPortal}
        className="portalBtn newProduct"
        type="button">
        {modalPayload.type === "form" ? (
          <img src={portalVisibility ? hideIco : addNewIco} alt="addIco" />
        ) : (
          <img src={edit} alt="addIco" />
        )}
      </button>

      {portalVisibility && (
        <NewProductPortal>
          <CreationForm modalPayload={modalPayload} />
        </NewProductPortal>
      )}
    </>
  );
};

export default PortalButton;
