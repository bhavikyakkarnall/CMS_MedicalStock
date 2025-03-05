import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import logo from '../assets/ADT Logo.png';
import go from '../assets/GO.png';
import neck from '../assets/Neck Pendant.png';
import wrist from '../assets/Wrist Pendant.png';
import seven from '../assets/SEVEN.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

export default function StockOrder() {

    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    const handleChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        if (!isNaN(newValue)) {
            setValue(newValue);
        }
    };


    return (
        <>
            {/* Printable Screen */}
            <div style={{ margin: '30px' }} id="print">


                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card style={{ width: '90%', margin: '10px' }} >
                        <Card.Body>
                            <div>
                                <Stack direction='horizontal' gap={3} className="justify-content-center">
                                    <div className='p-2'><Image src={seven} thumbnail style={{ width: '200px', height: 'auto', border: 'none' }} /></div>
                                    <div className='p-2'>
                                        <h5>SEVEN</h5>
                                        <p>SEVEN supports multiple reporting pathways, Ethernet and Wi-Fi with dual micro SIM slots for data reporting. Data is sent via the 4G/3G network or the users local Internet connection and voice call back into the base unit is over VoLTE on 4G or voice on 3G.</p>
                                    </div>
                                    <div className='p-2'>
                                        <div className="input-group" style={{ maxWidth: '200px' }}>
                                            <input
                                                type="number"
                                                className="form-control text-center"
                                                value={value}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </Stack>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card style={{ width: '90%', margin: '10px' }} >
                        <Card.Body>
                            <div>
                                <Stack direction='horizontal' gap={3} className="justify-content-center">
                                    <div className='p-2'><Image src={go} thumbnail style={{ width: '200px', height: 'auto', border: 'none' }} /></div>
                                    <div className='p-2'>
                                        <h5>GO</h5>
                                        <p>SEVEN supports multiple reporting pathways, Ethernet and Wi-Fi with dual micro SIM slots for data reporting. Data is sent via the 4G/3G network or the users local Internet connection and voice call back into the base unit is over VoLTE on 4G or voice on 3G.</p>
                                    </div>
                                    <div className='p-2'>
                                        <div className="input-group" style={{ maxWidth: '200px' }}>
                                            <input
                                                type="number"
                                                className="form-control text-center"
                                                value={value}
                                                onChange={handleChange}
                                            />
                                        </div></div>
                                </Stack>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card style={{ width: '90%', margin: '10px' }} >
                        <Card.Body>
                            <div>
                                <Stack direction='horizontal' gap={3} className="justify-content-center">
                                    <div className='p-2'><Image src={logo} thumbnail style={{ width: '200px', height: 'auto', border: 'none' }} /></div>
                                    <div className='p-2'>
                                        <h5>Beacon</h5>
                                        <p>SEVEN supports multiple reporting pathways, Ethernet and Wi-Fi with dual micro SIM slots for data reporting. Data is sent via the 4G/3G network or the users local Internet connection and voice call back into the base unit is over VoLTE on 4G or voice on 3G.</p>
                                    </div>
                                    <div className='p-2'>
                                        <div className="input-group" style={{ maxWidth: '200px' }}>
                                            <input
                                                type="number"
                                                className="form-control text-center"
                                                value={value}
                                                onChange={handleChange}
                                            />
                                        </div></div>
                                </Stack>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card style={{ width: '90%', margin: '10px' }} >
                        <Card.Body>
                            <div>
                                <Stack direction='horizontal' gap={3} className="justify-content-center">
                                    <div className='p-2'><Image src={wrist} thumbnail style={{ width: '200px', height: 'auto', border: 'none' }} /></div>
                                    <div className='p-2'>
                                        <h5>Wrist Pendant</h5>
                                        <p>SEVEN supports multiple reporting pathways, Ethernet and Wi-Fi with dual micro SIM slots for data reporting. Data is sent via the 4G/3G network or the users local Internet connection and voice call back into the base unit is over VoLTE on 4G or voice on 3G.</p>
                                    </div>
                                    <div className='p-2'>
                                        <div className="input-group" style={{ maxWidth: '200px' }}>
                                            <input
                                                type="number"
                                                className="form-control text-center"
                                                value={value}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </Stack>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card style={{ width: '90%', margin: '10px' }} >
                        <Card.Body>
                            <div>
                                <Stack direction='horizontal' gap={3} className="justify-content-center">
                                    <div className='p-2'><Image src={neck} thumbnail style={{ width: '200px', height: 'auto', border: 'none' }} /></div>
                                    <div className='p-2'>
                                        <h5>Neck Pendant</h5>
                                        <p>SEVEN supports multiple reporting pathways, Ethernet and Wi-Fi with dual micro SIM slots for data reporting. Data is sent via the 4G/3G network or the users local Internet connection and voice call back into the base unit is over VoLTE on 4G or voice on 3G.</p>
                                    </div>
                                    <div className='p-2'>
                                        <div className="input-group" style={{ maxWidth: '200px' }}>
                                            <input
                                                type="number"
                                                className="form-control text-center"
                                                value={value}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </Stack>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                {/* Equipment Details */}
                {/* <div style={{margin: '10px'}}>
                    <Card>
                        <Card.Body>
                        <Container>
                            <Row>
                                <Col><Image src={logo} thumbnail style={{ width: '200px', height: 'auto', border: 'none' }} /></Col>
                                <Col><h5>SEVEN</h5></Col>
                                <Col>3 of 3</Col>
                            </Row>
                            <Row>
                                <Col><Image src={go} thumbnail style={{ width: '200px', height: 'auto', border: 'none' }} /></Col>
                                <Col>
                                    <h5>GO 4G</h5>
                                    <p>GO is a wearable mPERS device with 4G cellular and GPS locating technology, designed for safety, to summon help beyond the boundaries of the home.</p>
                                </Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col><Image src={go} thumbnail style={{ width: '200px', height: 'auto', border: 'none' }} /></Col>
                                <Col><h5>Beacon</h5></Col>
                                <Col>3 of 3</Col>
                            </Row>
                            <Row>
                                <Col><Image src={wrist} thumbnail style={{ width: '200px', height: 'auto', border: 'none' }} /></Col>
                                <Col><h5>Wrist Pendant</h5></Col>
                                <Col>3 of 3</Col>
                            </Row>
                            <Row>
                                <Col><Image src={neck} thumbnail style={{ width: '200px', height: 'auto', border: 'none' }} /></Col>
                                <Col><h5>Neck Pendant</h5></Col>
                                <Col>3 of 3</Col>
                            </Row>
                        </Container>
                        </Card.Body>
                    </Card>
                </div> */}

                <div>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control className="me-auto" placeholder="Comments" />
                        <Button variant="secondary">Submit</Button>
                        <div className="vr" />
                        <Button variant="outline-danger">Reset</Button>
                    </Stack>
                </div>

            </div>
        </>
    )
}