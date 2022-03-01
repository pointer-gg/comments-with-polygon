import * as React from "react";
import { HStack, Stack, Textarea } from "@chakra-ui/react";
import { constants } from "ethers";
import Avatar from "@davatar/react";
import AuthButton from "./AuthButton";
import { useAccount } from "wagmi";
import useAddComment from "../hooks/useAddComment";

interface CommentEditorProps {
  topic: string;
}

const CommentEditor: React.FunctionComponent<CommentEditorProps> = ({
  topic,
}) => {
  const [message, setMessage] = React.useState("");
  const mutation = useAddComment();
  const [accountQuery] = useAccount();

  return (
    <Stack spacing={3}>
      <HStack spacing={3} alignItems="start">
        <Avatar
          size={48}
          address={accountQuery.data?.address || constants.AddressZero}
        />
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write a message.."
          p={3}
          flex={1}
          bg="whiteAlpha.100"
          rounded="2xl"
          fontSize="lg"
        />
      </HStack>
      <AuthButton
        size="sm"
        colorScheme="pink"
        alignSelf="flex-end"
        onClick={() => {
          mutation
            .mutateAsync({
              message,
              topic,
            })
            .then(() => setMessage(""));
        }}
        isLoading={mutation.isLoading}
      >
        Submit
      </AuthButton>
    </Stack>
  );
};

export default CommentEditor;
