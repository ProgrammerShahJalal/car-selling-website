import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Container } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const AddService = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/cars', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added a New Service Successfully!');
                    reset();
                }
            })
    }

    return (
        <Container sx={{ textAlign: 'center' }}>
            <h2>Hello {user.displayName}! <br /> As a admin you can add service.</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input style={{ padding: '10px 20px' }} placeholder="Service Name" {...register("name", { required: true })} /> <br /> <br />

                <input style={{ padding: '10px 20px' }} placeholder="price" type="number" {...register("price", { required: true })} /> <br /><br />

                <input style={{ padding: '10px 20px' }} placeholder="image url" {...register("img", { required: true })} /> <br /><br />

                <textarea style={{ padding: '10px 20px' }} placeholder='Description' {...register("description", { required: true })} /> <br /><br />
                <input style={{ padding: '5px 15px' }} type="submit" />
            </form>
        </Container>
    );
};

export default AddService;