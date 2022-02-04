import React from "react";
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
} from "@chakra-ui/react";
import Upload from "../Cloudinary/Upload";

function UpdatePost({ categories }) {
  console.log({ categories });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

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
        <ModalContent>
          <ModalHeader>Update Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mb={4}>
              <Upload name="image" />
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Textarea placeholder="Write a detailed description" />
            </FormControl>
            <Select mb={4} placeholder="Select Age">
              <option value="0-6m">0-6m</option>
              <option value="6-12m">6-12m</option>
              <option value="1-2yo">1-2yo</option>
              <option value="3-4yo">3-4yo</option>
              <option value="5-6yo">5-6yo</option>
              <option value="7-9yo">7-9yo</option>
              <option value="10-12yo">10-12yo</option>
            </Select>
            <Select mb={4} placeholder="Select Category">
              {categories &&
                categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
            </Select>
            <FormControl mt={4}>
              <FormLabel>Location</FormLabel>
              <Input />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button color="white" bgColor="#1a535c" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UpdatePost;
