import * as S from './styles';
import * as C from '@chakra-ui/react';

export function NewsDescription() {
  return (
    <S.Container as="section">
      <S.Wrapper>
        <S.ContentNewsHeader>
          <C.Text as="h1">
            ANQM homenageia seus ex-presidentes na festa de 30 anos da
            Associação
          </C.Text>

          <C.Text as="span">16 de outubro de 2019</C.Text>

          <C.Text as="h2">
            A noite de ontem (15) foi repleta de muita emoção no recinto de
            leilões do Parque Aristófanes Fernandes, em Parnamirim-RN. Um
            conjunto de atividades marcaram os 30 anos da Associação
            Norte-Riograndense de Criadores de Cavalo Quarto de Milha.
          </C.Text>
        </S.ContentNewsHeader>

        <S.ContentImage>
          <C.Image src="/images/png/img-news-destaque.png" />
        </S.ContentImage>

        <S.ContentDescription>
          <C.Text as="p">
            A noite de ontem (15) foi repleta de muita emoção no recinto de
            leilões do Parque Aristófanes Fernandes, em Parnamirim-RN. Um
            conjunto de atividades marcaram os 30 anos da Associação
            Norte-Riograndense de Criadores de Cavalo Quarto de Milha. O evento
            começou com a premiação dos campeões 2019 do Circuito Assovarn,
            grande parceira da ANQM na Vaquejada. Logo em seguida, foram
            premiados os melhores da Copa Potiguar de Três Tambores. Antes do
            início do leilão, a Associação prestou algumas homenagens.
            <br />
            <br />
            Foram 15 personalidades homenageadas diante de um grande público,
            sendo 11 ex-presidentes e quatro parceiros, os quais foram
            influentes para a história da ANQM. O primeiro presidente foi José
            de Paula Saldanha, que naquele momento, esteve representado por seus
            filhos Paulo e Guilherme Saldanha. Os demais foram sendo chamados
            seguindo a ordem cronológica de cada gestão.
            <br />
            <br />
            Em seguida, as homenagens continuaram. O leiloeiro rural Agnaldo
            Agostinho recebeu uma placa comemorativa aos 30 anos da ANQM
            representando todos os pregoeiros que já prestaram seus serviços ao
            Leilão da Associação quartista mais tradicional do norte-nordeste.
            &quot; Eu queria dizer que fiz este ano 25 anos de leilões, mas
            entrei, há cinco anos, por este tatersal para fazer meu começo na
            Vaquejada. Graças a Deus fui bem aceito&quot;, explanou Agnaldo, que
            naquele momento estava representando grandes nomes do martelo no
            Brasil como Anibal Ferreira, Guilherme Sanches, Nilson Genovesi e
            João Gabriel.
            <br />
            <br />
            O mesmo aconteceu com Rodrigo Loureiro que foi condecorado pela
            instituição por seus 16 anos de dedicação a ANQM. &quot;Eu sempre
            tive, aqui nesse grupo do Rio Grande do Norte, um apoio inconteste.
            Nunca foi jogada, em dúvida alguma, a capacidade nossa e o apoio que
            vocês me deram. Por isso, tenho certeza que essa placa aqui
            simboliza muito mais que um homenagem, mas sim a minha gratidão por
            vocês e a cada um de vocês.&quot;, destacou Loureiro ao relembrar
            momentos difíceis na sua carreira profissional.
            <br />
            <br />
            Outros dois homenageados também foram chamados para receber as suas
            placas. Eduardo Melo representou os sócios fundadores, em especial o
            criador Tião Diógenes e Clóvis Veloso (um dos primeiros criadores de
            cavalo Quarto de Milha do Rio Grande do Norte), falecidos
            recentemente. Em seguinda, foi a vez de Marcelo Passos, diretor da
            Associação Norte-riograndense de Criadores - ANORC, de ser
            congratulado.
          </C.Text>
        </S.ContentDescription>
      </S.Wrapper>
    </S.Container>
  );
}
