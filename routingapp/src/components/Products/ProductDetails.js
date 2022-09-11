import {useParams} from 'react-router-dom';

const ProductDetails = () =>{
    const params = useParams() //returns object {placeholder: value} it displays the id in the url on the address bar
    console.log(params);
    return <h2>Product details {params.productId}</h2>
};
export default ProductDetails;