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
      <Button
        w="4"
        bg="green.400"
        size="sm"
        color="white"
        fontSize="md"
        disabled
        _disabled={{
          bg: 'green.400',
          cursor: 'default',
        }}
        _hover={{
          bg: 'green.600',
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      w="4"
      border="1px"
      borderColor="green.200"
      bg="white"
      size="sm"
      color="green.400"
      fontSize="md"
      _hover={{
        border: 'none',

        bg: 'green.400',
        color: 'white',
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
}
