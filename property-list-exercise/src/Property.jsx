export default function Property({property}){
    return (
        <div className="Property">
            <h2>{property.name}</h2>
            <h3>Rating: ${property.price} a night</h3>
            <p>Price: ${property.rating}⭐</p>
        </div>
    )
}