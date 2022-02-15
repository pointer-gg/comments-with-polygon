import * as React from "react";
import { Box, Spinner, Stack, Center } from "@chakra-ui/react";
import Comment from "./Comment";
import CommentEditor from "./CommentEditor";
import useComments from "../hooks/useComments";
import useEvents from "../hooks/useEvents";

interface CommentsProps {
  topic: string;
}

const Comments: React.FunctionComponent<CommentsProps> = ({ topic }) => {
  const query = useComments({ topic });

  useEvents({ topic });

  return (
    <Box>
      {query.isLoading && (
        <Center p={8}>
          <Spinner />
        </Center>
      )}
      <Stack spacing={4}>
        {query.data?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
        {query.isFetched && <CommentEditor topic={topic} />}
      </Stack>
    </Box>
  );
};

export default Comments;
