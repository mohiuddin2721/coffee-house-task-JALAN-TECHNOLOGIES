import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import coffee from '../data/Data';

const CappuccinoModal = (props) => {
    const data = props.cappuccinoData;
    // console.log(data);
    const milk = data[0];
    const cream = data[1];
    const latte = data[2];

    const milkCost = parseInt(data[0]?.split(' ')[1]);
    const creamCost = parseInt(data[1]?.split(' ')[1]);
    const latteCost = parseInt(data[2]?.split(' ')[1]);

    // const totalCost = milkCost + creamCost + latteCost;
    const totalCost = coffee?.cappuccinoCoffee?.addOn(milkCost, creamCost, latteCost);
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
                    Your favorite "Cappuccino Coffee"
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

export default CappuccinoModal;