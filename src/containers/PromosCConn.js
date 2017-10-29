import { connect }           from 'react-redux'
import { PROMOS_SET_MODPREFIX, PROMOS_INC_SIZE } from '../actions'
import PromosC                  from '../components/PromosC'

const mapStateToProps = ( state ) => {
  return { promosData: state.promosData };
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    setModPrefix:  (modPrefix) => {dispatch({type:PROMOS_SET_MODPREFIX,data:modPrefix});},
    reactOnClick:  ()          => {dispatch({type:PROMOS_INC_SIZE});}
  }
}

const PromosCConn = connect(mapStateToProps,mapDispatchToProps)(PromosC)

export default PromosCConn
