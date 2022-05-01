import { InputAdornment } from "@mui/material"
import { Flex, IconBtn, Input } from "../common"
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList';

const Search = () => {

    return (
        <Flex padding="1em 10px" sticky top='0' zIndex="4" bg="#131629">
            <Input
            id="search-input"
            type='text'
            endAdornment={<InputAdornment position="end"><SearchIcon htmlColor="#A5ABB3" fontSize="small" /></InputAdornment>}
            placeholder="Search"
          />
            <IconBtn><FilterListIcon color="primary" fontSize="small" /></IconBtn>
        </Flex>
    )
}

export default Search;