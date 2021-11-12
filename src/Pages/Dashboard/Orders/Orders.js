import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);


    const handleDelete = id => {
        const result = window.confirm('Are you sure to delete?');
        if (result) {
            const url = `https://young-garden-14257.herokuapp.com/allOrders/${id}`
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully!')
                        const remaining = orders.filter(pd => pd._id !== id);
                        setOrders(remaining);
                    }
                })
        }

    }


    useEffect(() => {
        fetch('https://young-garden-14257.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
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
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row, pd) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.text}</TableCell>
                                <TableCell align="right">
                                    <button onClick={() => handleDelete(pd._id)} >Delete</button>
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