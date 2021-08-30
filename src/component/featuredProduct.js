import React, { Component } from "react";
import Product from "./product";

class FeaturedProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProducts: [], //Chứa các sản phẩm của trang hiện tại (currentPage)
      currentPage: 1,//Trang hiện tại
    };
    this.productPerPage = 7;//Số sản phẩm hiện thị trong 1 trang
    this.numberPages = 1;//Tổng số trang
    this.products = []; //Chứa tất cả sản phẩm
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        //Lưu tất cả sản phẩm vao this.products
        this.products = data;
        // Dựa vào currentPage để lấy productPerPage sản phẩm cần hiển thị
        let currentProducts = this.getCurrentProducts(this.state.currentPage);
        //Tính tổng số trang
        this.numberPages = Math.ceil(data.length / this.productPerPage);
        //Cập nhật state
        this.setState({ 
          currentProducts: currentProducts,
        });
        
      })
      .catch((error) => console.log(error));
  }
  getCurrentProducts = (page) => {
    let startIndex = this.productPerPage * (page - 1);
    let endIndex = startIndex + this.productPerPage; //this.state.productPerPage * this.state.currentPage
    return this.products.slice(startIndex, endIndex);
  }
  changePage = (page, event) => {
    event.preventDefault();
    let currentProducts = this.getCurrentProducts(page);
    //Cập nhật state
    this.setState({ currentProducts: currentProducts, currentPage: page });
  };
  createListPage = (numberPages) => {
     let pages = [];
     for(let i = 1; i <= numberPages; i++ )
     {
         let page = 
            <li key={i} className={this.state.currentPage === i ? "active" : ""}>
            <a href="" onClick={this.changePage.bind(this, i)}>
              {i}
            </a>
          </li>
         pages.push(page);
     }
     return pages;
  }
  render() {
    return (
      <>
        <div className="features_items">
          <h2 className="title text-center">Features Items</h2>
          {this.state.currentProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              option={this.props.display}
            />
          ))}
        </div>
        <ul className="pagination">
          {this.createListPage(this.numberPages)}

          {/* <li className={(this.state.currentPage === 2) && "active"}>
          <a href="" onClick={(event) => this.showPageProduct(2,event)}>2</a>
          </li>
          <li className={(this.state.currentPage === 3) && "active"}>
          <a href="" onClick={(event) => this.showPageProduct(3,event)}>3</a>
          </li> */}
          <li>
            <a href="">&raquo;</a>
          </li>
        </ul>
      </>
    );
  }
}

export default FeaturedProduct;
