import React from 'react';
import { Button, Card } from 'react-bootstrap';
import cappuccino from '../picture/cappuccino.jpg'
import espresso from '../picture/espresso.jpg'
import latte from '../picture/latte.jpg'

const Home = () => {
    const [modalShow, setModalShow] = React.useState(false);

    const coffee = {
        name: 'Espresso Coffee',
        milk: 60,
        cream: 70,
        latte: 100,
        addOn: function () {
            return this.milk + this.cream + this.latte
        }
    }

    const submitEspresso = (data) => {
        console.log(data);
        setModalShow(true)
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
                        <form action="">
                            <Card.Title>Espresso Coffee</Card.Title>
                            <Card.Text>
                                <span style={{ color: '#3c1d07' }} className='text-center d-block text-bolt'>Please Add-on</span>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="60" id="flexCheckDefault1" />
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
                        </form>
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
        </div>
    );
};

export default Home;