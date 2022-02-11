import * as React from "react";
import Davatar from "@davatar/react";

interface AvatarProps {
  address?: string | null;
}

const Avatar: React.FunctionComponent<AvatarProps> = ({ address }) => {
  return (
    <Davatar
      size={48}
      address={address || "0x0000000000000000000000000000000000000000"}
      generatedAvatarType="jazzicon" // optional, 'jazzicon' or 'blockies'
    />
  );
};

export default Avatar;
