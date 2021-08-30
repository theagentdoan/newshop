import React, { Component } from "react";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: []};
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => this.setState({categories:data}));
  }
  render() {
    return (
      <div>
        <h2>Category</h2>
        <div className="panel-group category-products" id="accordian">
          {this.state.categories.map(category => (
            <div key={category.toString()} className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="#">{category}</a>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Category;
