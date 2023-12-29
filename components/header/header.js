'use client'
import { useState } from 'react';
import Image from 'next/image'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AppBar, Box, IconButton, InputBase, Menu, Toolbar, Button, MenuItem, Link } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
    const [anchorElUser, setAnchorElUser] = useState(null);

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

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        // width: '100%',
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

    return (
        <header className="fixed-top">
            <div className="text-center bg-mooslimin-primary py-2 d-none">
                <div className="container txt-mooslimin-secondary">
                    25% launching discount - For orders before 12PM - Diskon spesial  khusus launching (untuk pemesanan sebelum 12.00 WIB)
                </div>
            </div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container className='justify-content-start'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand href='/' className='ms-3'>
                        <Image
                            src="/images/logo.svg"
                            width={150}
                            height={44}
                            alt="Mooslimin - Sahabat Kaum Pria"
                            priority
                        />
                    </Navbar.Brand>
                    <Navbar.Offcanvas
                        id='offcanvasNavbar-expand-lg'
                        aria-labelledby='offcanvasNavbarLabel-expand-lg'
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id='offcanvasNavbarLabel-expand-lg'>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown-expand-lg">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            className='d-none d-md-block'
                        />
                    </Search>
                    <Box sx={{ flexGrow: 0 }} className='d-none d-md-block'>
                        <IconButton onClick={handleOpenUserMenu}>
                            <Image alt="" src="/images/component/navigation/person.svg" width={25} height={25} />
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
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 0 }} className='d-none d-md-block'>
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
                    <Box sx={{ flexGrow: 0 }} className='d-none d-md-block'>
                        <label style={{ fontSize: "16px", alignItems: "center" }}>0</label>
                    </Box>
                </Container>
            </Navbar>
        </header>
    )
}