export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        // const serializedUser = localStorage.getItem('user');

        // console.log("USER = ", serializedUser);

        // if (serializedUser === null) {
        if (serializedState === null) {
        // if (serializedState === null || serializedUser === null) {
            return undefined;
        }

        // return JSON.parse(serializedUser);
        return JSON.parse(serializedState);
        // return {state: JSON.parse(serializedState), user: JSON.parse(serializedUser)};
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        // localStorage.setItem('user', serializedState);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};