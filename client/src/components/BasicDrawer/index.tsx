import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
function BasicDrawer({ isOpen, onClose, btnRef,children ,title }) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{title}</DrawerHeader>

          <DrawerBody>
            {children}
          </DrawerBody>

          {/* <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default BasicDrawer;
