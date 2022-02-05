import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import Upload from "../cloudinary/Upload";
import { UPDATE_POST } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

function UpdatePost({ categories, post }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formState, setFormState] = useState(post && post);

  const [updatePost] = useMutation(UPDATE_POST);

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const mutationRes = await updatePost({
        variables: {
          _id: post._id,
          title: formState.title,
          description: formState.description,
          image: formState.image,
          age: formState.age,
          category: formState.category && formState.category._id,
          location: formState.location,
        },
      });
      console.log(formState);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const handleEdit = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });

    console.log({ ...formState, [name]: value });
  };

  return (
    <>
      <Button mt={4} onClick={onOpen}>
        Edit
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <form onSubmit={handleUpdateSubmit}>
          <ModalContent>
            <ModalHeader>Update Post</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl mb={4}>
                <Upload
                  name="image"
                  showImg={false}
                  onChange={(img) => setFormState({ ...formState, image: img })}
                  defaultImage={formState.image}
                />
                <FormLabel>Title</FormLabel>
                <Input
                  name="title"
                  defaultValue={post.title}
                  onChange={handleEdit}
                  ref={initialRef}
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel htmlFor="description">Description</FormLabel>
                <Textarea
                  name="description"
                  onChange={handleEdit}
                  defaultValue={post.description}
                />
              </FormControl>
              <Select
                name="age"
                onChange={handleEdit}
                placeholder="Select Age"
                defaultValue={post.age}
                mb={4}
              >
                <option value="0-6m">0-6m</option>
                <option value="6-12m">6-12m</option>
                <option value="1-2yo">1-2yo</option>
                <option value="3-4yo">3-4yo</option>
                <option value="5-6yo">5-6yo</option>
                <option value="7-9yo">7-9yo</option>
                <option value="10-12yo">10-12yo</option>
              </Select>
              <Select
                name="category"
                placeholder="Select Category"
                mb={4}
                onChange={handleEdit}
                defaultValue={post.category._id}
              >
                {categories &&
                  categories.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
              </Select>
              <FormControl mt={4}>
                <FormLabel>Location</FormLabel>
                <Input
                  name="location"
                  onChange={handleEdit}
                  defaultValue={post.location}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button color="white" bgColor="#1a535c" mr={3} type="submit">
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}

export default UpdatePost;
