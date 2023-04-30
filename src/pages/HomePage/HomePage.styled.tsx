import styled from '@emotion/styled';
import { tablet } from '../../shared/constants/devicesSizes';
import { Link } from 'react-router-dom';

export const Tittle = styled.h1`
  margin-top: 100px;

  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  color: ${({ theme }) => theme.colText};

  @media screen and (min-width: ${tablet}) {
    font-size: 32px;
  }
`;

export const TweetsImg = styled.img`
  margin: 20px auto;
`;

export const StyledLink = styled(Link)`
  display: block;
  margin: 20px auto;
  padding: 14px 0;
  width: 197px;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.colText};
  background-color: ${({ theme }) => theme.accent};

  @media screen and (min-width: ${tablet}) {
    font-size: 18px;
  }
`;
