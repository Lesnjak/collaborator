import React from 'react';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';


import arrow from '../../../assets/icons/shevron.svg';


const Border = styled.div`
    width: 100%;
    height: ${props => props.isOpen ? '' : '48px'};
    background: #FFFFFF;
    border: 1px solid #999FAE;
    box-sizing: border-box;
    border-radius: 4px;
    margin-bottom: 14px;
    overflow: hidden;

    &:hover{
        border: 1px solid #7283B6;
    }
`
const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 22px;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    border-bottom: 1px solid #999FAE;
`
const Icon = styled.img`
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition-duration: 0.5s;
`
const ListContainer = styled.div`
    padding: 16px 22px;
`
const ListItem = styled.div`
    display: flex;
    align-items: flex-start;
`
const Label = styled.label`
    font-size: 14px;
    line-height: 26px;
    margin-bottom: 30px;
`
const BlueCheckbox = withStyles({
    root: {
        color: '#2434A1',
        padding: 0,
        marginRight: '10px'
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);

class List extends React.Component {
    state = { isOpen: false }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const { isOpen } = this.state;
        const { title, listItems = ['item1', 'item2'] } = this.props;
        return (
            <Border isOpen={isOpen}>
                <ListHeader>
                    <span>{title}</span>
                    <Icon isOpen={isOpen} src={arrow} onClick={this.toggleOpen} />
                </ListHeader>
                <ListContainer>
                    {listItems.map((item, idx) => {
                        return (
                            <ListItem key={idx}>
                                <BlueCheckbox
                                    // checked={state.checkedG}
                                    // onChange={handleChange('checkedG')}
                                    value="checkedG"
                                />
                                <Label htmlFor={`${title}_item${idx}`}>{item}</Label>
                            </ListItem>
                        )
                    })}
                </ListContainer>
            </Border>
        );
    }
}

export default List;