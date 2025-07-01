
const ProductResultCard = (props) => {
    const { title, price, thumbnail, rating, } = props;
    return (
        <div className="p-4 rounded-2xl">
            <img src={thumbnail}></img>
            <p>{title}</p>
            <p>Rs. {price * 85}</p>
        </div>
    )
};
export { ProductResultCard };