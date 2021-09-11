import React, { Component } from "react";
import Category from "./category";
import FeaturedProduct from "./featuredProduct";
import CatFeaturedProduct from "./CatfeaturedProduct";

class Shop extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="left-sidebar">
                <Category />
                <div className="brands_products">
                  {/* <!--brands_products--> */}
                  <h2>Brands</h2>
                  <div className="brands-name">
                    <ul className="nav nav-pills nav-stacked">
                      <li>
                        <a href="#">
                          {" "}
                          <span className="pull-right">(50)</span>Acne
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <span className="pull-right">(56)</span>Grüne Erde
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <span className="pull-right">(27)</span>Albiro
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <span className="pull-right">(32)</span>Ronhill
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <span className="pull-right">(5)</span>Oddmolly
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <span className="pull-right">(9)</span>Boudestijn
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <span className="pull-right">(4)</span>Rösch creative
                          culture
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!--/brands_products--> */}

                <div className="price-range">
                  {/* <!--price-range--> */}
                  <h2>Price Range</h2>
                  <div className="well text-center">
                    <input
                      type="text"
                      className="span2"
                      value=""
                      data-slider-min="0"
                      data-slider-max="600"
                      data-slider-step="5"
                      data-slider-value="[250,450]"
                      id="sl2"
                    />
                    <br />
                    <b className="pull-left">$ 0</b>{" "}
                    <b className="pull-right">$ 600</b>
                  </div>
                </div>
                {/* <!--/price-range--> */}

                <div className="shipping text-center">
                  {/* <!--shipping--> */}
                  <img src="images/home/shipping.jpg" alt="" />
                </div>
                {/* <!--/shipping--> */}
              </div>
            </div>

            <div className="col-sm-9 padding-right">
              <CatFeaturedProduct
                display={{ col: 4, overlay: true, choose: true }}
              />
              {/* <!--features_items--> */}
              
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Shop;
