import React from "react";
import {Tooltip, Button} from "@nextui-org/react";

export default function App() {
  return (
    <Tooltip
      content={
        <div className="px-1 py-2">
          <div className="text-small font-bold">More of my projects</div>
          <div className="text-tiny">You will redirected to blog page</div>
        </div>
      }
    >
      <Button href="/blogs" variant="bordered" className="bg-[#373737] rounded-xl font-semibold">
        Show more
      </Button>
    </Tooltip>
  );
}
