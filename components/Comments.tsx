import * as React from "react";
import { Box, Spinner, Stack, Center } from "@chakra-ui/react";
import useComments from "../hooks/useComments";

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
          <Box key={comment.id} bg="whiteAlpha.100" rounded="lg" p={3}>
            {comment.message}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Comments;
