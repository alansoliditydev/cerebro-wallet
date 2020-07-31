import styled from 'styled-components';

import { Breakpoints } from '../../dictionaries';
import MainFooter from '../home/Footer/Footer';

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: main;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${Breakpoints.md}px) {
    flex-direction: row;
  }
`;

export const Footer = styled(MainFooter)`
  
`;
