import styles from './Navigation.module.css';
import Button from '../Button/Button';
const Navigation = (props) =>{
    return(
        <nav className={styles.nav}>
            <ul>
                {props.logged ?
                <li>
                    <a href='#'>Profile</a>
                </li> : ''}
                {props.logged ?
                <li>
                    <a href='#'>Settings</a>
                </li> : ''}
                <li>
                    <a href='#'>About Us</a>
                </li>
                {props.logged ?
                <li>
                    <Button onClick={props.onLogout}>Logout</Button>
                </li> : ''}
            </ul>

        </nav>
        );
}
export default Navigation;