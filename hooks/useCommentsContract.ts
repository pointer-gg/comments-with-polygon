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
    addressOrName: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
    contractInterface: CommentsContract.abi,
    signerOrProvider: signer.data || provider,
  });

  const getComments = async (topic: string): Promise<Comment[]> => {
    return contract.getComments(topic).then((comments) => {
      return comments.map((c) => ({ ...c }));
    });
  };

  const addComment = async (topic: string, message: string): Promise<void> => {
    const tx = await contract.addComment(topic, message);
    await tx.wait();
  };

  const subscribe = (
    eventType: EventType,
    subscriber: Subscriber
  ): Unsubscriber => {
    contract.on(eventType, (data) => {
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
