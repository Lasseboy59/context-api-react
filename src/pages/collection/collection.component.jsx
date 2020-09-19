// // At the Beginning

// import React from 'react';
// import { connect } from 'react-redux';

// import CollectionItem from '../../components/collection-item/collection-item.component';

// import { selectCollection } from '../../redux/shop/shop.selectors';

// import './collection.styles.scss';

// const CollectionPage = ({ collection }) => {
//   const { title, items } = collection;
//   return (
//     <div className='collection-page'>
//       <h2 className='title'>{title}</h2>
//       <div className='items'>
//         {items.map(item => (
//           <CollectionItem key={item.id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state)
// });

// export default connect(mapStateToProps)(CollectionPage);


// Alternativa A

// import React from 'react';
// import { connect } from 'react-redux';

// import CollectionItem from '../../components/collection-item/collection-item.component';

// import { selectCollection } from '../../redux/shop/shop.selectors';
// import CollectionsContext from '../../contexts/collections/collections.context';

// import './collection.styles.scss';

// const CollectionPage = ({ match }) => {

//   return (
//     <CollectionsContext.Consumer>
//       {
//         collections => {
//           const collection = collections[match.params.collectionId];
//           const { title, items } = collection;
//           return (
//             <div className='collection-page'>
//               <h2 className='title'>{title}</h2>
//               <div className='items'>
//                 {items.map(item => (
//                   <CollectionItem key={item.id} item={item} />
//                 ))}
//               </div>
//             </div>
//           )
//         }
//       }

//     </CollectionsContext.Consumer>
//   );
// };

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state)
// });

// export default CollectionPage



// Alternativa B

import React, { useContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import CollectionsContext from '../../contexts/collections/collections.context';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};


export default CollectionPage;