import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

//PRE- REDUX THUNK CODE
// import{ updateCollections } from '../../redux/shop/shop.actions.js';

//REDUX THUNK CODE
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'; 
// import { createStructuredSelector } from 'reselect';
// import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'; <<REMOVED BY REFACTORING

// import CollectionsOverview from '../../components/collections-overview/collections-overview.component'; REMOVED BY REFACTORING CONATINER PATTERN
// import CollectionPage from '../collection/collection.component';
// import WithSpinner from '../../components/withSpinner/with-spinner.component'; REFACTORED

  //PRE- REDUX THUNK CODE
// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'; 

//Container Patter
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);  REMOVED BY REFACTORING COLLECTIONS OVERVIEW CONTAINER
// const CollectionsPageWithSpinner = WithSpinner(CollectionPage); REFACTORED


class ShopPage extends React.Component {
  
  //PRE- REDUX THUNK CODE
  // state = {
  //   loading: true
  // };

  //PRE- REDUX THUNK CODE
  // unsubscribeFromSnapshot = null;

  componentDidMount() {
      //PRE- REDUX THUNK CODE
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection('collections');
 
    // collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading : false });
    // });

    //REDUX THUNK CODE
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    //PRE- REDUX THUNK CODE
    // const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route exact 
          path={`${match.path}`} 
          // render={(props) => 
          //   <CollectionsOverviewWithSpinner 
          //     isLoading={isCollectionFetching} 
          //     {...props} 
          //   />} REMOVED BY REFACTORING WITH CONTAINER PATTER
          component={CollectionsOverviewContainer}
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          // render={(props) => 
          //   <CollectionsPageWithSpinner 
          //     isLoading={!isCollectionsLoaded} 
          //     {...props} 
          //   />} REFACTORED
          component={CollectionPageContainer}
        />
      </div>
    );
  }
  
};

//REDUX THUNK CODE
// const mapStateToProps = createStructuredSelector({
//   isCollectionsLoaded: selectIsCollectionsLoaded
// }) <<< REMOVED BY REFACTORING

const mapDispatchToProps = dispatch => ({
  //PRE REDUX THUNK CODE
  // updateCollections: collectionsMap => 
  //   dispatch(updateCollections(collectionsMap))

  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
