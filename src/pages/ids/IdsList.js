import LayoutDefault from "../../layouts/LayoutDefault";
import {idList} from '../../datas/ids';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ListGroup = styled.ul`
border-top: 1px solid #ccc;
`;
const ListItem = styled.li`
    border-bottom: 1px solid #ccc;
    padding: 10px;
`;
const Category = styled.div`
    font-weight: 800;
`;
const Subject = styled.div`
    padding-top: 5px;
`;



const IdsList = () => {
    const list = [...idList];

    const getListItem = (item) => {
        return (
            <ListItem key={item.id}>
                <Category><Link to="#">{item.category}</Link></Category>
                <Subject><Link to="">{item.subject}</Link></Subject>
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
export default IdsList;