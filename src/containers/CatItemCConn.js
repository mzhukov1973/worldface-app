import { connect }           from 'react-redux'
import { CAT_ITEM_SET_MODPREFIX, CAT_ITEM_INC_SIZE } from '../actions'
import CatItemC                  from '../components/CatItemC'

const mapStateToProps = ( state ) => {
  return { catItemData: state.catItemData };
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    setModPrefix:  (modPrefix) => {dispatch({type:CAT_ITEM_SET_MODPREFIX,data:modPrefix});},
    reactOnClick:  ()          => {dispatch({type:CAT_ITEM_INC_SIZE});}
  }
}

const CatItemCConn = connect(mapStateToProps,mapDispatchToProps)(CatItemC)

export default CatItemCConn
