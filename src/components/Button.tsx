type ButtonProps = {
    text: string;
    onClick?: () => void;
    isDark: boolean;
}

const Button = ({text, onClick, isDark} : ButtonProps) => {
    const buttonType = {
        dark: "bg-lugar-dark text-lugar-white py-4 px-6",
        transparent: "border border-lugar-dark bg-transparent text-lugar-dark py-4 px-6"
    }

    return (
        <button
            className={isDark ? buttonType.dark : buttonType.transparent}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;