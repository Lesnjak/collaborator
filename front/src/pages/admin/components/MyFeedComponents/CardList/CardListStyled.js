import styled from "styled-components";



const SearchResultWrapper = styled.div`
    padding: 60px 0;
    width: 100%;
& > div{
    margin: 0 -10px;
    >div{
    //width: calc(100% / 6 );
    }
}
    @media (max-width: 1530px) {
    padding: 0 0 30px;
    }
`;
export {SearchResultWrapper}
