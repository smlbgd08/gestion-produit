function Product(props){
    return <div className="col-md-4 mt-3">
    <div className="card shadow-sm">
    <img className="img bd-placeholder-img card-img-top"  src={`pictures/${props.thumbnail}`} alt="" />
    <div className="card-body">
    <p className="card-title">{props.title}</p>
    <p className="card-text">{props.price}</p>
    <div className="d-flex justify-content-between align-items-center">
    <div className="btn-group">
    <button type="button" className="btn btn-sm btn-primary">Ajouter au panier</button>
    </div>
    </div>
    </div>
    </div>
    </div>
}

export default Product;