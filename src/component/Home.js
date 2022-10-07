import React, { useState } from 'react';
import coffee from '../data/Data';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import cappuccino from '../picture/cappuccino.jpg'
import espresso from '../picture/espresso.jpg'
import latte from '../picture/latte.jpg'
import CappuccinoModal from './CappuccinoModal';
import EspressoModal from './EspressoModal';
import LatteModal from './LatteModal';

const Home = () => {
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [espressoData, setEspressoData] = useState([]);
    const [cappuccinoData, setCappuccinoData] = useState([]);
    const [latteData, setLatteData] = useState([]);
    const [warningMsg1, setWarningMsg1] = useState('');
    const [warningMsg2, setWarningMsg2] = useState('');
    const [warningMsg3, setWarningMsg3] = useState('');
    // console.log(espressoData);

    const submitEspresso = () => {
        const espressoArray = [];

        const milk = document.getElementById('flexCheckDefault1');
        if (milk.checked === true) {
            // console.log(true);
            const milks = document.getElementById('flexCheckDefault1').value;
            espressoArray.push(milks)
        }
        else {
            espressoArray.push('Milk 0')
        }

        const cream = document.getElementById('flexCheckDefault2');
        if (cream.checked === true) {
            // console.log(true);
            const creams = document.getElementById('flexCheckDefault2').value;
            espressoArray.push(creams)
        }
        else {
            espressoArray.push('Creams 0')
        }

        const latte = document.getElementById('flexCheckDefault3');
        if (latte.checked === true) {
            // console.log(true);
            const lattes = document.getElementById('flexCheckDefault3').value;
            espressoArray.push(lattes)
        }
        else {
            espressoArray.push('Lattes 0')
        }
        // console.log(espressoArray);
        if (milk.checked === true || cream.checked === true || latte.checked === true) {
            setModalShow1(true)
            setEspressoData(espressoArray);
        }
        else {
            setWarningMsg1('Please Add minimum one')
        }
    }

    const submitCappuccino = () => {
        const cappuccinoArray = [];

        const milk = document.getElementById('flexCheckDefault4');
        if (milk.checked === true) {
            // console.log(true);
            const milks = document.getElementById('flexCheckDefault4').value;
            cappuccinoArray.push(milks)
        }
        else {
            cappuccinoArray.push('Milk 0')
        }

        const cream = document.getElementById('flexCheckDefault5');
        if (cream.checked === true) {
            // console.log(true);
            const creams = document.getElementById('flexCheckDefault5').value;
            cappuccinoArray.push(creams)
        }
        else {
            cappuccinoArray.push('Cream 0')
        }

        const latte = document.getElementById('flexCheckDefault6');
        if (latte.checked === true) {
            // console.log(true);
            const lattes = document.getElementById('flexCheckDefault6').value;
            cappuccinoArray.push(lattes)
        }
        else {
            cappuccinoArray.push('Latte 0')
        }
        // console.log(cappuccinoArray);
        if (milk.checked === true || cream.checked === true || latte.checked === true) {
            setModalShow2(true)
            setCappuccinoData(cappuccinoArray);
        }
        else {
            setWarningMsg2('Please Add minimum one')
        }
    }

    const submitLatte = () => {
        const latteArray = [];

        const milk = document.getElementById('flexCheckDefault7');
        if (milk.checked === true) {
            // console.log(true);
            const milks = document.getElementById('flexCheckDefault7').value;
            latteArray.push(milks)
        }
        else {
            latteArray.push('Milk 0')
        }

        const cream = document.getElementById('flexCheckDefault8');
        if (cream.checked === true) {
            // console.log(true);
            const creams = document.getElementById('flexCheckDefault8').value;
            latteArray.push(creams)
        }
        else {
            latteArray.push('Cream 0')
        }

        const latte = document.getElementById('flexCheckDefault9');
        if (latte.checked === true) {
            // console.log(true);
            const lattes = document.getElementById('flexCheckDefault9').value;
            latteArray.push(lattes)
        }
        else {
            latteArray.push('Latte 0')
        }
        // console.log(latteArray);
        if (milk.checked === true || cream.checked === true || latte.checked === true) {
            setModalShow3(true)
            setLatteData(latteArray);
        }
        else {
            setWarningMsg3('Please Add minimum one')
        }
    }

    return (
        <div>
            <div>
                <h1 style={{ color: '#3c1d07' }} className='text-center fs-2 mt-3'>WELCOME TO COFFEE HOUSE</h1>
                <h1 style={{ color: '#682e07' }} className='text-center fs-4'>Choose your coffee</h1>
                <h1 style={{ color: '#dca76a' }} className='text-center fs-5'>Make the coffee</h1>
            </div>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} xl={4} className='mb-5'>
                        <Card className=''>
                            <Card.Img variant="top" className='h-2' src={espresso} />
                            <Card.Body>
                                <Card.Title>{coffee?.espressoCoffee?.name}</Card.Title>
                                <Card.Text>
                                    <span style={{ color: '#3c1d07' }} className='text-center d-block text-bolt'>Please Add-on</span>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={coffee?.espressoCoffee?.milk} id="flexCheckDefault1" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault1">
                                            Milk - 60 $
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={coffee?.espressoCoffee?.cream} id="flexCheckDefault2" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault2">
                                            Cream - 75 $
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={coffee?.espressoCoffee?.latte} id="flexCheckDefault3" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault3">
                                            Latte - 100 $
                                        </label>
                                    </div>
                                </Card.Text>
                                <p className='text-danger'>{warningMsg1}</p>
                                <Button onClick={submitEspresso} variant="primary" type="submit">Order</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} xl={4} className='mb-5'>
                        <Card className=''>
                            <Card.Img variant="top" src={cappuccino} />
                            <Card.Body>
                                <Card.Title>{coffee?.cappuccinoCoffee?.name}</Card.Title>
                                <Card.Text>
                                    <span style={{ color: '#3c1d07' }} className='text-center d-block text-bolt'>Please Add-on</span>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={coffee?.cappuccinoCoffee?.milk} id="flexCheckDefault4" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault4">
                                            Milk - 80 $
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={coffee?.cappuccinoCoffee?.cream} id="flexCheckDefault5" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault5">
                                            Cream - 90 $
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={coffee?.cappuccinoCoffee?.latte} id="flexCheckDefault6" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault6">
                                            Latte - 125 $
                                        </label>
                                    </div>
                                </Card.Text>
                                <p className='text-danger'>{warningMsg2}</p>
                                <Button onClick={submitCappuccino} variant="primary">Order</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} xl={4} className='mb-5'>
                        <Card className=''>
                            <Card.Img variant="top" src={latte} />
                            <Card.Body>
                                <Card.Title>Latte Coffee</Card.Title>
                                <Card.Text>
                                    <span style={{ color: '#3c1d07' }} className='text-center d-block text-bolt'>Please Add-on</span>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={coffee?.latteCoffee?.milk} id="flexCheckDefault7" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault7">
                                            Milk - 100 $
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={coffee?.latteCoffee?.cream} id="flexCheckDefault8" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault8">
                                            Cream - 125 $
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={coffee?.latteCoffee?.latte} id="flexCheckDefault9" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault9">
                                            Latte - 150 $
                                        </label>
                                    </div>
                                </Card.Text>
                                <p className='text-danger'>{warningMsg3}</p>
                                <Button onClick={submitLatte} variant="primary">Order</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <EspressoModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                espressoData={espressoData}
            />
            <CappuccinoModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                cappuccinoData={cappuccinoData}
            />
            <LatteModal
                show={modalShow3}
                onHide={() => setModalShow3(false)}
                latteData={latteData}
            />
        </div>
    );
};

export default Home;