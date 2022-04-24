import { InputAdornment, OutlinedInput } from "@mui/material"
import { Flex, IconBtn } from "../common"
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList';

const Search = () => {

    return (
        <Flex>
            <OutlinedInput
            id="outlined-adornment-password"
            type='search'
            endAdornment={
              <InputAdornment position="end">
                <IconBtn
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  <SearchIcon color="primary" />
                </IconBtn>
              </InputAdornment>
            }
            label="Password"
          />
            <IconBtn><FilterListIcon color="primary" /></IconBtn>
        </Flex>
    )
}

export default Search;