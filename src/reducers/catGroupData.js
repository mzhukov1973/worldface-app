import { CAT_GROUP_FETCH_DATA, CAT_GROUP_ACT_TWO, CAT_GROUP_SET_MODPREFIX, CAT_GROUP_INC_SIZE } from '../actions'

const catGroupData = (state = {}, action) => {
  switch(action.type)
  {
    case CAT_GROUP_SET_MODPREFIX:
     return Object.assign({},state,{modPrefix:action.data});

    case CAT_GROUP_INC_SIZE:
     return Object.assign({},state,{width:(state.width+1),height:(state.height+1)});


/*=======Below is a saga-bound action (3 in fact)====*/
    case CAT_GROUP_FETCH_DATA.REQ:
     return state;
    case CAT_GROUP_FETCH_DATA.OK:
     return state;
    case CAT_GROUP_FETCH_DATA.FAIL:
     return state;

/*=======Below is a saga-bound action (3 in fact)====*/
    case CAT_GROUP_ACT_TWO.REQ:
     return state;
    case CAT_GROUP_ACT_TWO.OK:
     return state;
    case CAT_GROUP_ACT_TWO.FAIL:
     return state;

    default:
     return state;
  }
}

export default catGroupData
