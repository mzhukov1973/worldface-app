import { PROMOS_FETCH_DATA, PROMOS_ACT_TWO, PROMOS_SET_MODPREFIX, PROMOS_INC_SIZE } from '../actions'

const promosData = (state = {}, action) => {
  switch(action.type)
  {
    case PROMOS_SET_MODPREFIX:
     return Object.assign({},state,{modPrefix:action.data});

    case PROMOS_INC_SIZE:
     return Object.assign({},state,{width:(state.width+1),height:(state.height+1)});


/*=======Below is a saga-bound action (3 in fact)====*/
    case PROMOS_FETCH_DATA.REQ:
     return state;
    case PROMOS_FETCH_DATA.OK:
     return state;
    case PROMOS_FETCH_DATA.FAIL:
     return state;

/*=======Below is a saga-bound action (3 in fact)====*/
    case PROMOS_ACT_TWO.REQ:
     return state;
    case PROMOS_ACT_TWO.OK:
     return state;
    case PROMOS_ACT_TWO.FAIL:
     return state;

    default:
     return state;
  }
}

export default promosData
