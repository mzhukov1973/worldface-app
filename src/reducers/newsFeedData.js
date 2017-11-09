import { NEWS_FEED_FETCH_DATA, UI_NEWS_FEED_PULL, UI_NEWS_FEED_CLICK_ITEM } from '../actions'

const newsFeedData = (state = {}, action) => {
  switch(action.type)
  {

    case UI_NEWS_FEED_PULL:
     return state;

    case UI_NEWS_FEED_CLICK_ITEM:
     return state;

/*=======Below is a saga-bound action (3 in fact)====*/
    case NEWS_FEED_FETCH_DATA.REQ:
     return state;
    case NEWS_FEED_FETCH_DATA.OK:
     return state;
    case NEWS_FEED_FETCH_DATA.FAIL:
     return state;

    default:
/*
     console.log('%c\n-----------------------------------\n'+'%cnewsFeedData'+'%c reducer, '+'%cDEFAULT'+'%c action:','color:DarkCyan;','font-weight:bold;color:Cyan;','color:DarkCyan;','font-weight:bold;color:Cyan;','color:DarkCyan;');
     console.log('%cstate(newsFeedData) is:','color:DarkCyan;');console.log(state);
     console.log('%cand the action was:','color:DarkCyan;');console.log(action);
     console.log('%c\n-----------------------------------\n','color:DarkCyan;');
*/
     return state;
  }
}

export default newsFeedData
