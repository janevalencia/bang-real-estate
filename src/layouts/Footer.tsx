import { config } from "@/utils/config";

// Default Footer props.
const defaultFooterProps = {
    year: new Date().getFullYear(),
};

// Footer props.
type FooterProps = {
    year: number;
} & typeof defaultFooterProps;

const Footer = ( {year} : FooterProps) => {
    return (
        <footer>
            <p>&copy; {year} All Right Reserved. {config.site.owner}.</p>
        </footer>
    );
}
Footer.defaultProps = defaultFooterProps;

export default Footer;