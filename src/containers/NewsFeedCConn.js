import { connect }                 from 'react-redux'
import NewsFeedC                   from '../components/NewsFeedC'

const mapStateToProps = ( state, ownProps ) => {
  return {newsFeedData: state.newsFeedData};
}

const NewsFeedCConn = connect(mapStateToProps)(NewsFeedC)

export default NewsFeedCConn
