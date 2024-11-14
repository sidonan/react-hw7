export function ProductCard(props){

    const {img, name, category, price} = props.data;

    return (<div className="product-card" >
        <img width={200}  src={img} alt="" />
        <br />
        <span>{category}</span>
        <h4>{name}</h4>
        <span>{price}</span>
    </div>);
}