import { useQuery } from "react-query";
import useContract from "./useContract";

interface UseCommentsQuery {
  topic: string;
}

const useComments = ({ topic }: UseCommentsQuery) => {
  const contract = useContract();
  return useQuery(["comments", { topic, chainId: contract.chainId }], () =>
    contract.getComments(topic)
  );
};

export default useComments;
