import { CategoryItem, Flex, IconBtn } from "styles/common";
import { productCategories } from "routes/paths";

interface IProps { onItemClick?: (name: string) => (e: any) => void, selected?: string[] }

const Categories = ({ onItemClick, selected }: IProps) => (<Flex flexChild='30%' padding="1em 10px">
    {productCategories.map(({ name, ...product }) =>
        <CategoryItem className={selected?.includes(name) ? 'primary-gradient' : ''} role='button' to={`lists/${name}`} onClick={onItemClick?.(name)} key={name}>
            <Flex columns={true}>
                <IconBtn bg={selected?.includes(name) ? '#FFF' : ''} radius="50%"><product.icon color='primary' /></IconBtn>
                <h3>{name}</h3>
            </Flex>
        </CategoryItem>)}
</Flex>)

export default Categories;