import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);


    const handleDelete = id => {
        const result = window.confirm('Are you sure to delete?');
        if (result) {
            const url = `https://young-garden-14257.herokuapp.com/cars/${id}`
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully!')
                        const remaining = services.filter(pd => pd._id !== id);
                        setServices(remaining);
                    }
                })
        }

    }


    useEffect(() => {
        fetch('https://young-garden-14257.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container>
            <h2>All Services: {services.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="services table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {services.map((row, pd) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="right">${row.price}</TableCell>
                                <TableCell align="right"><img style={{ width: '100px' }} src={row.img} alt="" /></TableCell>
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

export default ManageServices;