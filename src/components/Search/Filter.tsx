import BackIcon from '@mui/icons-material/ArrowBack'
import FilterListIcon from '@mui/icons-material/FilterList';

import ActionDialog from "components/Admin/ActionDialog";
import { Header, IconBtn, Label, PageContent } from "styles/common";

const Filter = () => {

    const renderToggle = (onOpen: () => void) => (<IconBtn onClick={onOpen}><FilterListIcon color="primary" fontSize="small" /></IconBtn>)

    const renderContent = ({ onOpen }: {onOpen: () => void}) => (
        <>
        <Header bg='#131629' padding='.5em 10px'>
            <Label size="80%">
                <BackIcon color="primary" fontSize="large" onClick={onOpen} />
                &nbsp;&nbsp;&nbsp;&nbsp;<h1>Filter</h1>
            </Label>
        </Header>
        <PageContent>
            {/* <Flex padding='0' columns={true}>
                {previewImages.map((item) => (
                    <StyledImage key={item} width="90%" height="200" margin="0 0 1em 0" src={item} />
                ))}
            </Flex> */}
        </PageContent>
        {/* <Flex padding=".5em 10px" fixed={true} bottom="0" className="secondary" space="start">
        <MuiButton variant="outlined" onClick={onOpen}><BackIcon color="primary" />&nbsp;&nbsp;&nbsp;&nbsp;Back</MuiButton>
    </Flex> */}
        </>
    )

    return (<ActionDialog fullScreen={true} padding="0" dark={true} renderToggle={renderToggle}>{renderContent}</ActionDialog>)
}

export default Filter;