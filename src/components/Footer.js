import Nav from "./Nav";
import logo from "../images/Logo .svg";

const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <img src={logo} alt="Little Lemon Logo"></img>
                </div>

                <div>
                    <h1>Doormat Navigation</h1>
                    <Nav></Nav>
                </div>

                <div>
                    <h1>Contact</h1>
                    <ul>
                        <li>
                            Address
                        </li>

                        <li>
                            phone number
                        </li>

                        <li>
                            email
                        </li>
                    </ul>
                </div>

                <div>
                    <h1>Social Media Links</h1>
                    <ul>
                        <li>
                            <a href="/facebook">Facebook</a>
                        </li>

                        <li>
                            <a href="/instagram">Instagram</a>
                        </li>

                        <li>
                            <a href="/twitter">Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;