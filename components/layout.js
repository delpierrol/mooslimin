import Head from 'next/head';
import styles from './layout.module.css';
import {
  Nav,
  Navbar,
  NavDropdown,
  Col,
  Row,
  // Container,
  Dropdown,
} from "react-bootstrap";
import React, { useState } from 'react';
import Footer from './footer/footer';
import { useRouter } from 'next/router';
import { AppBar, Box, Container, IconButton, InputBase, Menu, Toolbar, Button, MenuItem, Link } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';


const name = 'Errol Widhavian';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElMenu, setAnchorElMenu] = useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function handleClickMenu(event) {
    if (anchorElMenu !== event.currentTarget) {
      setAnchorElMenu(event.currentTarget);
    }
  }

  function handleCloseMenu() {
    setAnchorElMenu(null);
  }

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const styles = (theme) => ({
    popoverPaper: {
      width: '100%',
      height: '100%',
      maxHeight: 'unset',
      maxWidth: 'unset',
    },
  });


  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Mooslimin - Tempat Belanja Pria yang #LakiBanget"
        />
        <meta
          property="og:image"
          content="/images/logo.svg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="fixed-top">
        <div className="text-center bg-mooslimin-primary py-2">
          <div className="container txt-mooslimin-secondary">
            25% launching discount - For orders before 12PM - Diskon spesial  khusus launching (untuk pemesanan sebelum 12.00 WIB)
          </div>
        </div>
        <AppBar position="static" color="inherit" elevation={0}>
          <Container maxWidth="xl">
            <Toolbar>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
                <img src="/images/logo.svg" alt="Mooslimin" width="144" height="40" />
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <div>
                  <Link
                    aria-owns={anchorElMenu ? "simple-menu" : undefined}
                    aria-haspopup="true"
                    onClick={() => router.push("new-arrivals")}
                    onMouseOver={handleClickMenu}
                  >
                    Terbaru
                  </Link>
                  <Menu
                    // PopoverClasses={{ paper: props.classes.popoverPaper }}
                    id="simple-menu"
                    anchorEl={anchorElMenu}
                    open={Boolean(anchorElMenu)}
                    onClose={handleCloseMenu}
                    MenuListProps={{ onMouseLeave: handleCloseMenu }}
                    marginThreshold={0}
                    elevation={0}
                    slotProps={{
                      paper: {
                        sx: {
                          mt: '20px',
                          width: '100%',
                          maxWidth: 'unset',
                          left: '0px',
                          right: '0px',
                        },
                      }
                    }}
                  >
                    <Container>
                      <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                      <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                      <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
                    </Container>

                  </Menu>
                </div>

              </Box>

              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>


              {/* ICON USER */}
              <Box sx={{ flexGrow: 0 }}>
                <IconButton onClick={handleOpenUserMenu}>
                  <img alt="" src="/images/component/navigation/person.svg" />
                </IconButton>
                <Menu
                  sx={{
                    mt: '45px', filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.32))",
                  }}
                  id="menu-appbar"
                  elevation={0}
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}

                >
                  <Container>
                    <div>Akun Saya</div>

                  </Container>
                  {/* {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))} */}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <IconButton onClick={handleOpenUserMenu} >
                  <img alt="" src="/images/component/navigation/local_mall.svg" />
                </IconButton>
                <Menu
                  sx={{
                    mt: '45px', filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.32))",
                  }}
                  id="menu-appbar"
                  elevation={0}
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}

                >
                  <Container>
                    <div>Akun Saya</div>

                  </Container>
                  {/* {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))} */}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <label style={{ fontSize: "16px", alignItems: "center" }}>0</label>
              </Box>
            </Toolbar>

          </Container>

        </AppBar>



        {/* <Navbar bg="light" expand="md" className="navbar-mooslimin">
          <Container>
            <Navbar.Brand href="" className="pe-5">
              <img src="/images/logo.svg" alt="Mooslimin" width="144" height="40" />
            </Navbar.Brand>
            <Navbar.Collapse id="navbarCollapse">
              <Nav className="me-auto mb-2 mb-md-0">
                <Nav.Link href="new-arrivals">Terbaru</Nav.Link>
                <NavDropdown title="Stelan Pria"
                  id="basic1"
                  className="dropdown-megamenu"
                  show={show}
                  onClick={() => router.push('/outfit')}
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
                >
                  <Container className="eventsNav pt-0 mt-0">
                    <Row>
                      <Col xs="12" md="4" className="text-left">
                        <Dropdown.Header>Catering</Dropdown.Header>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>
                          Classes
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Divider className="d-md-none" />
                      </Col>
                      <Col xs="12" md="4" className="text-left">
                        <Dropdown.Header>Rentals</Dropdown.Header>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>
                          Seasonal
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                      </Col>
                      <Col xs="12" md="4" className="text-left">
                        <Dropdown.Header>
                          Rentals
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>
                          Seasonal
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                      </Col>
                    </Row>
                  </Container>
                </NavDropdown>
                <NavDropdown title="Brand"
                  id="basic1"
                  className="dropdown-megamenu"
                  show={showBrand}
                  onClick={() => router.push('/brands')}
                  onMouseEnter={() => setShowBrand(true)}
                  onMouseLeave={() => setShowBrand(false)}
                >
                  <Container className="eventsNav pt-0 mt-0">
                    <Row>
                      <Col xs="12" md="4" className="text-left">
                        <Dropdown.Header>Catering</Dropdown.Header>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />

                      </Col>
                    </Row>
                  </Container>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <div className={styles.componentinputField}>
              <img className="{styles.icon16}" alt="" src="/images/component/navigation/search.svg" />
              <input
                className={styles.searchInput}
                type="text"
                placeholder="Cari..."
                maxLength
                minLength
              />
            </div>
            <div className={styles.componentnavigationheaderMeChild + " mx-4"} />
            <div className={styles.rightIcon}>
              <div className={styles.div}>0</div>
              <CustomMenuLogin />
              <img
                className={styles.localMallIcon}
                alt=""
                src="/images/component/navigation/local_mall.svg"
              />
            </div>
          </Container>
        </Navbar> */}
      </header>
      <main>{children}</main>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )} */}
      <Footer />
    </div>
  );
}