import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
} from '@chakra-ui/react';

import * as S from './styles';

import { AiOutlineMenu } from 'react-icons/ai';

export function Toggle() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <S.Button onClick={onOpen}>
        <AiOutlineMenu size={28} />
      </S.Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            _focus={{
              boxShadow: 'none',
            }}
          />
          <DrawerHeader></DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
