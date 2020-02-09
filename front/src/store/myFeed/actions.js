import * as actionTypes from './actionTypes';
import axios from 'axios';
import jessica from "../../assets/images/jessica-felicio.jpg";
import luis from "../../assets/images/luis.jpg";
import charles from "../../assets/images/charles.jpg";
import ayo from "../../assets/images/ayo.jpg";

const url = 'https://collabbed-api.codeondeck.com'


const mockCollabs = [
    {
        category: {
            label: 'giveaway'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Jessica Power',
        type: {
            label: 'I1 want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: jessica
    },
    {
        category: {
            label: 'collaboration'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Aleksandra Power',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown for other financial services companies who are interested.',
        avatar: ''
    },
    {
        category: {
            label: 'Member Offer'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Luis Power',
        type: {
            label: 'I2 want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar:luis
    },
    {
        category: {
            label: 'event'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Charles Power',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: charles
    },
    {
        category: {
            label: 'event'
        },
        map:true,
        businesName: 'Business Name, LTD',
        name: 'Aleksandra Power',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: ''
    },
    {
        category: {
            label: 'giveaway'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Peter Power',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: ayo
    },
    {
        category: {
            label: 'giveaway'
        },
        map:true,
        businesName: 'Business Name, LTD',
        name: 'Aleksandra Power',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: ''
    },
    {
        category: {
            label: 'giveaway'
        },
        map:true,
        businesName: 'Business Name, LTD',
        name: 'Aleksandra Power',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: ''
    },
    {
        category: {
            label: 'giveaway'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Aleksandra Power',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: ''
    },
    {
        category: {
            label: 'giveaway'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Aleksandra Power',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: ''
    },
    {
        category: {
            label: 'giveaway'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Aleksandra Power',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: ''
    },
    {
        category: {
            label: 'giveaway'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Aleksandra Power',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: ''
    },
    {
        category: {
            label: 'giveaway'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Aleksandra Power',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: ''
    },

    {
        category: {
            label: 'member offer'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Aleksandra Power',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: ''
    },
    {
        category: {
            label: 'collaboration'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Aleksandra Power',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown for other financial services companies who are interested.',
        avatar: ''
    },
    {
        category: {
            label: 'event'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Aleksandra Power',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for gffdgdfgdf other financial services companies who are interested.',
        avatar: ''
    },
    {
        category: {
            label: 'giveaway'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Aleksandra Power',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We fdfgdfdfgdfg dfgdfgdfgdfg dfgdfgdfgdfg dfgdfgdfgdfg dfgdfgdfg  are looking for other financial services companies who are interested.',
        avatar: ''
    },
    {
        category: {
            label: 'giveaway'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Annabella York',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are  looking for other financial services companies who are interested.',
        avatar: luis
    },
    {
        category: {
            label: 'giveaway'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'John Dou',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial dfgdgfdfgdfg dfgdfgdfg dfgdfgdfg services companies who are interested.',
        avatar: charles
    },
    {
        category: {
            label: 'giveaway'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Elicia Gale',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: jessica
    },
    {
        category: {
            label: 'giveaway'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Kaila Sherman',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
    },
    {
        category: {
            label: 'giveaway'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Elicia Gale',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: jessica
    },
    {
        category: {
            label: 'giveaway'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Kaila Sherman',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
    },
    {
        category: {
            label: 'giveaway'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Elicia Gale',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: jessica
    },
    {
        category: {
            label: 'giveaway'
        },
        map:false,
        businesName: 'Business Name, LTD',
        name: 'Kaila Sherman',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
    },

]

export const searchFeeds = (params={}) => {
    // const config = {
    //     headers: {
    //         'Authorization': localStorage.getItem("token")
    //     },
    //     params
    // }
    return dispatch => {
        const mock = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(mockCollabs)
            },1000)
        })
        mock.then((data)=>{
            dispatch(searchAllFeeds(data))
        }).catch(()=>{
            
        })

        // axios
        //     .get(`${url}/admin/search/feed`, config)
        //     .then(res => {
        //         const {
        //             data
        //         } = res.data;
        //         // dispatch(searchCollaborationsSuccess(data));
        //         console.log(res)
        //     })
        //     .catch(res => {
        //         console.log({ res })
        //     })
    }
}
export const searchAllFeeds = (data) => ({
    type: actionTypes.FETCH_GET_ALL_CARDS,
    payload: data
});
