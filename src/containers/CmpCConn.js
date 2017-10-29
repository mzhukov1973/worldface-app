import { connect }           from 'react-redux'
import { CMP_SET_MODPREFIX, CMP_INC_SIZE } from '../actions'
import CmpC                  from '../components/CmpC'

const mapStateToProps = ( state ) => {
  return { cmpData: state.cmpData };
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    setModPrefix:  (modPrefix) => {dispatch({type:CMP_SET_MODPREFIX,data:modPrefix});},
    reactOnClick:  ()          => {dispatch({type:CMP_INC_SIZE});}
  }
}

const CmpCConn = connect(mapStateToProps,mapDispatchToProps)(CmpC)

export default CmpCConn
