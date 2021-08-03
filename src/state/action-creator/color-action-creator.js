export const IncreaseShade =(colorCount)=>{
     return  (dispatch) =>{
         dispatch({
             type : 'increaseShade',
             payload : 1
         })
        };
}

export const decreaseShade = (colorCount) =>{
    return (dispatch) =>{
        dispatch({
            type  : 'decreaseShade',
            payload : 1
        });
    }
}