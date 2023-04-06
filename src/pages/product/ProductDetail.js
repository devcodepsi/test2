import { useParams } from "react-router-dom";
import { productList } from "../../datas/products";
import LayoutDefault from "../../layouts/LayoutDefault";
import styled from 'styled-components';

const Section = styled.section`
    padding: 20px;
`;
const Section1 = styled.section``;
const Section2 = styled.section`
    margin-top: 20px;
    border-top: 1px solid #ccc;
`;
const Wrap = styled.div``;
const Thumb = styled.div``;
const Info = styled.div``;
const TitleKo = styled.div`
    font-size: 20px;
    margin-top: 40px;
`;
const TitleEn = styled.div`
    font-size: 14px;
    margin-top: 10px;
`;
const Desc = styled.div`
    font-size: 14px;
    margin-top: 30px;
`;
const Tag = styled.div`
    font-size: 14px;
    margin-top: 10px;
    display: flex;
    gap: 8px;
`;
const TagItem = styled.span`
    border-radius: 100px;
    padding: 0 10px;
    font-size: 13px;
    height: 24px;
    line-height: 24px;
    border: 1px solid #ccc;
`;
const Summary = styled.div`
    font-size: 14px;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
`;
const SummaryDt = styled.dt`
    flex: 1 0 70px;
`;
const SummaryDd = styled.dd`
    flex: 1 0 calc(100% - 70px);
`;

const ProductDetail = () => {
    const params = useParams();
    const pageId = params.id;
    const pageData = [...productList].filter(filterItem => filterItem.id == pageId)[0];

    return (
        <LayoutDefault>
            <Section1>
                <Wrap>
                    <Thumb><img src={pageData.thumb} alt="" /></Thumb>
                    <Info>
                        <TitleKo>{pageData.nameKor}</TitleKo>
                        <TitleEn>{pageData.nameEng}</TitleEn>
                        <Desc>{pageData.desc}</Desc>
                        <Tag>
                            { [...pageData.tag].map( (item, index) => (
                                <TagItem key={index}>{item}</TagItem>
                            ) )}
                        </Tag>
                        <Summary>
                            <SummaryDt>용량</SummaryDt>
                            <SummaryDd>{pageData.size}</SummaryDd>
                            <SummaryDt>성분</SummaryDt>
                            <SummaryDd>{pageData.ingredient}</SummaryDd>
                        </Summary>
                    </Info>
                </Wrap>
            </Section1>
            <Section2>
                <Wrap>
                    { [...pageData.detail].map( (item, index) => (
                        <div key={index}><img src={item} alt="" /></div>
                    ) )}
                </Wrap>
            </Section2>
        </LayoutDefault>
    )
}
export default ProductDetail;