import { useEffect } from "react";
import { useQueryClient } from "react-query";
import * as api from "../api";

// Listen to events and refresh data
const useRealtime = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    return api.on(api.ApiEventType.CommentAdded, (event) => {
      queryClient.invalidateQueries(["comments", { topic: event.data.topic }]);
    });
  }, [queryClient]);
};

export default useRealtime;
