import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalCloseButton,
    Input,
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'


const Create = ({ show, formData, setFormData, hideForm, usersData, setUsersData, update }) => {

    const handleSubmit = () => {
        // setFormData(formData);
        // setUsersData([...usersData , formData]);

        const updatedUserData = [...usersData];

        updatedUserData.push(formData);

        setUsersData(updatedUserData);
        hideForm();

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleUpdate = () => {
        console.log(formData, "formData");
        // const updatedData = usersData.map((user) =>
        //     user.id === formData.id ? formData : user
        // );
        // setUsersData(updatedData);

        usersData.splice(formData.id-1 , 1 , formData)
        hideForm(true)
        

    }

    return (
        <><Modal isOpen={show} onClose={hideForm}>
            <ModalOverlay />
            <ModalContent>
                {
                    // update ?

                    // <ModalHeader>Update the Data </ModalHeader>
                    // :
                    // <ModalHeader>Add the Data </ModalHeader>

                    <ModalHeader>{
                        update ? "Add Data" : "Update Data"
                    }</ModalHeader>

                }
                <ModalCloseButton />

                <Input variant='filled' placeholder='ID' name="id" value={formData.id} onChange={handleChange} />
                &nbsp;
                <Input variant='filled' placeholder='name' name="name" value={formData.name} onChange={handleChange} />
                &nbsp;
                <Input variant='filled' placeholder='user name' name="username" value={formData.username} onChange={handleChange} />
                &nbsp;
                <Input variant='filled' placeholder='email' name="email" value={formData.email} onChange={handleChange} />

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={hideForm}>
                        Close
                    </Button>
                    {
                        update ?
                            <Button onClick={handleUpdate} variant='ghost'>Update the Data</Button>
                            :
                            <Button onClick={handleSubmit} variant='ghost'>Submit</Button>
                    }
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}

export default Create;