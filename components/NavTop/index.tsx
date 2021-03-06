import {
  Button,
  Box,
  Flex,
  IconButton,
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { useWeb3React } from '@web3-react/core'
import { injected } from "../wallet/connect"
import {  Web3Address } from '../Web3Address.Web3Address'
import {Web3Button} from '../Web3Button'

type Props = {
  onOpen: () => void;
};

export default function NavTop(props: Props) {
  const { onOpen } = props;

  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("#212145", "gray.800");


 
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      w="full"
      px="4"
      bg={bg}
      borderBottomWidth="1px"
      borderColor={useColorModeValue("#DBDBFF", "#212145")}
      h="14"
    >
      <IconButton
        aria-label="Menu"
        display={{ base: "inline-flex", md: "none" }}
        onClick={onOpen}
        icon={<FiMenu />}
        size="sm"
      />

      {/* <InputGroup w="96" display={{ base: "none", md: "flex" }}>
        <InputLeftElement color="gray.500">
          <FiSearch />
        </InputLeftElement>
        <Input placeholder="Search metrics..." />
      </InputGroup> */}

      <Box
        as="iframe"
        src="https://coinhippo.io?widget=price-marquee&theme=?"
        title="Price Update"
        frameBorder="0"
        width="100%"
        height="35"
      />
      

      <Flex align="center">
      
      <Web3Button />
      </Flex>
      <main className="grow p-8 text-center">
     
        <Web3Address />
      </main>
    </Flex>
  );
}
