import { gql } from "@apollo/client";

// Query all menu items.
export const ALL_MENUS_QUERY = gql`
    query GetMenus {
        headerNavbarCollection (
          order: orderNumber_ASC, 
          where: {OR:[{displayInHeader: true}, {displayInFooter: true}]} ) {
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

// Query all pages.
export const ALL_PAGES_QUERY = gql`
    query GetPages {
        pageCollection {
            items {
                slug
                pageTitle
                subtitle
                seoTitle
                seoDescription
            }
        }
    }
`