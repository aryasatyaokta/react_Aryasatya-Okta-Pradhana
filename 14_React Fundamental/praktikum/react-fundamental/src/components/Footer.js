import React from 'react'

export default function Footer() {
  return (
    <>
    <table className="table" id="productTable">
        <thead>
          <tr>
            <th id="no">No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Image of Product</th>
            <th>Product Freshness</th>
            <th>Additional Description</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <div className="col-xs-3">
        <input
          type="text"
          className="form-control"
          id="Search"
          placeholder="Search by Product Name"
        />
      </div>
      <div className="btn-group" style={{marginTop: "10px"}}>
        <button type="button" className="btn btn-primary">
          Deletion
        </button>
        <button type="button" className="btn btn-outline-primary">
          Search
        </button>
      </div>
    </>
  )
}
