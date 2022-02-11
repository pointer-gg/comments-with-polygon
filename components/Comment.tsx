import * as React from "react";
import { Text, Heading, HStack, Stack } from "@chakra-ui/react";
import TimeAgo from "react-timeago";
import Avatar from "./Avatar";
import Username from "./Username";
import * as api from "../api";

interface CommentProps {
  comment: api.Comment;
}

const Comment: React.FunctionComponent<CommentProps> = ({ comment }: any) => {
  return (
    <HStack spacing={3} alignItems="start">
      <Avatar address={comment.creator_address} />
      <Stack spacing={1} flex={1} bg="whiteAlpha.100" rounded="2xl" p={3}>
        <Heading color="whiteAlpha.900" fontSize="lg">
          <Username address={comment.creator_address} />
        </Heading>
        <Text color="whiteAlpha.800" fontSize="lg">
          {comment.message}
        </Text>
        <Text color="whiteAlpha.500" fontSize="md">
          <TimeAgo date={comment.created_at} />
        </Text>
      </Stack>
    </HStack>
  );
};

export default Comment;
