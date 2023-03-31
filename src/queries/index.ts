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
        socialMediaCollection {
            items {
                id
                displayName
                url
            }
        }
    }
`

// Query page template.
export const HOME_PAGE_QUERY = gql`
    query GetHomePage {
        page(id: "4FYAIS99mg6ZE1TBBAovC5") {
            slug
            seoTitle
            seoDescription
        }
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

export const ABOUT_PAGE_QUERY = gql`
    query GetAboutPage {
        page(id: "6FzlcGQKEjL3uUy8mcswx5") {
            slug
            pageTitle
            subtitle
            seoTitle
            seoDescription
        }
    }
`

export const CONTACT_PAGE_QUERY = gql`
    query GetContactPage {
        page(id: "6OnNWVTmoq0l9L2gFoKsh0") {
            slug
            pageTitle
            subtitle
            seoTitle
            seoDescription
        }
    }
`

export const TERMS_PAGE_QUERY = gql`
    query GetTermsPage {
        page(id: "7M5SzyFQSsGlfPVEqAksar") {
            slug
            pageTitle
            subtitle
            seoTitle
            seoDescription
        }
    }
`

export const CONDITIONS_PAGE_QUERY = gql`
    query GetConditionsPage {
        page(id: "2XAgzjZoRB8DKk9npYybqo") {
            slug
            pageTitle
            subtitle
            seoTitle
            seoDescription
        }
    }
`

export const POLICY_PAGE_QUERY = gql`
    query GetPolicyPage {
        page(id: "2W0ufViRGKd73maqOAFJIm") {
            slug
            pageTitle
            subtitle
            seoTitle
            seoDescription
        }
    }
`