import React, { Component } from "react";

class FeaturedProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { products: []};
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); 
        this.setState({products:data});
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="features_items">
      {/* <!--features_items--> */}
      <h2 className="title text-center">Features Items</h2>
      {this.state.products.map(product => (
        <div className="col-sm-4">
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src={product.image} alt="" />
              <h2>${product.price}</h2>
              <p>{product.title}</p>
              <a href="#" className="btn btn-default add-to-cart">
                <i className="fa fa-shopping-cart"></i>Add to cart
              </a>
            </div>
            <div className="product-overlay">
              <div className="overlay-content">
                <h2>${product.price}</h2>
                <p>{product.title}</p>
                <a href="#" className="btn btn-default add-to-cart">
                  <i className="fa fa-shopping-cart"></i>Add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="choose">
            <ul className="nav nav-pills nav-justified">
              <li>
                <a href="#">
                  <i className="fa fa-plus-square"></i>Add to wishlist
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-plus-square"></i>Add to compare
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      ))}
          </div>
    );
  }
}

export default FeaturedProduct;
