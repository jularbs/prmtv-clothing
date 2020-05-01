import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

// import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({collection}) => {
    const { title, items } = collection;
    return(
    <div className="category">
        <h2>{collection.routeName}</h2>
    </div>
)};

const mapStateToProps = (state, ownProps) => ({ // ownProps pases the other props of the component to the function to use
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
