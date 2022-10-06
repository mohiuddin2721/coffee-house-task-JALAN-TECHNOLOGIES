import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const LatteModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Total Bill: {props?.espressoData} $
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Your favorite "Espresso Coffee"</h4>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props?.onHide}>Print</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default LatteModal;