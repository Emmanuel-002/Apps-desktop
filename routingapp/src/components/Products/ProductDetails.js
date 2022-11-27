import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () =>{
    const navigate = useNavigate();
    const navigateToProducts = () =>{
        navigate('/products');
    }
    const params = useParams() //returns object {placeholder: value} it displays the id in the url on the address bar
    console.log(params);
    return (
    <div>
    <h2>Product details {params.productId}</h2>
    <button onClick={navigateToProducts}>Go to Products Page</button>
    </div>
    
    )
};
export default ProductDetails;