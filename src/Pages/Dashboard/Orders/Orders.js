import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UpdateOrder from '../Dashboard/UpdateOrder/UpdateOrder';
import DeleteIcon from '@mui/icons-material/Delete';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { handleShipped } = UpdateOrder();

    useEffect(() => {
        fetch('https://car-selling-server.onrender.com/allOrders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                console.log(data);
            })
    }, [])

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
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })
        }

    }
    return (
        <Container>
            <h2>All Orders: {orders.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="orders table">
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
                        {orders.map((order) => (
                            <TableRow
                                key={order._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{order.name}</TableCell>
                                <TableCell align="right">{order.email}</TableCell>
                                <TableCell align="right">{order.text}</TableCell>
                                <TableCell align="right">
                                    <Button variant="contained" onClick={() => handleShipped(order._id)}>{order.status || 'Shipped'}</Button>
                                </TableCell>
                                <TableCell align="right">
                                    <Tooltip title="Delete">
                                        <Button color="secondary" onClick={() => handleDelete(order._id)} variant="contained">
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

export default Orders;