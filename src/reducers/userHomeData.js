import { USER_HOME_FETCH_DATA, USER_HOME_ACT_TWO, USER_HOME_SET_MODPREFIX, USER_HOME_INC_SIZE } from '../actions'

const userHomeData = (state = {}, action) => {
  switch(action.type)
  {
    case USER_HOME_SET_MODPREFIX:
     return Object.assign({},state,{modPrefix:action.data});

    case USER_HOME_INC_SIZE:
     return Object.assign({},state,{width:(state.width+1),height:(state.height+1)});


/*=======Below is a saga-bound action (3 in fact)====*/
    case USER_HOME_FETCH_DATA.REQ:
     return state;
    case USER_HOME_FETCH_DATA.OK:
     return state;
    case USER_HOME_FETCH_DATA.FAIL:
     return state;

/*=======Below is a saga-bound action (3 in fact)====*/
    case USER_HOME_ACT_TWO.REQ:
     return state;
    case USER_HOME_ACT_TWO.OK:
     return state;
    case USER_HOME_ACT_TWO.FAIL:
     return state;

    default:
/*
     console.log('%c\n-----------------------------------\n'+'%cuserHomeData'+'%c reducer, '+'%cDEFAULT'+'%c action:','color:DarkCyan;','font-weight:bold;color:Cyan;','color:DarkCyan;','font-weight:bold;color:Cyan;','color:DarkCyan;');
     console.log('%cstate(userHomeData) is:','color:DarkCyan;');console.log(state);
     console.log('%cand the action was:','color:DarkCyan;');console.log(action);
     console.log('%c\n-----------------------------------\n','color:DarkCyan;');
*/
     return state;
  }
}

export default userHomeData
