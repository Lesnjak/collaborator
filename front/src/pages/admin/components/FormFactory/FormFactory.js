import React, {lazy, Suspense} from 'react';


const ReactLazyPreload = importStatement => {
    const Component = lazy(importStatement);
    Component.preload = importStatement;
    return Component;
};
const strategies = {
    postCollaboration: ReactLazyPreload(() => import("./PostCollaboration")),
    postMember: ReactLazyPreload(() => import("./PostMember")),
    postEvent: ReactLazyPreload(() => import("./PostEvent")),
    postGiveawey: ReactLazyPreload(() => import("./PostGiveaway")),
}

const FormFactory = ({type, ...props}) => {
    if(type && !strategies[type]){
        throw new Error(`Type only are [ ${Object.keys(strategies)} ]`)
    }
    const Form = strategies[type];
    return <Suspense fallback={null}>
        {type && <Form {...props} />}
    </Suspense>
};

export default FormFactory;
