import React, { Component } from "react";
import {Link, NavLink} from "react-router-dom";
class Product extends Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       this.setState({products:data});
  //     })
  //     .catch(error => console.log(error));
  // }
  render() {
    let overlay = "";
    if (this.props.option.overlay)
      overlay = (
        <div className="product-overlay">
          <div className="overlay-content">
            <h2>${this.props.product.price}</h2>
            <p>{this.props.product.title}</p>
            <a href="#" className="btn btn-default add-to-cart">
              <i className="fa fa-shopping-cart"></i>Add to cart
            </a>
          </div>
        </div>
      );
    return (
      <div className={"col-sm-" + this.props.option.col}>
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src={this.props.product.image} alt="" />
              <h2>${this.props.product.price}</h2>
              <p>{this.props.product.title}</p>
              <a href="#" className="btn btn-default add-to-cart">
                <i className="fa fa-shopping-cart"></i>Add to cart
              </a>
            </div>
            {overlay}
          </div>
          {this.props.option.choose && (
            <div className="choose">
              <ul className="nav nav-pills nav-justified">
                <li>
                  {/* <a href="#">
                    <i className="fa fa-plus-square"></i>Add to wishlist
                  </a> */}
                  <Link to={"/detail/" + this.props.product.id} ><i className="fa fa-plus-square"></i>View Details</Link>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-plus-square"></i>Add to wish list
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Product;
