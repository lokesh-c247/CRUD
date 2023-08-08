import { useEffect, useState } from "react";
import styles from "./Create.module.css";
import { useNavigate } from 'react-router-dom';

import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Button
} from '@chakra-ui/react'
import { isJsonString } from "../../utility";

const Create = () => {

    const [usersData, setUsersData] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {
        (isJsonString(localStorage.getItem("usersData")) ? JSON.parse(localStorage.getItem("usersData"))?.length : [].length) ?
            setUsersData(JSON.parse(localStorage.getItem("usersData")))
            :
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => setUsersData(json))
    }, [])

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        username: "",
        email: "",
    })

    const handleSubmit = () => {
        const updatedData = [...usersData, formData]
        setUsersData(updatedData)
        localStorage.setItem("usersData", JSON.stringify(updatedData))
        navigate('/', { replace: true });

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <>
            <div className={styles.form}>
                <FormControl>
                    <FormLabel>ID : </FormLabel>
                    <Input onChange={handleChange} name="id" placeholder='name' type='Id' />
                </FormControl>

                <FormControl>
                    <FormLabel>Name : </FormLabel>
                    <Input onChange={handleChange} type='name' name="name" placeholder="name" />
                </FormControl>

                <FormControl>
                    <FormLabel>UserName : </FormLabel>
                    <Input onChange={handleChange} type='name' name="username" placeholder="user_name" />
                </FormControl>

                <FormControl>
                    <FormLabel>Email : </FormLabel>
                    <Input onChange={handleChange} type='email' name="email" placeholder="xyz@gmail.com" />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>

                <Button className={styles.btn} colorScheme='green' onClick={handleSubmit}>Add Data</Button>

            </div>
        </>
    )
}

export default Create;