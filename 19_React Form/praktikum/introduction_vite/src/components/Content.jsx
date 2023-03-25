import React, { useState } from 'react'
import logo from '../assets/icon.png'
import data from '../file.json'
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

export default function Content() {
    const [productData, setProductData] = useState([]);
    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productFreshness, setProductFreshness] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [language, setLanguage] = useState("english")
    const [productNameError, setProductNameError] = useState(false);
    const [productCategoryError, setProductCategoryError] = useState(false);
    const [productImageError, setProductImageError] = useState(false);
    const [productDescriptionError, setProductDescriptionError] = useState(false);
    const [productFreshnessError, setProductFreshnessError] = useState(false);
    const [productPriceError, setProductPriceError] = useState(false);

    const [imagePreview, setImagePreview] = useState(null);
    

    const handleLanguage = () => {
        if (language == "english"){
            setLanguage("indonesian")
        } else {
            setLanguage("english");
        }
    }

    const handleChangeProductName = (e) => {
        const value = e.target.value;
        const productNameRegex = /^[A-Za-z0-9 ,.'-]{0,10}$/;
        if(productNameRegex.test(value)){
            setProductName(value)
            setProductNameError(value === "");
        }
    }

    const handleChangeProductCategory = (e) => {
        const value = e.target.value;
        setProductCategory(value);
        setProductCategoryError(value === "");
    }

    const handleChangeProductImage = (e) => {
        const file = e.target.files[0];
        setProductImage(file);
        setImagePreview(URL.createObjectURL(file))
        setProductImageError(file == "");
    }

    const handleChangeProductFreshness = (e) => {
        const value = e.target.value;
        setProductFreshness(value);
        setProductFreshnessError(value === "");
    }

    const handleChangeProductDescription = (e) => {
        const value = e.target.value;
        setProductDescription(value);
        setProductDescriptionError(value === "");
    }

    const handleChangeProductPrice = (e) => {
        const value = e.target.value;
        const productPriceRegex = /^\d+(\d{1,2})?$/;
        if(productPriceRegex.test(value)){
            setProductPrice(value);
            setProductPriceError(value === "");
        }
    }

    const handleClick = (e) => {
        const randomNumber = Math.floor(Math.random() * 100);
        console.log({randomNumber});
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct ={
            id : uuidv4(),
            productName,
            productCategory,
            productFreshness,
            productImage,
            productPrice,
        };

        if (productName === ""){
            setProductNameError(true)
        }
        if (productCategory === ""){
            setProductCategoryError(true)
        }
        if (productImage === null){
            setProductImageError(true)
        }
        if (productDescription === ""){
            setProductDescriptionError(true)
        }
        if (productPrice === ""){
            setProductPriceError(true)
        }

        if (!productName && !productCategory && !productFreshness && !productPrice) {
            return;
        }

        setProductData([...productData, newProduct]);
        setProductName("");
        setProductCategory("");
        setProductFreshness("");
        setProductImage(imagePreview);
        setProductPrice("");
        
        
    };

    console.log(productData)
    const handleDelete = (i) =>{
        const confirmDelete = window.confirm("Apakah Anda Ingin Menghapus")
        if (confirmDelete) {
            const deleteData = [...productData]
            deleteData.splice(i,1)
            setProductData(deleteData);
            toast.success('Data Berhasil Dihapus')
        }
    };

  return (
    <>
    <div className="container my-5">
        <div className="">
            <div className="col-md-6 offset-md-3">
                <div className='text-center'>
                    <img src={logo} style={{width: "20%"}}/>
                    <h2 className='text-center'>{language === "english" ? data.title.en : data.title.id }</h2>
                    <p className='text-center'>{language === "english" ? data.description.en : data.description.id}</p>
                    <div className='text-center'>
                        <button 
                            onClick={handleLanguage}
                            className="btn btn-info center-block alert alert-info mt-5 w-50">
                            {language === "english" ? "Bahasa Indonesian" : "Bahasa Inggris"}
                        </button>
                        <button 
                            type='generate' 
                            onClick={handleClick}
                            className="btn btn-success center-block alert alert-success mt-5 w-50"
                            >Generate Number
                        </button>
                    </div>
                    <h2 style={{textAlign: "center"}}>Detail Product</h2>
                </div>
                <form className="create-product" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group my-3">
                    <label htmlFor="productName">Product Name</label>
                    <input 
                        value={productName} 
                        onChange={handleChangeProductName} 
                        type="text" 
                        className={
                            productNameError ? "form-control border border-danger"  : "form-control"
                        }
                        id="productName" 
                    />
                    {productNameError && <p className='error-message text-danger'>Product name is required</p>}
                </div>
                <div className="form-group my-3">
                    <label htmlFor="">Product Category</label>
                    <select
                    value={productCategory}
                    onChange={handleChangeProductCategory}
                    className={productCategoryError ? "form-control border border-danger" : "form-control"}
                    id="productCategory">
                    <option>Choose...</option>
                    <option value="fashion">Fashion</option>
                    <option value="beauty">Beauty</option>
                    </select>
                    {productCategoryError && <span className='error-message text-danger'>Product Category is Required</span>}
                </div>
                <div className="row mt-2">
                    <div className="col-6 position-relative">
                    <label className="form-label fw-semibold" htmlFor="customFile">
                        Image of product
                    </label>
                    {/* {imagePreview && (
                        <div>
                            <img src={imagePreview} width={100} />
                        </div>
                    )} */}
                    <input 
                        type="file" 
                        onChange={(e) => handleChangeProductImage(e)}
                        className={productImageError ? "form-control border border-danger" : "form-control"}
                        id="uploadFile" 
                    />
                    {productImageError && <span className='error-message text-danger'>Product Image is Required</span>}
                    </div>
                </div>
                <div className="row my-3" id="prodFres">
                    <p>Product Freshness</p>
                    <div className="form-check">
                        <input
                            className={productFreshnessError ? "form-control border border-danger" : "form-check-input"}
                            type="radio"
                            defaultValue="Brand New"
                            name="btnRadio"
                            id="Radio1"
                            onChange={handleChangeProductFreshness}
                        />
                        <label className="form-check-label" htmlFor="Radio1">
                            Brand New
                        </label>
                        {productFreshnessError && <span className='error-message text-danger'>Product Category is Required</span>}
                    </div>
                    <div className="form-check">
                        <input
                            className={productFreshnessError ? "form-control border border-danger" : "form-check-input"}
                            type="radio"
                            defaultValue="Second Hand"
                            name="btnRadio"
                            id="Radio2"
                            onChange={handleChangeProductFreshness}
                        />
                        <label className="form-check-label" htmlFor="Radio2">
                            Second Hand
                        </label>
                        {productFreshnessError && <span className='error-message text-danger'>Product Category is Required</span>}
                    </div>
                    <div className="form-check">
                        <input
                            className={productFreshnessError ? "form-control border border-danger" : "form-check-input"}
                            type="radio"
                            defaultValue="Refufbhised"
                            name="btnRadio"
                            id="Radio3"
                            onChange={handleChangeProductFreshness}
                        />
                        <label className="form-check-label" htmlFor="Radio3">
                            Refufbhised
                        </label>
                        {productFreshnessError && <span className='error-message text-danger'>Product Category is Required</span>}
                    </div>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="description">Additional Description</label>
                    <textarea
                        value={productDescription}
                        onChange={handleChangeProductDescription}
                        className={productDescriptionError ? "form-control border border-danger" : "form-control"}
                        id="addDesc"
                        rows={3}
                        defaultValue={""}
                    />
                    {productDescriptionError && <span className='error-message text-danger'>Product Category is Required</span>}
                </div>
                <div className="form-group my-3">
                    <label htmlFor="productPrice">Product Price</label>
                    <input 
                        type="number" 
                        value={productPrice}
                        onChange={handleChangeProductPrice}
                        className={productPriceError ? "form-control border border-danger" : "form-control"}
                        id="productPrice" 
                    />
                    {productPriceError && <span className='error-message text-danger'>Product Category is Required</span>}
                </div>
                <button
                    type="submit"
                    className="btn btn-primary center-block alert alert-primary"
                    style={{ width: 400, marginLeft: "12%", marginTop: 50 }}
                >
                    Submit
                </button>
                </form>
            </div>
        </div>
        <table className="table table-collapse">
            <thead>
                <tr className='w-75'>
                <th id="no">No</th>
                <th>Product Name</th>
                <th>Product Category</th>
                <th>Product Freshness</th>
                <th>Image</th>
                <th>Product Price</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {productData.map((product, i) => (
                <tr key={i}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.productCategory}</td>
                <td>{product.productFreshness}</td>
                <td><img src={URL.createObjectURL(product.productImage)} width={100} /></td>
                <td>{product.productPrice}</td>
                <td>
                <button className='btn btn-danger' onClick={() => handleDelete(i)}>Delete</button>
                </td>
                </tr>
                ))}
            </tbody>
        </table>
        <div>
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
        </div>
      </div>
    </>
  )
}
