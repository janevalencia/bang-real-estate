import { initializeApollo } from "@/utils/apollo-client";
import { gql } from "@apollo/client";

// SAMPLE QUERY
// /**
//  * Get all property posts for thumbnail grids.
//  * Minimum data required to display thumbnail.
//  * 
//  * @returns The data, errors and status of the query.
//  */
// export const getPosts = async () => {
//     const apolloClient = initializeApollo();

//     // Define query.
//     const query = gql`
//         query GetPropertyThumbnailPosts {
//             postCollection {
//                 items {
//                     slug
//                     title
//                     headerImg {
//                         title
//                         url
//                     }
//                     price
//                     bedrooms
//                     bathrooms
//                     parking
//                     listingType
//                     propertyType
//                     featured
//                 }
//             }
//         }
//     `

//     // Execute query.
//     const { data, errors, networkStatus } = await apolloClient.query({
//         query,
//     });

//     // Return data.
//     return {
//         data: data.postCollection.items,
//         errors,
//         status: networkStatus,
//         apolloClient
//     }
// }

// Define your queries here ...