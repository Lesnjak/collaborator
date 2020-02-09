import React from "react";
import styled from "styled-components";
import done_icon from '../../../assets/icons/done.svg';
import current_icon from '../../../assets/icons/current.svg';
import disabled_icon from '../../../assets/icons/disabled.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 320px;
  /* margin: auto; */
  margin-bottom: 65px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 50%;
    height: 1px;
    background: ${props => props.current > 1 ? '#2434A1' : '#999FAE'};
    z-index: 0;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 50%;
    height: 1px;
    background: ${props => props.current < 3 ? '#999FAE' : '#2434A1'};
    z-index: 0;
    right:0;
  }
`;
const Label = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`
const StepText = styled.span`
  color: ${props => props.isDisabled ? '#999FAE' : '#2434A1'} ;
  position: absolute;
  top: calc(100% + 14px);
  white-space: nowrap;
`
const ProgressBar = ({
  steps,
  current
}) => {
  return (
    <Wrapper current={current}>
      {Array(steps)
        .fill(null)
        .map((el, idx) => {
          return (
            <Label key={idx}>
              <img src={(current > idx + 1) ? (done_icon) : (current === idx + 1 ? (current_icon) : (disabled_icon))} alt="icon" />
              <StepText isDisabled={(idx + 1) > current}>Step {idx + 1}</StepText>
            </Label>
          )

        })}
    </Wrapper>
  );
};

export default ProgressBar;
