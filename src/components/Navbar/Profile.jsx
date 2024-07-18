import React from "react";
import {User, Link} from "@nextui-org/react";

const profile = () => {
  return (
    <User   
      className="text-black"
      name="May Clean"
      description={(
        <Link href="https://instagram.com/ey_kean" size="sm" isExternal className="text-black">
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