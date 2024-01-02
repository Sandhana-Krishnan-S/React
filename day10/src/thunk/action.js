export const incrementAsync = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({type : 'INCREMENT'});
        }, 10000);
    }
}