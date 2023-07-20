import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>

    return (
        <div className="relative">
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && <Modal onClose={handleClose} actionBar={actionBar}>
                <p>You need to accept the agreement</p>
            </Modal>}
        </div>
    )
}

export default ModalPage;