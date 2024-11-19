export function ProductCard(props){

    const {image, title, category, price} = props.data;

    return (<div className="product-card" >
        <img width={200}  src={image} alt="" />
        <br />
        <span>{category}</span>
        <h4>{title}</h4>
        <span>{price}</span>
    </div>);
}