import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink, Link, useLocation } from 'react-router-dom';
import DarkModeMenu from '../components/dark-mode/DarkModeMenu';
import { LocalTheme } from '../components/dark-mode/ThemeProvider';

export default function Menu() {
  let location = useLocation();
  return (
    <LocalTheme theme='auto'>
      <Navbar expand='lg' bg='body' className='mb-4'>
        <Container>
          <Navbar.Brand>
            <Link to='/' className='text-decoration-none'>
              <h4>
                <img
                  src='img/maisonneuve.svg'
                  style={{
                    backgroundColor: 'aliceblue',
                    paddingLeft: 6,
                    marginRight: 6,
                    borderRadius: 3,
                  }}
                />
                React Academy
              </h4>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav
              activeKey={location.pathname}
              variant='pills'
              className='ms-auto'
            >
              <DarkModeMenu />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </LocalTheme>
  );
}
