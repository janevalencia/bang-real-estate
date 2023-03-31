// Define your project types here ...

// Content Model: Property.
export type TProperty = {
    slug: string;
    title: string;
    category: string;
    image: TImage;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    province: string;
    postcode: number;
}

// Content Model: Asset Image.
export type TImage = {
    url: string;
}

// Content Model: Site Meta.
export type TSiteMeta = {
    siteName: string;
    siteDescription: string;
    siteOwner: string;
}

// Content Model: Site Navigation.
export type TSiteNav = {
    id: string;
    orderNumber: number;
    displayName: string;
    pageReference: {
        slug: string;
    };
    category: string;
    displayInHeader: boolean;
    displayInFooter: boolean;
}

// Content Model: Social Media
export type TSocial = {
    id: string;
    displayName: string;
    url: string;
}