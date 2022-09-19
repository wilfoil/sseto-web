import { Flex, Header, Label, MuiButton, PageContent, StyledImage } from "styles/common"
import styled from '@emotion/styled'
import { ButtonBase } from "@mui/material"
import ActionDialog from "components/Admin/ActionDialog"
import BackIcon from '@mui/icons-material/ArrowBack'

const Container = styled(Flex)`
    background-image: url(/assets/images/apart_2.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 30%;
    align-items: end;
    padding-top: 1em;
`
const PreviewContainer = styled.div`
    position: relative;
    width: 120px;
    height: 80px;

    img {
        border-radius: 5px;
        width: 80px;
        height: 80px;
        position: absolute;
        box-shadow: -10px 0px 20px -7px rgb(0 0 0 / 75%);

        &:nth-child(2) {margin-left: 20px;}
        &:nth-child(3) {margin-left: 40px;}
    }
    button {
        position: absolute;
        z-index: 4;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgb(0 0 0 / 55%);
        border-radius: 5px;
    }
`

const previewImages = ['/assets/images/apart_2.jpeg', '/assets/images/apart_3.jpeg', '/assets/images/apart_1.jpeg']

export const Preview = ({ images }: { images: string[] }) => {

    const renderToggle = (onOpen: () => void) => (
        <PreviewContainer>
            {previewImages.map(image => <img key={image} src={image} alt="" />)}
            <ButtonBase onClick={onOpen}>View all</ButtonBase>
        </PreviewContainer>
    )

    const renderContent = ({ onOpen }: {onOpen: () => void}) => (
        <>
        <Header bg='#131629' padding='.5em 10px'>
            <Label size="80%">
                <BackIcon color="primary" fontSize="large" onClick={onOpen} />
                &nbsp;&nbsp;&nbsp;&nbsp;<h1>Gallery</h1>
            </Label>
        </Header>
        <PageContent>
            <Flex padding='0' columns={true}>
                {previewImages.map((item) => (
                    <StyledImage key={item} width="90%" height="200" margin="0 0 1em 0" src={item} />
                ))}
            </Flex>
        </PageContent>
        <Flex padding=".5em 10px" fixed={true} bottom="0" className="secondary" space="start">
        <MuiButton variant="outlined" onClick={onOpen}><BackIcon color="primary" />&nbsp;&nbsp;&nbsp;&nbsp;Back</MuiButton>
    </Flex>
        </>
    )

    return (<ActionDialog fullScreen={true} padding="0" dark={true} renderToggle={renderToggle}>{renderContent}</ActionDialog>)
}

const Gallery = ({ images }: { images: string[] }) => {
    return (<Container space="end"><Preview images={images} /></Container>)
}

export default Gallery
