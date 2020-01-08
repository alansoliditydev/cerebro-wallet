import styled from 'styled-components';

export const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06),
    0 1px 0 #e5e5ec, 0 0 2px rgba(0, 0, 0, 0.08);
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.blockBackground};
  border: 0;
  display: flex;
  align-content: center;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;

export const BlockstackLogo = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.8125rem;
  vertical-align: middle;
`;
