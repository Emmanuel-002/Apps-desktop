import {Link,useNavigate} from 'react-router-dom';
const Products = () =>{
    // return <h1>Products Page</h1>
    const navigate = useNavigate()
    const buttonClickHandler = () =>{
        navigate('/welcome');
    }
    return <section>
                <h2>Products Page</h2>
                <ul>
                    <li>
                    <Link to='/products/1'>Books</Link>
                    </li>
                    <li>
                    <Link to='/products/2'>Series</Link>
                    </li>
                    {/* <li>Books</li>
                    <li>Series</li> */}
                </ul>
                <button onClick={buttonClickHandler}>Go to Welcome Page</button>
            </section>
}
export default Products;