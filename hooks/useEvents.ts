import { useEffect } from "react";
import { useQueryClient } from "react-query";
import useCommentsContract, { EventType } from "./useCommentsContract";

interface UseEventsQuery {
  topic: string;
}

// Listen to events and refresh data
const useEvents = ({ topic }: UseEventsQuery) => {
  const queryClient = useQueryClient();
  const contract = useCommentsContract();

  useEffect(() => {
    return contract.subscribe(EventType.CommentAdded, (comment) => {
      if (comment.topic !== topic) {
        return;
      }
      queryClient.invalidateQueries([
        "comments",
        { topic: comment.topic, chainId: contract.chainId },
      ]);
    });
  }, [queryClient, contract.chainId, topic]);
};

export default useEvents;
