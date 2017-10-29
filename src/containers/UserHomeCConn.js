import { connect }           from 'react-redux'
import { USER_HOME_SET_MODPREFIX, USER_HOME_INC_SIZE } from '../actions'
import UserHomeC                  from '../components/UserHomeC'

const mapStateToProps = ( state ) => {
  return { userHomeData: state.userHomeData };
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    setModPrefix:  (modPrefix) => {dispatch({type:USER_HOME_SET_MODPREFIX,data:modPrefix});},
    reactOnClick:  ()          => {dispatch({type:USER_HOME_INC_SIZE});}
  }
}

const UserHomeCConn = connect(mapStateToProps,mapDispatchToProps)(UserHomeC)

export default UserHomeCConn
