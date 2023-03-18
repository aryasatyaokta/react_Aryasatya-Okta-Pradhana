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
            <th>Product Freshness</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>aaa</td>
            <td>aaa</td>
            <td>aaa</td>
            <td>111</td>
            <td>
              <button className='btn btn-danger'>Delete</button>
              <button className='btn btn-success'>Edit</button>
            </td>
          </tr>
        </tbody>
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
