import { DetailActionType } from './detail.type';

const   INITIIAL_STATE =  {
    keepIn: true,
    // keepOut: true
}

const detailReducer = (state = INITIIAL_STATE, action) => {
    switch(action.type) {
        case DetailActionType.TOGGLE_DETAIL_HIDDEN: 
            return {
                ...state, 
                keepIn: !state.keepIn,
                // keepOut: !state.keepOut
            }
        default: 
            return state;
    }
}

export default detailReducer;