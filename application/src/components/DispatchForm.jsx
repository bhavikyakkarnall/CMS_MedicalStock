import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import logo from '../assets/ADT Logo.png';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function DispatchForm() {

    const handleSaveAsPDF = () => {
        const input = document.getElementById('print');
        html2canvas(input, { scale: 3 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const pageHeight = 297;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            pdf.save('dispatch_form.pdf');
        });
    };


    return (
        <>
            {/* Printable Screen */}
            <div style={{ margin: '30px' }} id="print">

                {/* Logo, Address, Contact */}
                <div className="d-flex justify-content-end align-items-center mb-4">
                    <Image src={logo} thumbnail style={{ width: '200px', height: 'auto', border: 'none' }} />
                </div>

                {/* Contact Details */}
                <Form className="mb-6X">
                    <Row className="d-flex align-items-center">
                        <Col md={5} className="d-flex flex-column">
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={3}>
                                    Name
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="text" placeholder="Name" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={3}>
                                    Company
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="text" placeholder="Company" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={3}>
                                    Address
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control as="textarea" placeholder="Address" />
                                </Col>
                            </Form.Group>
                        </Col>

                        <Col md={4} className="d-flex flex-column">
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={3}>
                                    Order#
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="text" placeholder="Order#" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={3}>
                                    Tracking#
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="text" placeholder="Tracking#" />
                                </Col>
                            </Form.Group>
                        </Col>

                        <Col md={3} className="d-flex justify-content-center">
                            <Image src={logo} thumbnail style={{ width: '200px', height: 'auto', border: 'none' }} />
                        </Col>
                    </Row>
                </Form>

                {/* Transmittal Equipment Details */}
                <div className="table-responsive">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>CS#</th>
                                <th>Item</th>
                                <th>Qty</th>
                                <th>Serial#</th>
                                <th>Phone#</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><Form.Control type="text" placeholder="CS#" /></td>
                                <td>Beacon</td>
                                <td>1</td>
                                <td>8623832475628</td>
                                <td>+64279473820</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><Form.Control type="text" placeholder="CS#" /></td>
                                <td>Beacon</td>
                                <td>1</td>
                                <td>8623832475628</td>
                                <td>+64279473820</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><Form.Control type="text" placeholder="CS#" /></td>
                                <td>Beacon</td>
                                <td>1</td>
                                <td>8623832475628</td>
                                <td>+64279473820</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><Form.Control type="text" placeholder="CS#" /></td>
                                <td>Beacon</td>
                                <td>1</td>
                                <td>8623832475628</td>
                                <td>+64279473820</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td><Form.Control type="text" placeholder="CS#" /></td>
                                <td>Beacon</td>
                                <td>1</td>
                                <td>8623832475628</td>
                                <td>+64279473820</td>
                            </tr>
                            <tr>
                                <td colSpan={"6"}>Add row</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div>
                    <Form.Control as="textarea" placeholder="Comment..." />
                </div>
            </div>

            {/* Submit and Clear */}
            <div style={{ margin: '10px' }}>
                <Button variant="primary" onClick={handleSaveAsPDF}>
                    Save as PDF
                </Button>

                <Button variant="primary" type="submit" style={{ marginLeft: '10px' }}>
                    Clear
                </Button>
            </div>
        </>
    );
}
