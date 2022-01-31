import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 5px 80px;
  background: #fff;
  height: 100px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  @media screen and (max-width: 1000px) {
    padding: 5px 40px;
  }
`;

export const NavLink = styled(Link)`
  color: #000;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 400;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;
  @media screen and (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 28px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
