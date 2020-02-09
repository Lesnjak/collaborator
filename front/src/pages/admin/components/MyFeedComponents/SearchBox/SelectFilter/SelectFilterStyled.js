import styled from "styled-components";

const SelectFilterWrapper = styled.div`
.react-selectize{
   width: 100% ;
}
.react-selectize-control{
    height: 36px;
    border-radius: 4px;
    color: #31384e;
    background-color: #fff!important;
    border: 1px solid #999FAE!important;
    background-image:none!important;
}
  .react-selectize.simple-select {
  &::-webkit-scrollbar {
    width: 5px!important;
  }
  &::-webkit-scrollbar-track {
    background: #fff!important;
  }
  &::-webkit-scrollbar-thumb {
    background: #5075D6!important;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--body-primary-color);
  }
  }
`


export {SelectFilterWrapper}
