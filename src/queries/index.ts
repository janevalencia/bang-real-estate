import { gql } from "@apollo/client";

// Query Header menu items.
export const GET_HEADER_MENUS = gql`
    query GetHeaderMenus {
        headerNavbarCollection (
          order: orderNumber_ASC, 
          where: {displayInHeader: true} ) {
            items {
                id
                orderNumber
                displayName
                category
                pageReference {
                    slug
                }
                displayInHeader
                displayInFooter
            }
        }
    }
`

// Query Footer menu items.
export const GET_FOOTER_MENUS = gql`
    query GetFooterMenus {
        headerNavbarCollection (
          order: orderNumber_ASC, 
          where: {displayInFooter: true} ) {
            items {
                id
                orderNumber
                displayName
                category
                pageReference {
                    slug
                }
                displayInHeader
                displayInFooter
            }
        }
    }
`

// Query all properties.
export const ALL_PROPERTIES_QUERY = gql`
    query GetProperties {
        propertyCollection {
            items {
                slug
                title
                category
                image {
                    url
                }
                addressLine1
                addressLine2
                city
                province
                postcode
            }
        }
    }
`

// Query page template.