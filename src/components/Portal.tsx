import { ReactNode, useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

// Default props value.
const defaultPortalProps = {
    wrapperId: "react-portal",
};

// Define ReactPortal props.
type PortalProps = {
    children: ReactNode;
    wrapperId: string;
} & typeof defaultPortalProps;

// Render component.
const Portal = ({ children, wrapperId }: PortalProps) => {
    // Manage state of portal-wrapper.
    const [wrapper, setWrapper] = useState<Element | null>(null);

    // Run layout effect to create and set wrapper element upon component mounting.
    useLayoutEffect(() => {
        // (Attempt) Fetch wrapper-element.
        let element = document.getElementById(wrapperId);

        // Flag to notify whether the wrapper is created and appended to body.
        let created = false;

        // If element not found, create portal-wrapper and append to body.
        if (!element) {
            const wrapper = document.createElement("div");
            wrapper.setAttribute("id", wrapperId);
            document.body.appendChild(wrapper);
            element = wrapper;
            created = true;
        }

        // Set wrapper state.
        setWrapper(element);

        // Cleanup effect to remove programatically the created wrapper element.
        return () => {
            if (created && element?.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
    }, [wrapperId]);

    // Return null on initial rendering.
    if (wrapper === null) return null;

    // Return portal-wrapper component.
    return createPortal(children, wrapper);
};
Portal.defaultProps = defaultPortalProps;

export default Portal;