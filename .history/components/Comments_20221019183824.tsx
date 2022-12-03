import * as React from "react";
import { Box } from "@chakra-ui/react";
import useComments from "../hooks/useComments";

interface CommentsProps {
  topic: string;
}

const Comments: React.FunctionComponent<CommentsProps> = ({ topic }) => {
  const query = useComments({ topic });

  return <Box as="pre">{JSON.stringify(query.data, null, 2)}</Box>;
};

export default Comments;