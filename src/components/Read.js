import { useEffect , useState} from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'
  import { DeleteIcon , EditIcon} from '@chakra-ui/icons'
  import { Button } from '@chakra-ui/react'
import Create from "./Create";

const Read = () => {

    const [usersData , setUsersData] = useState([]);
    const [form , showForm] = useState(false);
    const [formData , setFormData] = useState({
      id : "",
      name : "",
      username : "",
      email : "",
    })
    const [update , setUpdate] = useState(false);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsersData(json))
    } , [])

    const hideForm = () => {
      showForm(false);
    }

    const handleDelete = (uid) => {
      const filteredData =  usersData.filter((ele)=> ele.id !== uid)
      setUsersData(filteredData);
    }

    const handleToggle = () => {
      setUpdate(false)
      setFormData({})
      showForm(true)

    }

    const removeAllData = () => {
      setUsersData([])
    }

    const handleEdit = (user) => {
      setUpdate(true);
      // console.log(user , "user");
      showForm(true);
      if(user){
        setFormData(user)
      }

    }

    console.log(usersData);

    return (

      <> 
      <Create show = {form}  formData = {formData} setFormData = {setFormData} hideForm = {hideForm} usersData = {usersData} setUsersData = {setUsersData} update = {update}/>

      <div className="heading">
        <h1 style={{textAlign : "center" , fontSize : "40px" , backgroundColor : "#56d4ed"}}>User-Managment</h1>
      </div>

      <div style={{display : "flex" , justifyContent : "end" , margin : "10px"}}>

      <Button colorScheme='red' size='md' style={{ display : "inline"}} onClick={removeAllData }>
          Remove All Data
        </Button>
        &nbsp;
        &nbsp;
        <Button colorScheme='teal' size='md' style={{ display : "inline"}} onClick={()=> handleToggle() }>
          Add the Data
        </Button>
      </div>
      
      
         <TableContainer>
                <Table variant='simple'>
                  <Thead>
                    <Tr>
                      <Th>{"ID"}</Th>
                      <Th>{"name"}</Th>
                      <Th>{"User name"}</Th>
                      <Th>{"email"}</Th>
                    </Tr>
                  </Thead>
                  {
                    usersData.length > 0 ? usersData?.map((user)=>{
                      return (
                        <Tbody key = {user.id}>
                        <Tr>
                          <Td>{user.id}</Td>
                          <Td>{user.name}</Td>
                          <Td>{user.username}</Td>
                          <Td>{user.email}</Td>
                          <Button onClick={()=>handleDelete(user.id)}><Td><DeleteIcon/></Td></Button>
                          &nbsp;
                          &nbsp;
                          &nbsp;
                          <Button onClick={()=>handleEdit(user)}><Td><EditIcon/></Td></Button>
                        </Tr>
              
                      </Tbody>

                      )
                    })

                    :
                    
                    <div className="noData">
                      <h1>No Data to show.....</h1>                      
                    </div>

                  }
          
                  
                </Table>
         </TableContainer> 
      
      </>           
)}

export default Read;