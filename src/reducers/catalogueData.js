import { CATALOGUE_FETCH_DATA, CATALOGUE_ACT_TWO, CATALOGUE_SET_MODPREFIX, CATALOGUE_INC_SIZE } from '../actions'

const catalogueData = (state = {}, action) => {
  switch(action.type)
  {
    case CATALOGUE_SET_MODPREFIX:
     return Object.assign({},state,{modPrefix:action.data});

    case CATALOGUE_INC_SIZE:
     return Object.assign({},state,{width:(state.width+1),height:(state.height+1)});


/*=======Below is a saga-bound action (3 in fact)====*/
    case CATALOGUE_FETCH_DATA.REQ:
     return state;
    case CATALOGUE_FETCH_DATA.OK:
     return state;
    case CATALOGUE_FETCH_DATA.FAIL:
     return state;

/*=======Below is a saga-bound action (3 in fact)====*/
    case CATALOGUE_ACT_TWO.REQ:
     return state;
    case CATALOGUE_ACT_TWO.OK:
     return state;
    case CATALOGUE_ACT_TWO.FAIL:
     return state;

    default:
     return state;
  }
}

export default catalogueData
