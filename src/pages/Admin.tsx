import { Component, useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import Tabs from '@mui/material/Tabs';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Flex, StyledTab } from 'styles/common';

import NewRealtorForm from 'components/Admin/NewRealtorForm';
import NewListingForm from 'components/Admin/NewListingForm';

const IconTabs = () => {
  const [value, setValue] = useState(2);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
    {value === 1 ? <NewRealtorForm /> : <NewListingForm />}
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example" style={{display: "inline-block", alignSelf: "end"}}>
      <StyledTab icon={<ApartmentIcon />} aria-label="Listings" />
      <StyledTab icon={<PeopleAltIcon />} aria-label="Realtors" />
    </Tabs>
    </>
    
  );
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
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
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const NavBar = () => {

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Flex space='end'>
        <IconTabs />
          </Flex>
        </Toolbar>
      </AppBar>
      <Flex/>
      </>
  );
}

class Admin extends Component {
  render() {
    return <><NavBar /></>
  }
}

export default Admin
