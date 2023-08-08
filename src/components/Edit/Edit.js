import { useLocation } from "react-router-dom";
import styles from "../Edit/Edit.module.css";

import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Button
  } from '@chakra-ui/react'
  
import { useEffect , useState } from "react";
import { isJsonString } from "../../utility";


const Update = () => {
    const location = useLocation();
    const userData = location?.state;
    const [wholeData , setWholeData] = useState([])
    const[editableData , setEditableData] = useState(userData)

    useEffect(()=>{
        const usersDataFromStorage = isJsonString(localStorage.getItem("usersData")) ?JSON.parse(localStorage.getItem("usersData")):[]
        setWholeData(usersDataFromStorage || [])
    },[])

   const handleUpdate = (editableData) => {

        wholeData?.splice(userData?.id-1, 1 ,editableData)
        localStorage.setItem("usersData" , JSON.stringify(wholeData))
   }
  
   const handleChange = (e) => {
        const {name , value} = e.target;
        setEditableData((prev) => ({
            ...prev,
            [name] : value,
        }))
   }

    return (
        <div className={styles.form}>
        <FormControl>
            <FormLabel>ID : </FormLabel>
            <Input placeholder='name' type='number' name = "id" value = {editableData.id} onChange={handleChange}/>
        </FormControl>

        <FormControl>
            <FormLabel>Name : </FormLabel>
            <Input type='name' placeholder="name"  name = "name" value = {editableData.name} onChange={handleChange} />
        </FormControl>

        <FormControl>
            <FormLabel>UserName : </FormLabel>
            <Input type='name' placeholder="user_name" name = "username" value = {editableData.username} onChange={handleChange} />
        </FormControl>

        <FormControl>
            <FormLabel>Email : </FormLabel>
            <Input type='email' placeholder="xyz@gmail.com" name = "email" value = {editableData.email} onChange={handleChange}/>
            <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <Button className = {styles.btn} colorScheme='green' onClick={()=>handleUpdate(editableData)}>Update the Data</Button>
        </div>
    )
}

export default Update;