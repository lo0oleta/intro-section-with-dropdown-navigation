import { HTMLChakraProps, chakra } from "@chakra-ui/react";
import * as React from "react";

function Todo(props: HTMLChakraProps<"svg">) {
  return (
    <chakra.svg
      width={73}
      height={36}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 3v12a1 1 0 01-1 1H1a1 1 0 01-1-1V3a1 1 0 011-1h1V1a1 1 0 112 0v1h2V1a1 1 0 112 0v1h2V1a1 1 0 012 0v1h1a1 1 0 011 1zm-2 3H2v1h10V6zm0 3H2v1h10V9zm0 3H2v1h10v-1z"
        fill="#726CEE"
      />
    </chakra.svg>
  );
}

export default Todo;
