import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

export default function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        ≡
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p><Link href='/'>Movie Dashboard</Link></p>
            <p><Link href="/register">Register</Link></p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
