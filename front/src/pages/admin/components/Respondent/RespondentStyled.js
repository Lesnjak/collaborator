import styled from "styled-components";

const RespondentWrapper = styled.label`
   display: flex;
   align-items: center;
   padding: 10px 20px;
   cursor: pointer;
   transition: 0.3s;
   position: relative;
   background-color: ${({active})=>active ? "#eee" : "transparent"};
   &:hover{
    background-color: #eee;
   }
   &:before{
     content: '';
     position: absolute;
     width: 5px;
     top: 0;
     right:0;
     bottom:0;
     background-color:${({active})=>active ? "#E86553" : "transparent"};
   }
   @media (max-width: 993px) {
      padding: 10px 10px;
    }
`;
const RespondentNameWrapper = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 5px;
   position: relative;
`;
const RespondentTextWrapper = styled.div`
   margin-left: 10px;
   overflow: hidden;
`;
const RespondentAvatarWrapper = styled.div`
   flex-shrink: 0;
`;

const RespondentName = styled.span`
    font-weight: 500;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 50px;
`;
const RespondentText = styled.p`
   font-size: 13px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;

`;
const RespondentTime = styled.span`
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   position: absolute;
   right: 0;
   color: #999FAE;
   font-weight: 500;
   font-size: 12px;

`;

export {RespondentWrapper,RespondentTextWrapper, RespondentNameWrapper,RespondentAvatarWrapper,RespondentName,RespondentText,RespondentTime}
