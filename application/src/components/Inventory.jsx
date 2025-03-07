import { useState, useEffect } from 'react';
import ItemsService from '../services/item-service.js';
import ItemsFilter from './ItemsFilter.jsx';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

const itemsService = new ItemsService('http://localhost:3000/items');

export default function Masterlist() {

    const [allItems, setAllItems] = useState([]);
    const [items, setItems] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [techs, setTechs] = useState([]);
    const [pos, setPOs] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [newComment, setNewComment] = useState(""); // State to hold new comment

    useEffect(() => {
        itemsService.getItem()
            .then(itemsJsonData => {
                setItems(itemsJsonData);
                setAllItems(itemsJsonData);
                setCompanies(getUniqueCompanyList(itemsJsonData));
                setStatuses(getUniqueStatusList(itemsJsonData));
                setTechs(getUniqueTechList(itemsJsonData));
                setPOs(getUniquePOList(itemsJsonData));
            })
            .catch(error => {
                setErrorMessage("SERVER DOWN! Unable to connect to server. Please try again later.");
            });
    }, []);

    const getUniqueStatusList = (items) => {
        const allStatusList = items.map(item => item.status);
        return [...new Set(allStatusList)];
    }

    const getUniqueCompanyList = (items) => {
        const allCompanyList = items.map(item => item.company);
        return [...new Set(allCompanyList)];
    }

    const getUniqueTechList = (items) => {
        const allTechList = items.map(item => item.tech);
        return [...new Set(allTechList)];
    }

    const getUniquePOList = (items) => {
        const allPOList = items.map(item => item.po);
        return [...new Set(allPOList)];
    }

    const applyFilter = (cs, status, company, tech, po) => {
        let filteredItems = allItems.filter(item => {
            const csString = item.cs ? item.cs.toString() : '';
            return csString.includes(cs) &&
                item.po.toLowerCase().includes(po.toLowerCase()) &&
                item.tech.toLowerCase().includes(tech.toLowerCase()) &&
                item.status.toLowerCase().includes(status.toLowerCase()) &&
                item.company.toLowerCase().includes(company.toLowerCase());
        });
        setItems(filteredItems);
    }

    const showAllItems = () => {
        setItems(allItems);
    }

    // Handle comment input change
    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    }

    // Add comment to a specific item
    const addComment = (itemId) => {
        const updatedItems = items.map(item => {
            if (item.id === itemId) {
                // Ensure comments is always an array
                const updatedComments = Array.isArray(item.comments) ? [...item.comments, newComment] : [newComment];
                return { ...item, comments: updatedComments };
            }
            return item;
        });

        const updatedItem = updatedItems.find(item => item.id === itemId);
        setItems(updatedItems);
        setNewComment(""); // Reset comment input

        // Update the item on the server/database
        itemsService.updateItem(itemId, updatedItem)
            .then(response => {
                console.log("Comment added to the database:", response);
            })
            .catch(error => {
                console.error("Error adding comment to the database:", error);
            });
    }

    // Display Items
    let itemsListJsx = items.map(item => {
        return (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card style={{ width: '75%', margin: '10px', textAlign: 'center' }} >
                    <Card.Body>
                        <Card.Title><h5>CS: {item.cs}</h5></Card.Title>
                        <Card.Text>
                            <div>
                                <Stack direction='horizontal' gap={3} className="justify-content-center">
                                    <div className='p-2'><b>Serial# </b>{item.serial}</div>
                                    <div className='p-2'><b>Company: </b>{item.company}</div>
                                    <div className='p-2'><b>Tech: </b>{item.tech}</div>
                                </Stack>
                            </div>

                            <div>
                                <Stack direction='horizontal' gap={3} className="justify-content-center">
                                    <div className='p-2'><b>Phone# </b>{item.phone}</div>
                                    <div className='p-2'><b>SIM# </b>{item.sim}</div>
                                    <div className='p-2'><b>PO# </b>{item.po}</div>
                                </Stack>
                            </div>
                            <div>
                                <Stack direction='horizontal' gap={2} className="justify-content-center">
                                    <div className='p-2'><b>Config: </b>{item.config}</div>
                                    <div className='p-2'><b>Firmware: </b>{item.firmware}</div>
                                    <div className='p-2'><b>Status: </b>{item.status}</div>
                                </Stack>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0xs">
                            <Accordion.Header>Comments</Accordion.Header>
                            <Accordion.Body>
                                {/* Ensure comments is an array before mapping */}
                                {Array.isArray(item.comments) && item.comments.map((comment, index) => (
                                    <div key={index} style={{ display: 'flex', justifyContent: 'left' }}>
                                        <h6>User {index + 1}</h6>
                                        <div>{comment}</div>
                                    </div>
                                ))}
                                <Stack direction='horizontal' gap={2} className="justify-content-center">
                                    <Form.Control
                                        className='p-2'
                                        placeholder="Add a comment"
                                        value={newComment}
                                        onChange={handleCommentChange}
                                    />
                                    <Button className='p-2' variant="primary" onClick={() => addComment(item.id)}>
                                        Add Comment
                                    </Button>
                                </Stack>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card>
            </div>
        );
    });

    return (
        <>
            <ItemsFilter companies={companies} statuses={statuses} techs={techs} pos={pos} onFilterChange={applyFilter}></ItemsFilter>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <div>
                {itemsListJsx}
            </div>
        </>
    );
}
