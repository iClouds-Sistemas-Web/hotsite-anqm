import * as S from './styles';
import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  onPageChange,
  number,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <S.Content>
        <Button
          disabled
          _disabled={{
            bg: '#0E4F25',
            cursor: 'default',
          }}
          _hover={{
            bg: '#0a381a',
          }}
        >
          {number}
        </Button>
      </S.Content>
    );
  }

  return (
    <S.Container>
      <Button onClick={() => onPageChange(number)}>{number}</Button>
    </S.Container>
  );
}
