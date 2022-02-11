import * as wagmi from "wagmi";
import CommentsContract from "../artifacts/contracts/Comments.sol/Comments.json";
import { useProvider, useSigner } from "wagmi";
import * as api from "../api";

const useContract = () => {
  const [signer] = useSigner();
  const provider = useProvider();

  const contract = wagmi.useContract({
    addressOrName: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
    contractInterface: CommentsContract.abi,
    signerOrProvider: signer.data || provider,
  });

  const getComments = (topic: string): api.Comment[] => {
    return contract.getComments(topic).then((comments) => {
      return comments.map((c) => ({ ...c }));
    });
  };

  const addComment = async (topic: string, message: string) => {
    const tx = await contract.addComment(topic, message);
    await tx.wait();
  };

  return {
    contract,
    chainId: contract.provider.network?.chainId,
    getComments,
    addComment,
  };
};

export default useContract;
