import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

//PRE- REDUX THUNK CODE
// import{ updateCollections } from '../../redux/shop/shop.actions.js';

//REDUX THUNK CODE
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'; 
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/withSpinner/with-spinner.component';

  //PRE- REDUX THUNK CODE
// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'; 

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

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
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
      //PRE- REDUX THUNK CODE
    // const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
        <Route 
          path={`${match.path}/:collectionId`} 
          render={(props) => <CollectionsPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />}
        />
      </div>
    );
  }
  
};

//REDUX THUNK CODE
const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
  //PRE REDUX THUNK CODE
  // updateCollections: collectionsMap => 
  //   dispatch(updateCollections(collectionsMap))

  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
