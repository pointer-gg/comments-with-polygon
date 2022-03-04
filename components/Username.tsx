import * as React from "react";
import { Text, TextProps } from "@chakra-ui/react";
import { useEnsLookup } from "wagmi";
import truncateMiddle from "truncate-middle";

interface UsernameProps extends TextProps {
  address: string;
}

const Username: React.FunctionComponent<UsernameProps> = ({
  address,
  ...otherProps
}) => {
  const [query] = useEnsLookup({ address });

  // Show ens name if exists, but show truncated address as fallback
  return (
    <Text
      display="inline"
      textTransform={query.data ? "none" : "uppercase"}
      {...otherProps}
    >
      {query.data || truncateMiddle(address || "", 5, 4, "...")}
    </Text>
  );
};

export default Username;
