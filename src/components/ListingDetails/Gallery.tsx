import { Flex, IconBtn } from "components/common"
import styled from '@emotion/styled'
import BackIcon from '@mui/icons-material/ArrowBack'
import Favorite from "components/Favorite"
import { useNavigate } from "react-router-dom"


const Container = styled(Flex)`
    background-image: url(/assets/images/apart_2.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 30%;
    align-items: start;
    padding-top: 1em;
`

const Gallery = () => {
    const navigate = useNavigate()
    const back = () => navigate(-1)
    return (<Container>
        <Flex padding="0"><BackIcon color="primary" fontSize="large" onClick={back} /> <IconBtn><Favorite onClick={()=>{}} saved={false} fontSize='large' /></IconBtn></Flex>
    </Container>)
}

export default Gallery
