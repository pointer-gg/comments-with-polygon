import { v4 as uuid } from "uuid";
import PubSub from "pubsub-js";

export interface Reply {
  id: string;
  comment_id: string;
  message: string;
  creator_address: string;
  created_at: number;
}

export interface Comment {
  id: string;
  topic: string;
  message: string;
  creator_address: string;
  created_at: number;
}

interface Store {
  comments: Record<string, Comment>;
  replies: Record<string, Reply>;
}

const store: Store = {
  comments: {
    "d0e6900b-f313-4911-b01b-3ae0e2f1a34d": {
      id: "d0e6900b-f313-4911-b01b-3ae0e2f1a34d",
      message: "Cool tutorial, well done!",
      topic: "cheese",
      creator_address: "0xB0e16428e00e683B9bb2F06C6465BdCFc2036f6E",
      created_at: 1644022950927,
    },
    "72285d0e-8197-4269-babb-8fde63b3f0e2": {
      id: "72285d0e-8197-4269-babb-8fde63b3f0e2",
      message: "Thanks, happy to help!",
      topic: "cheese",
      creator_address: "0x3A5D69BafA68353d130afa251Ee68a41eEa7aed9",
      created_at: 1644022952932,
    },
  },
  replies: {
    "51385d0e-8197-4269-babb-8fde63b34534": {
      id: "51385d0e-8197-4269-babb-8fde63b34534",
      message: "i'm a reply",
      comment_id: "d0e6900b-f313-4911-b01b-3ae0e2f1a34d",
      creator_address: "0xB0e16428e00e683B9bb2F06C6465BdCFc2036f6E",
      created_at: 1644022951927,
    },
  },
};

export const timeout = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export enum ApiEventType {
  CommentAdded = "CommentAdded",
  ReplyAdded = "ReplyAdded",
}

export type ApiEvents = {
  [ApiEventType.CommentAdded]: {
    type: ApiEventType.CommentAdded;
    data: Comment;
  };
  [ApiEventType.ReplyAdded]: {
    type: ApiEventType.ReplyAdded;
    data: Reply;
  };
};

export type EventHandler<EventType extends ApiEventType> = (
  event: ApiEvents[EventType]
) => void;

export type Unsubscribe = () => void;

export const on = <EventType extends ApiEventType>(
  eventType: EventType,
  handler: EventHandler<EventType>
): Unsubscribe => {
  const token = PubSub.subscribe(eventType, (msg, data) =>
    handler({
      type: msg,
      data,
    } as any)
  );
  return () => {
    PubSub.unsubscribe(token);
  };
};

export const addComment = async (payload: {
  message: string;
  topic: string;
}): Promise<Comment> => {
  await timeout(1000);

  const comment: Comment = {
    id: uuid(),
    message: payload.message,
    topic: payload.topic,
    creator_address: "0x0000000000000000000000000000000000000000",
    created_at: Date.now(),
  };
  store.comments[comment.id] = comment;
  PubSub.publishSync(ApiEventType.CommentAdded, comment);
  return comment;
};

export const getComments = async (options: {
  topic: string;
}): Promise<Comment[]> => {
  await timeout(1000);

  const comments = Object.values(store.comments).filter(
    (c) => c.topic === options.topic
  );
  comments.sort((a, b) => a.created_at - b.created_at);
  return comments;
};

export const addReply = async (payload: {
  message: string;
  comment_id: string;
}): Promise<Reply> => {
  await timeout(1000);

  const reply: Reply = {
    id: uuid(),
    message: payload.message,
    comment_id: payload.comment_id,
    creator_address: "0x0000000000000000000000000000000000000000",
    created_at: Date.now(),
  };
  store.replies[reply.id] = reply;
  PubSub.publishSync(ApiEventType.ReplyAdded, reply);
  return reply;
};

export const getReplies = async (options: {
  comment_id: string;
}): Promise<Reply[]> => {
  await timeout(1000);

  const replies = Object.values(store.replies).filter(
    (c) => c.comment_id === options.comment_id
  );
  replies.sort((a, b) => a.created_at - b.created_at);
  return replies;
};
