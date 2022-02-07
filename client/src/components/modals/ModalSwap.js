import React, { useState } from "react";
import getDate from "../../utils/date.js";
import { useMutation } from "@apollo/client";
import {
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Center,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Text,
  Image,
  Heading,
  Box,
  Textarea,
} from "@chakra-ui/react";
import Auth from "../../utils/auth";
import { DELETE_COMMENT, NEW_COMMENT } from "../../utils/mutations";
import { QUERY_POSTS } from "../../utils/queries.js";

function PostExpand({ post }) {
  const currentUser = Auth.getProfile();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [commentState, setCommentState] = useState("");
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const [deleteComment] = useMutation(DELETE_COMMENT, {
    refetchQueries: [{ query: QUERY_POSTS }],
  });
  const [addComment] = useMutation(NEW_COMMENT, {
    refetchQueries: [{ query: QUERY_POSTS }],
  });

  // Add comment
  const newComment = async (event) => {
    event.preventDefault();
    console.log(
      "postId:",
      post._id,
      "userId:",
      currentUser.data._id,
      "comment:",
      commentState.comment
    );
    try {
      await addComment({
        variables: {
          postId: post._id,
          userId: currentUser.data._id,
          comment: commentState.comment,
        },
      });
      setCommentState("");
    } catch (error) {
      console.log(error);
    }
  };
  // Delete comment
  const removeComment = async (event) => {
    const commentId = event.target.value;
    const post_id = post._id;
    try {
      await deleteComment({
        variables: { postId: post_id, _id: commentId },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewComment = (event) => {
    const { name, value } = event.target;
    setCommentState({
      ...commentState,
      [name]: value,
    });
  };

  return (
    <>
      <Button onClick={onOpen}>Swap</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Center>
              <Image
                mt={4}
                boxSize={300}
                objectFit="cover"
                borderRadius={10}
                mb={4}
                src={post.image}
                alt="post feature"
              />
            </Center>
            <Heading h="50px" size="md">
              {post.title}
            </Heading>
            <Text>
              {post.location}, {post.category.name}, {post.age}
            </Text>
            <Text h={120} py={4}>
              {post.description}
            </Text>
            <Text fontSize="sm" pb={4}>
              Posted by {post.user.firstName} on
              {getDate(post.created_at / 1000)}
            </Text>
            {post.comments &&
              post.comments.map((comment, i) => (
                <Box key={comment._id}>
                  <Text>
                    {comment.comment} - user,{" "}
                    {getDate(comment.created_at / 1000)}
                  </Text>
                  {currentUser && currentUser.data._id === comment.userId && (
                    <Box>
                      <Button
                        onClick={removeComment}
                        bgColor="#FF6B6B"
                        m={4}
                        size="xs"
                        value={comment._id}
                      >
                        Delete
                      </Button>
                      <Button m={4} size="xs">
                        Edit
                      </Button>
                    </Box>
                  )}
                </Box>
              ))}
          </ModalBody>
          <FormControl px={4}>
            <FormLabel>Add Comment</FormLabel>
            <Textarea onChange={handleNewComment} name="comment"></Textarea>
          </FormControl>
          <ModalFooter>
            <Button onClick={newComment} color="white" bgColor="#1a535c" mr={3}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PostExpand;
