import { useEffect, useState } from "react";
/*{import { useParams } from "react-router-dom";}*/
import Products from "./Products";

function Productslist()
{
    const titlestyle = {
        fontFamily:"Manrope SemiBold",
        fontSize:"24px",
        padding: "10px"
    }

    const api_url = "https://fakestoreapi.com/products";
    const [products,setProducts] = useState([]);
    const [categories,setCategories] = useState([]);

    const getProducts = () => {
        fetch(api_url)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    };

    const getCategories = () => {
        fetch(`${api_url}/categories`)
        .then((res) => res.json())
        .then((data) => setCategories(data));
    };

    const getProductsinCategory = (catName) => {
        console.log(catName);
        fetch(`${api_url}/category/${catName}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    };

    useEffect(() => {
        getProducts()
        getCategories()
    },[]);

    return(
    <>
    <h2 className="text center p-4" style={titlestyle}> What we offer </h2>
    <div className="container">
        <button 
            onClick={() => {
                getProducts();
            }} 
            className="btn-btn-info">
                All
        </button>
        
        {
            categories.map((cat) =>
                {
                    return (
                    <button 
                    key={cat} 
                    onClick={() => {
                        getProductsinCategory(cat);
                    }} 
                    className="btn-btn-info">
                        {cat}
                        </button>
                    );
                })}

    <div className="row">
        {products.map((product) => {
            return (
            <div className="col-4" key={product.id}>
                <Products product={product} showButton={true}/>
            </div>
            );
        })}
        </div>
    </div>
    </>
    );
}

export default Productslist