import { Box } from "@chakra-ui/react";

import EmptyCart from "./Cart/Cart1";
import FullCart from "./Cart/Cart2";
export default function Cart() {
  return (
    <Box>
      {/* <EmptyCart /> */}
      <FullCart />
    </Box>
  );
}
