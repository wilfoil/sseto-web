import { InputAdornment } from "@mui/material"
import { Flex, Input } from "../../styles/common"
import SearchIcon from '@mui/icons-material/Search'
import Filter from "./Filter";

const Search = (props: any) => {

    return (
        <Flex padding="1em 10px" sticky={true} top='0' zIndex="4" bg="#131629" {...props}>
            <Input
            id="search-input"
            type='text'
            endAdornment={<InputAdornment position="end"><SearchIcon htmlColor="#A5ABB3" fontSize="small" /></InputAdornment>}
            placeholder="Search"
          />
            <Filter />
        </Flex>
    )
}

export default Search;