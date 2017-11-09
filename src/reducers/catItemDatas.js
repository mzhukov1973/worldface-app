import { CAT_ITEM_FETCH_DATA, CAT_ITEM_ACT_TWO, CAT_ITEM_SET_MODPREFIX, CAT_ITEM_FLIP_CARD } from '../actions'

const catItemDatas = (state = {}, action) => {
  switch(action.type)
  {
    case CAT_ITEM_SET_MODPREFIX:
     return state;

    case CAT_ITEM_FLIP_CARD:
/*
     console.log('%c\n-----------------------------------\n'+'%ccatItemDatas'+'%c reducer, '+'%cCAT_ITEM_FLIP_CARD'+'%c action:','color:#00aa00;','font-weight:bold;color:#00ff00;','color:#00aa00;','font-weight:bold;color:#00ff00;','color:#00aa00;');
     console.log('%cstate(should be catItemDatas):','color:#00aa00;');console.log(state);
     console.log('%caction.itemModPrefix = '+action.itemModPrefix,'color:#00aa00;');
     console.log('%caction.groupModPrefix = '+action.groupModPrefix,'color:#00aa00;');
     console.log('%c\n-----------------------------------\n','color:#00aa00;');
*/
     let new_state = Object.assign({},state);
     new_state[action.itemModPrefix].cardFlipped = !(new_state[action.itemModPrefix].cardFlipped);
     return Object.assign({},new_state);

/*=======Below is a saga-bound action (3 in fact)====*/
    case CAT_ITEM_FETCH_DATA.REQ:
     return state;
    case CAT_ITEM_FETCH_DATA.OK:
     return state;
    case CAT_ITEM_FETCH_DATA.FAIL:
     return state;

/*=======Below is a saga-bound action (3 in fact)====*/
    case CAT_ITEM_ACT_TWO.REQ:
     return state;
    case CAT_ITEM_ACT_TWO.OK:
     return state;
    case CAT_ITEM_ACT_TWO.FAIL:
     return state;

    default:
/*
     console.log('%c\n-----------------------------------\n'+'%ccatItemDatas'+'%c reducer, '+'%cDEFAULT'+'%c action:','color:DarkCyan','font-weight:bold;color:Cyan;','color:DarkCyan','font-weight:bold;color:Cyan;','color:DarkCyan');
     console.log('%cstate(catItemDatas) is:','color:DarkCyan');console.log(state);
     console.log('%cand the action was:','color:DarkCyan');console.log(action);
     console.log('%c\n-----------------------------------\n','color:DarkCyan');
*/
     return state;
  }
}

export default catItemDatas
