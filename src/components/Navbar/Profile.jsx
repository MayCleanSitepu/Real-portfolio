import React from "react";
import {User, Link} from "@nextui-org/react";

const profile = () => {
  return (
    <User   
      name="May Clean"
      description={(
        <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
          @klinnn
        </Link>
      )}
      avatarProps={{
        src: "https://avatars.githubusercontent.com/u/113108027?v=4"
      }}
    />
  );
}

export default profile;