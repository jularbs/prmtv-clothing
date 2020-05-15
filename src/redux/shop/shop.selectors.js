import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

//get array of shop state keys cause it is an object. do this when your data is an object  not array
//objects are more optimized when using large data compared to array when finding a single data
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => (collections ? collections[collectionUrlParam] : null)
    );