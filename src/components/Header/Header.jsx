import crud from "../../assets/crud.jpg"
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>
            <div>
                <Link to = "/">
                    <img src={crud} className={styles.logo} alt="" srcSet="" />                
                </Link>

            </div>

            <div>
                <ul className={styles.link}>
           
                        <Link to="/create">
                            <li>Create</li>
                        </Link>

                </ul>
            </div>
        </div>
    )
}

export default Header;