import { connect }                                    from 'react-redux'
import { CAT_ITEM_SET_MODPREFIX, CAT_ITEM_FLIP_CARD } from '../actions'
import CatItemC                                       from '../components/CatItemC'

/*Version for the normalised state:*/
/*N.B.: In this case parent group - related parameters are passed as normal props by the parent group component.*/
//const mapStateToProps = ( state, ownProps ) => {
//  let theKey;
//  Object.keys(state.catItemDatas).forEach(function(key,index) {if (key === ownProps.itemModPrefixFromAbove) {theKey = key;}});
//  return { catItemData: state.catItemDatas[theKey] };
//}

const mapStateToProps = ( state, ownProps ) => {
  return { catItemDatas: state.catItemDatas };
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    setModPrefix: (modPrefix)                    => {dispatch({type:CAT_ITEM_SET_MODPREFIX,data:modPrefix});},
    flipCard:     (itemModPrefix,groupModPrefix) => {dispatch({type:CAT_ITEM_FLIP_CARD, 'itemModPrefix':itemModPrefix, 'groupModPrefix':groupModPrefix});}
   }
}

const CatItemCConn = connect(mapStateToProps,mapDispatchToProps)(CatItemC)

export default CatItemCConn
