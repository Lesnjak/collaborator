import styled from "styled-components";


const Wrapper = styled.div`

.gmnoprint{
 display: none;
 }
}
.gm-control-active{
    width: 30px !important;
    height: 30px !important;
    opacity: 0.3;
    transition: 0.3s;
}
 &:hover{
 .gm-control-active{
    opacity: 1;
}
`
const Link = styled.a`
    font-size: 13px;
    color: #2434A1;
    text-decoration: underline;
    margin-bottom: 15px;
    display: block;
`
const Location = styled.div`
    position: relative;
    padding-top: 100%;
    &>div{
         height: auto !important;
         position: absolute;
         top: 0;right: 0;left: 0;bottom: 0;
        }
`
 export {Location,Link,Wrapper}
