import { connect }                 from 'react-redux'
import NewsFeedEventC                   from '../components/NewsFeedEventC'

const mapStateToProps = ( state, ownProps ) => {
  return {newsFeedData: state.newsFeedData};
}

const NewsFeedEventCConn = connect(mapStateToProps)(NewsFeedEventC)

export default NewsFeedEventCConn
