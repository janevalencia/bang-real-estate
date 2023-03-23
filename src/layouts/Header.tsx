import { config } from "@/utils/config";

const Header = () => {
    return (
        <header>
            <h1>{config.site.title}</h1>
        </header>
    );
}

export default Header;