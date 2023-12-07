import { useCallback, useState } from "react";
import Menu from "./Menu";
import MenuIcon from "./assets/menu.svg";

export default function MenuButton({ className }) {
    const [modalShown, setModalShown] = useState(false);
    const onCloseModal = useCallback(() => setModalShown(false), [setModalShown]);
    return (<>
        <Menu shown={modalShown} onClose={onCloseModal} />
        <img src={MenuIcon} alt="Menu" className={`${className} menu-icon`} onClick={() => setModalShown(true)} />
    </>);
}