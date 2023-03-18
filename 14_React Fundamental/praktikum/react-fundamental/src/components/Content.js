import React, { useState } from 'react'
import logo from '../img/icon.png'
import data from '../file.json'

export default function Content() {

    const [productName, setProductName] = useState('');

    const handleChangProductName = (e) => {
        const value = e.target.value;
        if(value.length <= 10){
            setProductName(value)
        }
    }

    const handleClick = (e) => {
        const randomNumber = Math.floor(Math.random() * 100);
        console.log({randomNumber});
        e.preventDefault();
    }

  return (
    <>
    <div className="container my-5">
        <div className="">
            <div className="col-md-6 offset-md-3">
                <div className='text-center'>
                    <img src={logo} style={{width: "20%"}}/>
                        <h2 className='text-center'>{data.title.en}</h2>
                        <p className='text-center'>{data.description.en}</p>
                </div>
                <form className="create-product">
                <h2 style={{textAlign: "center"}}>Detail Product</h2>
                <div className="form-group my-3">
                    <label htmlFor="productName">Product Name</label>
                    <input value={productName} onChange={handleChangProductName} type="text" className="form-control" id="productName" />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="">Product Category</label>
                    <select className="form-control" id="productCategory">
                    <option>Choose...</option>
                    <option value="fashion">Fashion</option>
                    <option value="beauty">Beauty</option>
                    </select>
                </div>
                <div className="row mt-2">
                    <div className="col-6 position-relative">
                    <label className="form-label fw-semibold" htmlFor="customFile">
                        Image of product
                    </label>
                    <input type="file" className="form-control" id="uploadFile" />
                    </div>
                </div>
                <div className="row my-3" id="prodFres">
                    <p>Product Freshness</p>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        defaultValue="Brand New"
                        name="btnRadio"
                        id="Radio1"
                    />
                    <label className="form-check-label" htmlFor="Radio1">
                        Brand New
                    </label>
                    </div>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        defaultValue="Second Hand"
                        name="btnRadio"
                        id="Radio2"
                    />
                    <label className="form-check-label" htmlFor="Radio2">
                        Second Hand
                    </label>
                    </div>
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        defaultValue="Refufbhised"
                        name="btnRadio"
                        id="Radio3"
                    />
                    <label className="form-check-label" htmlFor="Radio3">
                        Refufbhised
                    </label>
                    </div>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="description">Additional Description</label>
                    <textarea
                    className="form-control"
                    id="addDesc"
                    rows={3}
                    defaultValue={""}
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="productPrice">Product Price</label>
                    <input type="number" className="form-control" id="productPrice" />
                </div>
                <button
                    onClick={handleClick}
                    type="submit"
                    className="btn btn-primary center-block alert alert-primary"
                    style={{ width: 400, marginLeft: "12%", marginTop: 50 }}
                >
                    Submit
                </button>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}
