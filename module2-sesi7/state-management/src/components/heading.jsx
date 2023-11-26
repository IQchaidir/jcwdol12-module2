/** @format */

import { Heading } from "@chakra-ui/react";

function HeadingComponent(props) {
  console.log(props);
  return <Heading>{props.value}</Heading>;
}
export default HeadingComponent;
