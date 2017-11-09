import { connect }                 from 'react-redux'
import { CAT_GROUP_SET_MODPREFIX } from '../actions'
import CatGroupC                   from '../components/CatGroupC'

/*Version for the normalised state:*/
//const mapStateToProps = ( state, ownProps ) => {
//  let theKey;
//  Object.keys(state.catGroupDatas).forEach(function(key,index) { if (key === ownProps.groupModPrefixFromAbove) {theKey = key;} });
//  return {catGroupData: state.catGroupDatas[theKey]};
//}

const mapStateToProps = ( state, ownProps ) => {
  return {catGroupDatas: state.catGroupDatas};
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    setModPrefix:  (modPrefix) => {dispatch({type:CAT_GROUP_SET_MODPREFIX,data:modPrefix});}
  }
}

const CatGroupCConn = connect(mapStateToProps,mapDispatchToProps)(CatGroupC)

export default CatGroupCConn
