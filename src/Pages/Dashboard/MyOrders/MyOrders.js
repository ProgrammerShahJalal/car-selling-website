import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import { Button, Container, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const MyOrders = () => {
    const { user, token } = useAuth();
    const [myOrders, setmyOrders] = useState([]);


    console.log(user.email)
    useEffect(() => {
        let isUnMount = false;
        const url = `https://car-selling-server.onrender.com/myOrders?email=${user.email}`;
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!isUnMount) {
                    setmyOrders(data);
                    console.log(data);
                }
            })
        return () => {
            isUnMount = true;
        }
    }, [user.email, token])

    const handleDelete = id => {
        const result = window.confirm('Are you sure to delete?');
        if (result) {
            const url = `https://car-selling-server.onrender.com/allOrders/${id}`
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully!')
                        const remaining = myOrders.filter(myOrder => myOrder._id !== id);
                        setmyOrders(remaining);
                    }
                })
        }

    }

    return (
        <Container>
            <h2>My Orders: {myOrders.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="myOrders table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrders.map((myOrder) => (
                            <TableRow
                                key={myOrder._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{myOrder.name}</TableCell>
                                <TableCell align="right">{myOrder.email}</TableCell>
                                <TableCell align="right">{myOrder.text}</TableCell>
                                <TableCell align="right">
                                    <Button variant="contained">{myOrder.status || 'Shipped'}</Button>
                                </TableCell>
                                <TableCell align="right">
                                    <Tooltip title="Delete">
                                        <Button color="secondary" onClick={() => handleDelete(myOrder._id)} variant="contained">
                                            Delete <DeleteIcon />
                                        </Button>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default MyOrders;