import { Avatar } from "@mui/material"
import { Flex, IconBtn, Label } from "../styles/common"
import ChatIcon from '@mui/icons-material/Chat';
import PhoneIcon from '@mui/icons-material/Phone';

const ListingHandler = () => {

    return <Flex padding="1em 0">
        <Avatar sx={{ width: 56, height: 56 }}>HL</Avatar>
        <Flex columns align='flex-start'><Label>Herman Lule</Label><Label padding="8px 10px 0" size="90%">Realtor</Label></Flex>
        <IconBtn radius="50%" padding=".6em" margin="0 10px 0 0"><ChatIcon color="primary" fontSize="large" /></IconBtn>
        <IconBtn radius="50%" padding=".6em"><PhoneIcon  color="primary" fontSize="large" /></IconBtn>
    </Flex>
}

export default ListingHandler;