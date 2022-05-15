//action
const BUY_CAKE = "BUY_CAKE"

function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'FIrst Redux action'
    }
}


//Reducers
//(previousState,action)=>{newState}

const initialState = {
    numOfCake: 10
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCake:state.numOfCake-1
        }
    default:return state
    }
}