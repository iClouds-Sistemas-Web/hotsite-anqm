import NextLink from 'next/link';
import { data } from '~/utils/data';

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  useDisclosure,
  DrawerCloseButton,
} from '@chakra-ui/react';

import * as S from './styles';
import * as C from '@chakra-ui/react';

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
        <S.DrawerContent>
          <DrawerCloseButton
            _focus={{
              boxShadow: 'none',
            }}
          />
          <S.DrawerHeader>
            <C.Image
              src="images/png/logo-anqm-toggle.png"
              alt="Logo Associação Norte-Riograndense de Criadores de Cavalo, cor do texto branco e preto, com detalhes em verde e amarelo"
            />
          </S.DrawerHeader>

          <DrawerBody>
            {data.navigation.map((item) => (
              <NextLink key={item.id} href={item.url}>
                <S.Link>{item.title}</S.Link>
              </NextLink>
            ))}
          </DrawerBody>

          <S.DrawerFooter>
            <C.Image
              src="/images/svg/icon-facebook.svg"
              alt="Ícone facebook, quadrado com borda arredondada com a letra f, ambos cinza escuro"
            />
            <C.Image
              src="/images/svg/icon-instagram.svg"
              alt="Ícone instagram, quadrado com borda arredondada com um círculo no meio, ambos cinza escuro"
            />
          </S.DrawerFooter>
        </S.DrawerContent>
      </Drawer>
    </>
  );
}
