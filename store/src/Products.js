import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Products(props)
{
    const paragraph = {
        fontFamily:"Manrope SemiBold",
        fontSize:"14px",
        padding: "10px"
    }

    const titlestyle = {
        fontFamily:"Manrope SemiBold",
        fontSize:"24px",
        padding: "10px"
    }

    const {product, showButton} = props;
    const {productId} = useParams();

    return (
        <>
            <div className="card" style={{height:"1800px"}}>
                <img src={product.image} className="card-img-top" alt={product.title}/>
                <div className="card-body">
                    <h5 className="card-title" style={titlestyle}>{product.title}</h5>
                    <h6 className="card-title">{product.category}</h6>
                    <p className="card-text" style={paragraph}>{product.description}</p>
                    <p style={paragraph}> Price: {product.price}$ </p>
                    {showButton && (
                    <Link className="btn btn-primary mt-auto" to={`/product/${productId}`}>
                        Details
                    </Link>
                    )}
                </div>
            </div>
        </>
    );
}

export default Products