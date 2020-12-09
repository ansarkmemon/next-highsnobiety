import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiSearch } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { BsBag } from 'react-icons/bs';
import { TNavItem } from './index'
import Image from 'next/image'

type TProps = {
  navItems: Array<TNavItem>;
  showSearch: () => void;
}

const NavBar = ({ navItems, showSearch }: TProps): JSX.Element => {
  return (
    <Nav>
      <Logo>
        <Image src='/assets/img/logo.svg' alt='main logo' width={160} height={28} />
      </Logo>      
      <Menu>
        <MenuList>
          {navItems.map(item => (
            <a key={item.id} href={item.href}>
              <li>{item.title}</li>
            </a>
          ))}
        </MenuList>
      </Menu>
      <Misc>
        <IconContext.Provider value={{ size: '1.2em' }}>
          <MenuList>
            <a href="#">
              <li>Shop</li>
            </a>
            <li className='icon'><FiSearch onClick={showSearch} /></li>
            <li className='icon'><VscAccount /></li>
            <li className='icon'><BsBag /></li>
          </MenuList>
        </IconContext.Provider>
      </Misc>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 1200px;
`;

const Logo = styled.div`
  flex: 1;
`;

const Menu = styled.div``;

const MenuList = styled.ul`
  font-family: 'Univers-bold', sans-serif;
  list-style: none;
  display: flex;
  text-transform: uppercase;
  font-size: 15px;
  align-items: center;

  a {
    margin: 0 12px;
    position: relative;

    &:after{
      position: absolute;
      content: '';
      bottom: -2px;
      left: 0;
      border: 1px solid black;
      width: 0;
      opacity: 0;
      transition: width 0.3s ease-in-out;
    }

    &:hover::after {
      opacity: 1;
      width: 100%;
    }
  }

  > li {
    margin: 0 7px;
  }
  
  .icon {
    cursor: pointer;
  }
`;

const Misc = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export default NavBar