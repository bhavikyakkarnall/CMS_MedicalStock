import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

export default function Orders() {
    return (
        <>
            <div style={{ margin: '30px' }}>
                <h5>Orders</h5>
                <div>
                    <h6>Filters</h6>
                    <Card style={{ width: '100%', textAlign: 'center' }}>
                        <Card.Body>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', margin: '10px 30px 10px 30px' }}>
                                <h6>Requested By</h6>
                                <select>Requested By</select>
                                <h6>Order Date</h6>
                                <select>Order Date</select>
                                <h6>Status</h6>
                                <select>Status</select>
                                <h6>Due Date</h6>
                                <select>Due Date</select>
                            </div>

                        </Card.Body>
                    </Card>

                </div>
                <div>
                    <h6>Order List</h6>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>OrderNo.</th>
                                <th>Requested By</th>
                                <th>Order Date</th>
                                <th>Status</th>
                                <th>Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <th>24090001</th>
                                <th>Shona Day</th>
                                <th>04/09/2024</th>
                                <th>Order</th>
                                <th>18/09/2024</th>
                            </tr>
                            <tr>
                                <th>2</th>
                                <th>24090002</th>
                                <th>Geoff Clarke</th>
                                <th>04/09/2024</th>
                                <th>Order</th>
                                <th>18/09/2024</th>
                            </tr>
                            <tr>
                                <th>3</th>
                                <th>24090003</th>
                                <th>Andrea Free</th>
                                <th>04/09/2024</th>
                                <th>Order</th>
                                <th>18/09/2024</th>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>

        </>
    )
}