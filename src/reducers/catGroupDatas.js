import { CAT_GROUP_FETCH_DATA, CAT_GROUP_ACT_TWO, CAT_GROUP_SET_MODPREFIX } from '../actions'

const catGroupDatas = (state = {}, action) => {
  switch(action.type)
  {
    case CAT_GROUP_SET_MODPREFIX:
     return state;

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
/*
     console.log('%c\n-----------------------------------\n'+'%ccatGroupDatas'+'%c reducer, '+'%cDEFAULT'+'%c action:','color:DarkCyan;','font-weight:bold;color:Cyan;','color:DarkCyan;','font-weight:bold;color:Cyan;','color:DarkCyan;');
     console.log('%cstate(catGroupDatas) is:','color:DarkCyan;');console.log(state);
     console.log('%cand the action was:','color:DarkCyan;');console.log(action);
     console.log('%c\n-----------------------------------\n','color:DarkCyan;');
*/
     return state;
  }
}

export default catGroupDatas
