import * as React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { useAccount, useConnect } from "wagmi";

interface AuthButtonProps extends ButtonProps {}

const AuthButton: React.FunctionComponent<AuthButtonProps> = (props) => {
  const [connectQuery, connect] = useConnect();
  const [accountQuery] = useAccount();

  // If not authenticated, require sign-in
  if (!accountQuery.data?.address) {
    return (
      <Button
        {...props}
        onClick={() => {
          connect(connectQuery.data.connectors[0]);
        }}
      >
        Sign In
      </Button>
    );
  }

  // If authenticated, show button as usual
  return <Button {...props}>{props.children}</Button>;
};

export default AuthButton;
