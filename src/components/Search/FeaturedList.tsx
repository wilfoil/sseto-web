import { Flex, Heading, Link } from "components/common";
import ItemCard from "components/ItemCard";
import { useNavigate } from "react-router-dom";

interface IProps {features: Array<{[key: string]: any}>}

const FeaturedList = ({features}: IProps) => {
    const navigate = useNavigate()
    return (<>
    <Flex padding="1em 10px"><Heading>Popular</Heading> <Link to='/lists/popular' color="#2972FE">See all</Link></Flex>
    <Flex><ItemCard onClick={()=>navigate('/listing/test')} /><ItemCard onClick={()=>navigate('/listing/test')} /></Flex>
    <Flex padding="1em 10px"><Heading>Nearby your location</Heading> <Link to='/lists/near' color="#2972FE">See all</Link></Flex>
    <Flex><ItemCard onClick={()=>navigate('/listing/test')} /><ItemCard onClick={()=>navigate('/listing/test')} /></Flex>
</>)
}



export default FeaturedList;