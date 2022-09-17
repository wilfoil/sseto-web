import { Flex } from "styles/common"
import styled from '@emotion/styled'

const Container = styled(Flex)`
    background-image: url(/assets/images/apart_2.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 30%;
    align-items: start;
    padding-top: 1em;
`

const Gallery = () => {
    return (<Container />)
}

export default Gallery
