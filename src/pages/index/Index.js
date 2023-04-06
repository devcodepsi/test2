import { Link } from "react-router-dom";
import LayoutDefault from "../../layouts/LayoutDefault";

const Index = () => {
    return (
        <LayoutDefault>
            <Link to="/product">Product</Link>
            <Link to="/ids">Ids</Link>
        </LayoutDefault>
    )
}
export default Index;