import { Amount, Flex, Label, MuiButton } from "components/common"

const ListingCTA = () => {

    return (<Flex padding=".5em 10px" fixed bottom="0" className="secondary" space="start">
        <Flex padding="0" columns align="flex-start"><text>Price</text><Amount>$500,000 <span>/month</span></Amount></Flex>
        <MuiButton variant="contained">Rent</MuiButton>
    </Flex>)
}

export default ListingCTA;