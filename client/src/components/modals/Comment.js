import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import getDate from "../../utils/date.js";
import Auth from "../../utils/auth";

export default function Comment({ comment, removeComment }) {
  const [editing, setEditing] = React.useState(false);
  const currentUser = Auth.getProfile();

  const enableEditing = () => {
    if (comment.userId._id === currentUser.data._id) {
      setEditing(!editing);
    }
  };

  const updateComment = async () => {};

  return (
    <Box key={comment._id}>
      {!editing ? (
        <>
          <Text>
            {comment.comment} - {comment.userId.firstName},{" "}
            {getDate(comment.created_at / 1000)}
          </Text>
          {currentUser && currentUser.data._id === comment.userId._id && (
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
              <Button m={4} size="xs" onClick={() => enableEditing()}>
                Edit
              </Button>
            </Box>
          )}
        </>
      ) : (
        <>Here we are ediitng</>
      )}
    </Box>
  );
}
