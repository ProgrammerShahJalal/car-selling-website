import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageServices = () => {
    const [services, setServices] = useState([]);


    const handleDelete = id => {
        const result = window.confirm('Are you sure to delete?');
        if (result) {
            const url = `https://car-selling-server.onrender.com/cars/${id}`
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
        fetch('https://car-selling-server.onrender.com/cars')
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
                                    <Tooltip title="Delete">
                                        <Button color="secondary" onClick={() => handleDelete(row._id)} variant="contained">
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

export default ManageServices;