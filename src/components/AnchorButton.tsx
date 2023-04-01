type AnchorButtonProps = {
    href: string;
    text: string;
    isDark: boolean;
}


const AnchorButton = ({href, text, isDark} : AnchorButtonProps) => {
    const styling = {
        dark: "bg-lugar-dark text-lugar-white py-4 px-6",
        transparent: "border border-lugar-dark bg-transparent text-lugar-dark py-4 px-6"
    }

    return (
        <a
            href={href}
            className={isDark ? styling.dark : styling.transparent}
        >
            {text}
        </a>
    );
}

export default AnchorButton;