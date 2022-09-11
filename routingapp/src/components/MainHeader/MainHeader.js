import styles from './MainHeader.module.css';
import {Link,NavLink} from 'react-router-dom';

const MainHeader=()=>{
    return(
        <header className={styles.header}>
            <nav>
                <ul>
                    <li>
                        {/* <a href='/welcome'>Welcome</a> */}
                        {/* <Link to='/welcome'>Welcome</Link> */}
                        <NavLink 
                        to='/welcome' 
                        // className={(isActive)=>console.log('welcome',isActive)}
                        //NavLink to be used for a section that is to be seen all the time. e.g. a naigation bar on the header section
                        className={(activelink)=>activelink.isActive ? styles.active : ''}
                        >
                            Welcome
                        </NavLink>
                    </li>
                    <li>
                        {/* <a href='/products'>Products</a> */}
                        <NavLink 
                        to='/products' 
                        // className={(isActive)=>console.log('products',isActive)}
                        className={(activelink)=>activelink.isActive ? styles.active : ''}
                        >
                            Products
                        </NavLink> {/*1:03*/}
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default MainHeader;