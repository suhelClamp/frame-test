/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next/pages-router/server";

const frames = createFrames({
  basePath: "/api/frames",
});
const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <p className="text-red-500">
        {ctx.pressedButton
          ? `I clicked ${ctx.searchParams.value}`
          : `Click some button`}
      </p>
    ),
    buttons: [
      <Button action="post" target={{ query: { value: "Yes" } }}>
        Say Yes
      </Button>,
      <Button action="post" target={{ query: { value: "No" } }}>
        Say No
      </Button>,
    ],
  };
});

export default handleRequest;
