import { useState, useEffect } from 'react';
import UsersService from '../services/user-service.js';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingButton from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const usersService = new UsersService('http://localhost:3000/users');

export default function UsersList() {
    const [allUsers, setAllUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const [userTypes, setUserTypes] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        usersService.getUsers()
            .then(usersJsonData => {
                setUsers(usersJsonData);
                setAllUsers(usersJsonData);
                setUserTypes(getUniqueUserTypes(usersJsonData));
                setCompanies(getUniqueCompanies(usersJsonData));
            })
            .catch(error => {
                setErrorMessage("SERVER DOWN! Unable to connect to server. Please try again later.");
            });
    }, []);

    const getUniqueUserTypes = (users) => [...new Set(users.map(user => user.userType))];
    const getUniqueCompanies = (users) => [...new Set(users.map(user => user.company))];

    const applyFilter = (userType, company) => {
        let filteredUsers = allUsers.filter(user =>
            user.userType.toLowerCase().includes(userType.toLowerCase()) &&
            user.company.toLowerCase().includes(company.toLowerCase())
        );
        setUsers(filteredUsers);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        setUsers(allUsers.filter(user =>
            user.username.toLowerCase().includes(query.toLowerCase()) ||
            user.name.toLowerCase().includes(query.toLowerCase()) ||
            user.surname.toLowerCase().includes(query.toLowerCase())
        ));
    };

    return (
        <>
            <Stack direction='horizontal' gap={3} className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Search by username, name, or surname"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <Form.Select onChange={(e) => applyFilter(e.target.value, '')}>
                    <option value="">All User Types</option>
                    {userTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </Form.Select>
                <Form.Select onChange={(e) => applyFilter('', e.target.value)}>
                    <option value="">All Companies</option>
                    {companies.map(company => <option key={company} value={company}>{company}</option>)}
                </Form.Select>
            </Stack>
            
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>User Type</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.userType}</td>
                            <td>{user.company}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <FloatingButton 
                style={{ position: 'fixed', bottom: '20px', right: '20px' }}
                variant="primary"
            >
                Add User
            </FloatingButton>
        </>
    );
}
