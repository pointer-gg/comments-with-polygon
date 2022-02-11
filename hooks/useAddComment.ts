import { useMutation } from "react-query";
import useCommentsContract from "./useCommentsContract";

interface UseAddCommentPayload {
  topic: string;
  message: string;
}

const useAddComment = () => {
  const contract = useCommentsContract();

  return useMutation(async ({ topic, message }: UseAddCommentPayload) => {
    await contract.addComment(topic, message);
  });
};

export default useAddComment;
