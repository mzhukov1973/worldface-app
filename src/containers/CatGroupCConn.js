import { connect }           from 'react-redux'
import { CAT_GROUP_SET_MODPREFIX, CAT_GROUP_INC_SIZE } from '../actions'
import CatGroupC                  from '../components/CatGroupC'

const mapStateToProps = ( state ) => {
  return { catGroupData: state.catGroupData };
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    setModPrefix:  (modPrefix) => {dispatch({type:CAT_GROUP_SET_MODPREFIX,data:modPrefix});},
    reactOnClick:  ()          => {dispatch({type:CAT_GROUP_INC_SIZE});}
  }
}

const CatGroupCConn = connect(mapStateToProps,mapDispatchToProps)(CatGroupC)

export default CatGroupCConn
