import { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { isJsonString } from "../utility";

const Read = () => {

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    (isJsonString(localStorage.getItem("usersData")) ? JSON.parse(localStorage.getItem("usersData"))?.length : [].length) ?
      setUsersData(JSON.parse(localStorage.getItem("usersData")))
      :
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
          localStorage.setItem("usersData", JSON.stringify(json))
          setUsersData(json)
        }
        )
  }, [])

  const handleDelete = (uid) => {
    const filteredData = usersData.filter((ele) => ele.id !== uid)
    setUsersData(filteredData)
    localStorage.setItem("usersData", JSON.stringify(filteredData))
  }

  return (
    <>

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
          <Tbody>
            {
              usersData.length > 0 ? usersData?.map((user) =>
              (
                <Tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.username}</Td>
                  <Td>{user.email}</Td>

                  <Td><Button onClick={() => handleDelete(user.id)}><DeleteIcon /></Button>

                  </Td>
                  <Td>
                    <Link to="/edit" state={user}>
                      <Button><EditIcon /></Button>
                    </Link>
                  </Td>
                </Tr>
              ))

                :

                <Tr>
                  <Td colSpan={5}>
                    <div className="noData">
                      <h1>No Data to show.....</h1>
                    </div>
                  </Td>
                </Tr>
            }
          </Tbody>
        </Table>
      </TableContainer>

    </>
  )
}

export default Read;