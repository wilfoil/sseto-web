import { Flex, Heading, Link } from "components/common";
import ItemCard from "components/ItemCard";

interface IProps {features: Array<{[key: string]: any}>}

const FeaturedList = ({features}: IProps) => (<>
    <Flex><Heading>Popular</Heading> <Link to='/lists/popular' color="#2972FE">See all</Link></Flex>
    <Flex><ItemCard /><ItemCard /></Flex>
</>)

export default FeaturedList;