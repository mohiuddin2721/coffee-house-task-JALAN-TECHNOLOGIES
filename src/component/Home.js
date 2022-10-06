import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import cappuccino from '../picture/cappuccino.jpg'
import espresso from '../picture/espresso.jpg'
import latte from '../picture/latte.jpg'
import EspressoModal from './EspressoModal';

const Home = () => {
    const [modalShow, setModalShow] = useState(false);
    const [espressoData, setEspressoData] = useState([]);
    // console.log(typeof(espressoData));

    const coffee = {
        espressoCoffee: {
            name: 'Espresso Coffee',
            milk: "milk+60",
            cream: 70,
            latte: 100,
            addOn: function (milk = 0, cream = 0, latte = 0) {
                return milk + cream + latte
            }
        },
        cappuccinoCoffee: {
            name: 'Cappuccino Coffee',
            milk: 80,
            cream: 90,
            latte: 125,
            addOn: function (milk = 0, cream = 0, latte = 0) {
                return milk + cream + latte
            }
        },
        latteCoffee: {
            name: 'Latte Coffee',
            milk: 100,
            cream: 125,
            latte: 150,
            addOn: function (milk = 0, cream = 0, latte = 0) {
                return milk + cream + latte
            }
        }
    }

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
        console.log(espressoArry);
        setModalShow(true)
        const totalEspresso = coffee?.espressoCoffee?.addOn(espressoArry[0], espressoArry[1], espressoArry[2]);
        setEspressoData(totalEspresso);
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
                        <Card.Title>Espresso Coffee</Card.Title>
                        <Card.Text>
                            <span style={{ color: '#3c1d07' }} className='text-center d-block text-bolt'>Please Add-on</span>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={coffee?.espressoCoffee?.milk} id="flexCheckDefault1" />
                                <label className="form-check-label" for="flexCheckDefault1">
                                    Milk - 60 $
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="75" id="flexCheckDefault2" />
                                <label className="form-check-label" for="flexCheckDefault2">
                                    Cream - 75 $
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="100" id="flexCheckDefault3" />
                                <label className="form-check-label" for="flexCheckDefault3">
                                    Latte - 100 $
                                </label>
                            </div>
                        </Card.Text>
                        <Button onClick={submitEspresso} variant="primary" type="submit">Order</Button>
                    </Card.Body>
                </Card>

                <Card className='mx-2 col'>
                    <Card.Img variant="top" src={cappuccino} />
                    <Card.Body>
                        <Card.Title>Cappuccino Coffee</Card.Title>
                        <Card.Text>
                            <span style={{ color: '#3c1d07' }} className='text-center d-block text-bolt'>Please Add-on</span>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Milk - 80 $
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Cream - 90 $
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Latte - 125 $
                                </label>
                            </div>
                        </Card.Text>
                        <Button variant="primary">Order</Button>
                    </Card.Body>
                </Card>

                <Card className='mx-2 col'>
                    <Card.Img variant="top" src={latte} />
                    <Card.Body>
                        <Card.Title>Latte Coffee</Card.Title>
                        <Card.Text>
                            <span style={{ color: '#3c1d07' }} className='text-center d-block text-bolt'>Please Add-on</span>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Milk - 100 $
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Cream - 125 $
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Latte - 150 $
                                </label>
                            </div>
                        </Card.Text>
                        <Button variant="primary">Order</Button>
                    </Card.Body>
                </Card>
            </div>
            <EspressoModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                espressoData={espressoData}
            />
        </div>
    );
};

export default Home;