import { CMP_FETCH_DATA, CMP_ACT_TWO, CMP_SET_MODPREFIX, CMP_INC_SIZE } from '../actions'

const cmpData = (state = {}, action) => {
  switch(action.type)
  {
    case CMP_SET_MODPREFIX:
     return Object.assign({},state,{modPrefix:action.data});

    case CMP_INC_SIZE:
     return Object.assign({},state,{width:(state.width+1),height:(state.height+1)});


/*=======Below is a saga-bound action (3 in fact)====*/
    case CMP_FETCH_DATA.REQ:
     return state;
    case CMP_FETCH_DATA.OK:
     return state;
    case CMP_FETCH_DATA.FAIL:
     return state;

/*=======Below is a saga-bound action (3 in fact)====*/
    case CMP_ACT_TWO.REQ:
     return state;
    case CMP_ACT_TWO.OK:
     return state;
    case CMP_ACT_TWO.FAIL:
     return state;

    default:
     return state;
  }
}

export default cmpData
