export function ProductCard(props){

    const {image, title, category, price} = props.data;

    return (<div className="product-card" >
        <img width={200}  src={image} alt="" class = "image"/>
        <br />
        <span>{category}</span>
        <h4>{title}</h4>
        <div class = "cena">
        <span class = "price-label">${price}</span>
        <button class = "knopka">Add to Card</button>
        </div>
    </div>);
}