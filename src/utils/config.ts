/*
 * This Config object is used throughout the application to
 * personalise your code and preferences for how you would
 * like things to work.
 *
 * For example, use the Config object to configure your menu links
 * without editing HTML, or change the page size on /blog without
 * touching any of the functional code.
 * 
 * Ref: https://github.com/whitep4nth3r/nextjs-contentful-blog-starter/blob/main/utils/Config.js
 *
 */

export const config = {
    site: {
        owner: "Jane Valencia",
        title: "방",
    },
    menuLinks: {
        header: [
            {
                displayName: "HOME",
                path: "/",
            },
            {
                displayName: "ABOUT",
                path: "#",
            },
            {
                displayName: "PROJECTS",
                path: "#",
            },
            {
                displayName: "CONTACT",
                path: "#",
            },
        ],
        quick_links: [
            {
                displayName: "Home",
                path: "#",
            },
            {
                displayName: "About",
                path: "#",
            },
            {
                displayName: "Project",
                path: "#",
            },
            {
                displayName: "Contact",
                path: "#",
            },
        ],
        legal_links: [
            {
                displayName: "Terms",
                path: "#",
            },
            {
                displayName: "Conditions",
                path: "#",
            },
            {
                displayName: "Policy",
                path: "#",
            },
        ],
        social_media: [
            {
                displayName: "Facebook",
                path: "#",
            },
            {
                displayName: "Twitter",
                path: "#",
            },
            {
                displayName: "YouTube",
                path: "#",
            },
            {
                displayName: "LinkedIn",
                path: "#",
            },
        ]
    },
};