import React, { useState, useEffect } from "react";
import Product from "./product";

function FeaturedProduct (props) {
  const[currentProducts, setCurrentProducts] = useState([]);
  const[currentPage, setCurrentPage] = useState(1);
    
    productPerPage = 7;//Số sản phẩm hiện thị trong 1 trang
    numberPages = 1;//Tổng số trang
    products = []; //Chứa tất cả sản phẩm
  }
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        //Lưu tất cả sản phẩm vao this.products
        products = data;
        // Dựa vào currentPage để lấy productPerPage sản phẩm cần hiển thị
        let currentProducts = getCurrentProducts(currentPage);
        //Tính tổng số trang
        numberPages = Math.ceil(data.length / productPerPage);
        //Cập nhật state
        setCurrentProducts({ 
          currentProducts: currentProducts,
        });
        
      })
      .catch((error) => console.log(error));
  })
  getCurrentProducts = (page) => {
    let startIndex = productPerPage * (page - 1);
    let endIndex = startIndex + productPerPage; //this.state.productPerPage * this.state.currentPage
    return products.slice(startIndex, endIndex);
  }
  changePage = (page, event) => {
    event.preventDefault();
    let currentProducts = getCurrentProducts(page);
    //Cập nhật state
    setCurrentProducts({ 
        currentProducts: currentProducts,
      });
    setCurrentPage({ 
       currentPage: page });
  };
  createListPage = (numberPages) => {
     let pages = [];
     for(let i = 1; i <= numberPages; i++ )
     {
         let page = 
            <li key={i} className={currentPage === i ? "active" : ""}>
            <a href="" onClick={changePage.bind(this, i)}>
              {i}
            </a>
          </li>
         pages.push(page);
     }
     return pages;
  }
  
    return (
      <>
        <div className="features_items">
          <h2 className="title text-center">Features Items</h2>
          {currentProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              option={props.display}
            />
          ))}
        </div>
        <ul className="pagination">
          {createListPage(numberPages)}

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
  


export default FeaturedProduct;
