import styled from "styled-components";
import CheckArrow from "../../../../../../assets/icons/CheckArrow.svg"


const SearchCheckBox= styled.a.attrs(({name})=>({name:name}))`
    display: flex;
    align-items: center;
    height: 32px;
    border: 1px solid #31384E;
    box-sizing: border-box;
    border-radius: 16px;
    padding: 4px;
    user-select:none;
    margin-right: 8px;
    cursor: pointer;
        @media (max-width: 1530px) {
        margin:10px;
}
`
const SearchCheckBoxCircle= styled.span`
   background-color: ${({color})=>color};
    width: 24px;
    height: 24px;
    display: block;
    border-radius: 50%;
    position: relative;
    &:before{
    display:${({isChecked})=>isChecked ? "block" : "none"};
    content: "";
    position: absolute;
    left: 0;
    background-image: url(${CheckArrow});
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
    right: 0;
    bottom: 0;
    top: 0;
    }
`
const SearchCheckBoxText = styled.span`
margin:0 8px;
font-size: 14px;

`
export {SearchCheckBox,SearchCheckBoxCircle,SearchCheckBoxText}
