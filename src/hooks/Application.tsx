import { useRouter } from 'next/router';
import {
  useState,
  createContext,
  ReactNode,
  useEffect,
  SetStateAction,
} from 'react';

import { News } from '~/interfaces/news';
import { api } from '~/services/config';

type ApplicationData = {
  data: News[];
  page: number;
  search?: string;
  isLoading: boolean;
  amountOfRegisters: string;
  totalCountOfRegisters: string;
  setPage: (props: SetStateAction<number>) => void;
  setSearch: (props: SetStateAction<string>) => void;
};

type ApplicationProps = {
  children: ReactNode;
};

export const ApplicationContext = createContext({} as ApplicationData);

export const ApplicationProvider = ({ children }: ApplicationProps) => {
  const [page, setPage] = useState(1);

  const [data, setData] = useState<News[]>([]);

  const [search, setSearch] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  const [amountOfRegisters, setAmountOfRegisters] = useState('');

  const [totalCountOfRegisters, setTotalCountOfRegisters] = useState('');

  const { query } = useRouter();

  useEffect(() => {
    api
      .get(
        `contents?clientId=${
          process.env.NEXT_PUBLIC_CLIENT_ID
        }&page=${page}&amountNews=10&indexId=2${
          query.search ? `&title=${String(query.search).replace(' ', '-')}` : ''
        }`
      )
      .then((response) => {
        setIsLoading(true);
        setData(response.data.contents);
        setTotalCountOfRegisters(response.data.divisionByPage);
        setAmountOfRegisters(response.data.contentsLength);
        setIsLoading(false);
      });
  }, [amountOfRegisters, page, query.search]);

  return (
    <ApplicationContext.Provider
      value={{
        data,
        page,
        search,
        setPage,
        isLoading,
        setSearch,
        amountOfRegisters,
        totalCountOfRegisters,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
