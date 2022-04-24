import { CategoryItem, Flex, IconBtn } from "components/common";
import { productCategories } from "routes/paths";



const Categories = () => (<Flex flexChild='22%'>
{productCategories.map(product => <CategoryItem role='button' to={`lists/${product.name}`} key={product.name}>
<Flex columns>
    <IconBtn radius="50%"><product.icon color='primary' /></IconBtn>
    <h3>{product.name}</h3>
</Flex>
</CategoryItem>)}
</Flex>)

export default Categories;