import { connect }           from 'react-redux'
import { CATALOGUE_SET_MODPREFIX, CATALOGUE_INC_SIZE } from '../actions'
import CatalogueC                  from '../components/CatalogueC'

const mapStateToProps = ( state ) => {
  return { catalogueData: state.catalogueData };
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    setModPrefix:  (modPrefix) => {dispatch({type:CATALOGUE_SET_MODPREFIX,data:modPrefix});},
    reactOnClick:  ()          => {dispatch({type:CATALOGUE_INC_SIZE});}
  }
}

const CatalogueCConn = connect(mapStateToProps,mapDispatchToProps)(CatalogueC)

export default CatalogueCConn
