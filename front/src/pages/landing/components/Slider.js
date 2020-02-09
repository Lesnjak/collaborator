import React from "react";
import styled from "styled-components";

const StyledSlider = styled.div`
  min-height: 360px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  max-width: 920px;
  padding-bottom: 40px;
  width: 100%;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
  position:relative;
  left: ${({ active }) => -active * 100}%;
  transition-duration: .5s;
`;
const Controlls = styled.div`
  position: absolute;
  display: flex;  
  justify-content: space-between;
  top: calc(100% - 15px);
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 1024px) {
        left: 71%;
    }
`;
const Button = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  border: 1px solid;
  background-color: ${({ idx, active }) => (idx === active ? "#5075D6" : "")};
  cursor:pointer;
  transition-duration: .5s;
  &:hover {
    background: blue;
  }
`;

class Slider extends React.Component {
    state = {
        active: 0
    };

    onClickHandler = idx => {
        this.setState({
            active: idx
        });
    };

    render() {
        const { children } = this.props;
        const { active } = this.state;
        return (
            <StyledSlider>
                <Wrapper active={active}>{children}</Wrapper>
                <Controlls>
                    {children.map((item, idx) => {
                        return (
                            <Button
                                idx={idx}
                                active={active}
                                key={idx}
                                onClick={() => this.onClickHandler(idx)}
                            />
                        );
                    })}
                </Controlls>
            </StyledSlider>
        );
    }
}

export default Slider;