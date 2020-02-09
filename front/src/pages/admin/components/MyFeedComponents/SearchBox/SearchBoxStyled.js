import styled from "styled-components";


const SearchWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

`
const SearchCheckWrapper = styled.div`
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    pointer-events: ${({feedList})=>feedList.length > 0 ? "auto" : "none" };
    opacity: ${({feedList})=>feedList.length > 0 ? 1 : 0.5 } ;
    filter: ${({feedList})=>feedList.length > 0 ? "grayscale(0)" : "grayscale(100%)" };

`
const SearchSelectWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    pointer-events: ${({feedList})=>feedList.length > 0 ? "auto" : "none" };
    opacity: ${({feedList})=>feedList.length > 0 ? 1 : 0.5 } ;
    ${({feedList})=>feedList.length > 0 ? "" : "filter:grayscale(100%)" };
    &>div{
        width: 276px;
        margin: 15px;
        &:last-child{
        margin-right: 0;
        }
     }

`
export {SearchWrapper,SearchCheckWrapper,SearchSelectWrapper}
