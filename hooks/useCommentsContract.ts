import * as wagmi from "wagmi";
import CommentsContract from "../artifacts/contracts/Comments.sol/Comments.json";
import { useProvider, useSigner } from "wagmi";

export interface Comment {
  id: string;
  topic: string;
  message: string;
  creator_address: string;
  created_at: number;
}

export enum EventType {
  CommentAdded = "CommentAdded",
}

export type Subscriber = (data: any) => void;
export type Unsubscriber = () => void;

const useCommentsContract = () => {
  const [signer] = useSigner();
  const provider = useProvider();

  const contract = wagmi.useContract({
    addressOrName: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
    contractInterface: CommentsContract.abi,
    signerOrProvider: signer.data || provider,
  });

  const getComments = (topic: string): Comment[] => {
    return contract.getComments(topic).then((comments) => {
      return comments.map((c) => ({ ...c }));
    });
  };

  const addComment = async (topic: string, message: string) => {
    const tx = await contract.addComment(topic, message);
    await tx.wait();
  };

  const subscribe = (
    eventType: EventType,
    subscriber: Subscriber
  ): Unsubscriber => {
    contract.on(eventType, (data) => {
      console.log(data);
      subscriber(data);
    });
    return () => {
      contract.off(eventType);
    };
  };

  return {
    contract,
    chainId: contract.provider.network?.chainId,
    getComments,
    addComment,
    subscribe,
  };
};

export default useCommentsContract;
