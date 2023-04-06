import LayoutDefault from "../../layouts/LayoutDefault";
import {productList} from '../../datas/products';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ListGroup = styled.ul`
    padding-inline: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 6px;
    row-gap: 20px;
`;
const ListItem = styled.li`

`;
const Thumb  = styled.div`
    
`;
const Img  = styled.img`
    height: 100%;
`;
const Subject  = styled.div`
    font-size: 18px;
    font-weight: 800;
`;
const Desc  = styled.div`
    font-size: 14px;
    font-weight: 500;
`;

const ProductList = () => {
    const list = [...productList];

    const getListItem = (item) => {
        return (
            <ListItem key={item.id}>
                <Link to={`/product/${item.id}`}>
                    <Thumb><Img src={item.thumb} alt=""/></Thumb>
                    <Subject>{item.nameKor}</Subject>
                    <Desc>{item.nameEng}</Desc>
                </Link>
            </ListItem>
        )
    }
    return (
        <LayoutDefault>
            <ListGroup>
                { list.map(item => getListItem(item)) }
            </ListGroup>
        </LayoutDefault>
    )
}
export default ProductList;