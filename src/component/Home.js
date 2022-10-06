import React, { useState } from 'react';
import coffee from '../data/Data';
import { Button, Card } from 'react-bootstrap';
import cappuccino from '../picture/cappuccino.jpg'
import espresso from '../picture/espresso.jpg'
import latte from '../picture/latte.jpg'
import CappuccinoModal from './CappuccinoModal';
import EspressoModal from './EspressoModal';
import LatteModal from './LatteModal';

const Home = () => {
    const [modalShow, setModalShow] = useState(false);
    const [espressoData, setEspressoData] = useState([]);
    const [warningMsg1, setWarningMsg1] = useState('');
    const [warningMsg2, setWarningMsg2] = useState('');
    const [warningMsg3, setWarningMsg3] = useState('');
    // console.log(typeof(espressoData));

    const submitEspresso = () => {
        const espressoArry = [];

        const milk = document.getElementById('flexCheckDefault1');
        if (milk.checked === true) {
            // console.log(true);
            const milks = document.getElementById('flexCheckDefault1').value;
            espressoArry.push(parseInt(milks))
        }
        else {
            espressoArry.push(0)
        }

        const cream = document.getElementById('flexCheckDefault2');
        if (cream.checked === true) {
            // console.log(true);
            const creams = document.getElementById('flexCheckDefault2').value;
            espressoArry.push(parseInt(creams))
        }
        else {
            espressoArry.push(0)
        }

        const latte = document.getElementById('flexCheckDefault3');
        if (latte.checked === true) {
            // console.log(true);
            const lattes = document.getElementById('flexCheckDefault3').value;
            espressoArry.push(parseInt(lattes))
        }
        else {
            espressoArry.push(0)
        }
        // console.log(espressoArry);
        if (milk.checked === true || cream.checked === true || latte.checked === true) {
            setModalShow(true)
            const totalEspresso = coffee?.espressoCoffee?.addOn(espressoArry[0], espressoArry[1], espressoArry[2]);
            setEspressoData(totalEspresso);
        }
        else {
            setWarningMsg1('Please Add minimum one')
        }
    }

    const submitCappuccino = () => {
        const cappuccinoArry = [];

        const milk = document.getElementById('flexCheckDefault4');
        if (milk.checked === true) {
            // console.log(true);
            const milks = document.getElementById('flexCheckDefault4').value;
            cappuccinoArry.push(parseInt(milks))
        }
        else {
            cappuccinoArry.push(0)
        }

        const cream = document.getElementById('flexCheckDefault5');
        if (cream.checked === true) {
            // console.log(true);
            const creams = document.getElementById('flexCheckDefault5').value;
            cappuccinoArry.push(parseInt(creams))
        }
        else {
            cappuccinoArry.push(0)
        }

        const latte = document.getElementById('flexCheckDefault6');
        if (latte.checked === true) {
            // console.log(true);
            const lattes = document.getElementById('flexCheckDefault6').value;
            cappuccinoArry.push(parseInt(lattes))
        }
        else {
            cappuccinoArry.push(0)
        }
        // console.log(cappuccinoArry);
        if (milk.checked === true || cream.checked === true || latte.checked === true) {
            setModalShow(true)
            const totalEspresso = coffee?.espressoCoffee?.addOn(cappuccinoArry[0], cappuccinoArry[1], cappuccinoArry[2]);
            setEspressoData(totalEspresso);
        }
        else {
            setWarningMsg2('Please Add minimum one')
        }
    }

    const submitLatte = () => {
        const latteArry = [];

        const milk = document.getElementById('flexCheckDefault7');
        if (milk.checked === true) {
            // console.log(true);
            const milks = document.getElementById('flexCheckDefault7').value;
            latteArry.push(parseInt(milks))
        }
        else {
            latteArry.push(0)
        }

        const cream = document.getElementById('flexCheckDefault8');
        if (cream.checked === true) {
            // console.log(true);
            const creams = document.getElementById('flexCheckDefault8').value;
            latteArry.push(parseInt(creams))
        }
        else {
            latteArry.push(0)
        }

        const latte = document.getElementById('flexCheckDefault9');
        if (latte.checked === true) {
            // console.log(true);
            const lattes = document.getElementById('flexCheckDefault9').value;
            latteArry.push(parseInt(lattes))
        }
        else {
            latteArry.push(0)
        }
        // console.log(latteArry);
        if (milk.checked === true || cream.checked === true || latte.checked === true) {
            setModalShow(true)
            const totalEspresso = coffee?.espressoCoffee?.addOn(latteArry[0], latteArry[1], latteArry[2]);
            setEspressoData(totalEspresso);
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
            <div className='mx-5 row'>
                <Card className='mx-2 col'>
                    <Card.Img variant="top" className='h-2' src={espresso} />
                    <Card.Body>
                        <Card.Title>{coffee?.espressoCoffee?.name}</Card.Title>
                        <Card.Text>
                            <span style={{ color: '#3c1d07' }} className='text-center d-block text-bolt'>Please Add-on</span>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={coffee?.espressoCoffee?.milk} id="flexCheckDefault1" />
                                <label className="form-check-label" for="flexCheckDefault1">
                                    Milk - 60 $
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={coffee?.espressoCoffee?.cream} id="flexCheckDefault2" />
                                <label className="form-check-label" for="flexCheckDefault2">
                                    Cream - 75 $
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={coffee?.espressoCoffee?.latte} id="flexCheckDefault3" />
                                <label className="form-check-label" for="flexCheckDefault3">
                                    Latte - 100 $
                                </label>
                            </div>
                        </Card.Text>
                        <p className='text-danger'>{warningMsg1}</p>
                        <Button onClick={submitEspresso} variant="primary" type="submit">Order</Button>
                    </Card.Body>
                </Card>

                <Card className='mx-2 col'>
                    <Card.Img variant="top" src={cappuccino} />
                    <Card.Body>
                        <Card.Title>{coffee?.cappuccinoCoffee?.name}</Card.Title>
                        <Card.Text>
                            <span style={{ color: '#3c1d07' }} className='text-center d-block text-bolt'>Please Add-on</span>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={coffee?.cappuccinoCoffee?.milk} id="flexCheckDefault4" />
                                <label className="form-check-label" for="flexCheckDefault4">
                                    Milk - 80 $
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={coffee?.cappuccinoCoffee?.cream} id="flexCheckDefault5" />
                                <label className="form-check-label" for="flexCheckDefault5">
                                    Cream - 90 $
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={coffee?.cappuccinoCoffee?.latte} id="flexCheckDefault6" />
                                <label className="form-check-label" for="flexCheckDefault6">
                                    Latte - 125 $
                                </label>
                            </div>
                        </Card.Text>
                        <p className='text-danger'>{warningMsg2}</p>
                        <Button onClick={submitCappuccino} variant="primary">Order</Button>
                    </Card.Body>
                </Card>

                <Card className='mx-2 col'>
                    <Card.Img variant="top" src={latte} />
                    <Card.Body>
                        <Card.Title>Latte Coffee</Card.Title>
                        <Card.Text>
                            <span style={{ color: '#3c1d07' }} className='text-center d-block text-bolt'>Please Add-on</span>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={coffee?.latteCoffee?.milk} id="flexCheckDefault7" />
                                <label className="form-check-label" for="flexCheckDefault7">
                                    Milk - 100 $
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={coffee?.latteCoffee?.cream} id="flexCheckDefault8" />
                                <label className="form-check-label" for="flexCheckDefault8">
                                    Cream - 125 $
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={coffee?.latteCoffee?.latte} id="flexCheckDefault9" />
                                <label className="form-check-label" for="flexCheckDefault9">
                                    Latte - 150 $
                                </label>
                            </div>
                        </Card.Text>
                        <p className='text-danger'>{warningMsg3}</p>
                        <Button onClick={submitLatte} variant="primary">Order</Button>
                    </Card.Body>
                </Card>
            </div>
            <EspressoModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                espressoData={espressoData}
            />
            <CappuccinoModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                espressoData={espressoData}
            />
            <LatteModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                espressoData={espressoData}
            />
        </div>
    );
};

export default Home;