import { CATALOGUE_FETCH_DATA, CATALOGUE_ACT_TWO, CATALOGUE_SET_MODPREFIX } from '../actions'

const catalogueData = (state = {}, action) => {
  switch(action.type)
  {
    case CATALOGUE_SET_MODPREFIX:
     return Object.assign({},state,{modPrefix:action.data});

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
/*
     console.log('%c\n-----------------------------------\n'+'%ccatalogueData'+'%c reducer, '+'%cDEFAULT'+'%c action:','color:DarkCyan;','font-weight:bold;color:Cyan;','color:DarkCyan;','font-weight:bold;color:Cyan;','color:DarkCyan;');
     console.log('%cstate(catalogueData) is:','color:DarkCyan;');console.log(state);
     console.log('%cand the action was:','color:DarkCyan;');console.log(action);
     console.log('%c\n-----------------------------------\n','color:DarkCyan;');
*/
     return state;
  }
}

export default catalogueData
