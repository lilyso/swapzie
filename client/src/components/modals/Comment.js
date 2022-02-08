import React, { useState } from "react";
import { Box, Text, Button, FormControl, Input, Flex } from "@chakra-ui/react";
import getDate from "../../utils/date.js";
import Auth from "../../utils/auth";
import { UPDATE_COMMENT } from "../../utils/mutations";
import { QUERY_POSTS } from "../../utils/queries.js";
import { useMutation } from "@apollo/client";

export default function Comment({ comment, removeComment }) {
  const [editing, setEditing] = useState(false);
  const [editState, setEditState] = useState(comment.comment);
  const currentUser = Auth.getProfile();
  const [updateComment] = useMutation(UPDATE_COMMENT, {
    refetchQueries: [{ query: QUERY_POSTS }],
  });

  const handleSubmitComment = async (event) => {
    event.preventDefault();
    try {
      await updateComment({
        variables: {
          postId: comment.postId,
          _id: comment._id,
          comment: editState.comment,
        },
      });
      setEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserUpdate = (event) => {
    const { value } = event.target;
    setEditState({
      ...editState,
      comment: value,
    });
  };

  const enableEditing = () => {
    if (comment.userId._id === currentUser.data._id) {
      setEditing(!editing);
    }
  };

  return (
    <Box key={comment._id}>
      {!editing ? (
        <>
          <Text mb={4} borderRadius="10px" p={4} bg="gray.100">
            {comment.comment} - {comment.userId.firstName},{" "}
            {getDate(comment.created_at / 1000)}
          </Text>
          {currentUser && currentUser.data._id === comment.userId._id && (
            <Box>
              <Button
                color="white"
                onClick={removeComment}
                bgColor="#FF6B6B"
                m={4}
                size="xs"
                value={comment._id}
              >
                Delete
              </Button>
              <Button
                color="white"
                bgColor="#1a535c"
                m={4}
                size="xs"
                onClick={() => enableEditing()}
              >
                Edit
              </Button>
            </Box>
          )}
        </>
      ) : (
        <>
          <form onSubmit={handleSubmitComment}>
            <Flex>
              <FormControl>
                <Input
                  onChange={handleUserUpdate}
                  defaultValue={comment.comment}
                ></Input>
              </FormControl>
              <Button type="submit" ml={4}>
                Update
              </Button>
            </Flex>
          </form>
        </>
      )}
    </Box>
  );
}
