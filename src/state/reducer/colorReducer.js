const initalColorState = 1;
const colorReducer = (state = initalColorState, action)=>{

    switch(action.type){
        case 'increaseShade' : 
         if(state < 10)
         {
            return state + action.payload;
         }
         else{
             return state;
         }
         
         
         break;
         case 'decreaseShade' :
            if(state > 1)
            {
               return state - action.payload;
            }
            else{
                return state;
            }
            break;
            default : return state;
    }


}

export default colorReducer;