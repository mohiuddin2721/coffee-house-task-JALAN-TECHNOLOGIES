import React from 'react';
import coffee from '../data/Data';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EspressoModal = (props) => {
    // const { submitEspresso, onHide } = props;
    const data = props.espressoData;
    const milk = data[0];
    const cream = data[1];
    const latte = data[2];

    const milkCost = parseInt(data[0]?.split(' ')[1]);
    const creamCost = parseInt(data[1]?.split(' ')[1]);
    const latteCost = parseInt(data[2]?.split(' ')[1]);

    // const totalCost = milkCost + creamCost + latteCost;
    const totalCost = coffee?.espressoCoffee?.addOn(milkCost, creamCost, latteCost);
    // console.log(totalCost);
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Your favorite "Espresso Coffee"
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{milk} $</p>
                <p>{cream} $</p>
                <p>{latte} $</p>
                <hr />
                <p>Total bill: {totalCost} $</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props?.onHide}>Print</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EspressoModal;