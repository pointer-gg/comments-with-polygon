import * as React from "react";
import { Box, Spinner, Stack, Center } from "@chakra-ui/react";
import useComments from "../hooks/useComments";
import Comment from "./Comment";
import CommentEditor from "./CommentEditor";

interface CommentsProps {
  topic: string;
}

const Comments: React.FunctionComponent<CommentsProps> = ({ topic }) => {
  const query = useComments({ topic });

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