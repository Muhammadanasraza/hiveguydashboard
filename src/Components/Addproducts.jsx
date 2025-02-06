import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import Select from "react-dropdown-select";
import { GrCurrency } from "react-icons/gr";
import Editor from './Helper/Editor';


const Addproducts = () => {




  // const [files, setFiles] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [variantImages, setVariantImages] = useState([]);

  const onDropProductImages = useCallback((acceptedFiles) => {
    const imagePreviews = acceptedFiles.map(file => URL.createObjectURL(file));
    setProductImages(imagePreviews);
  }, []);

  const onDropVariantImages = useCallback((acceptedFiles) => {
    const imagePreviews = acceptedFiles.map(file => URL.createObjectURL(file));
    setVariantImages(imagePreviews);
  }, []);

  const { getRootProps: getProductRootProps, getInputProps: getProductInputProps, isDragActive: isProductDragActive } = useDropzone({ onDrop: onDropProductImages });
  const { getRootProps: getVariantRootProps, getInputProps: getVariantInputProps, isDragActive: isVariantDragActive } = useDropzone({ onDrop: onDropVariantImages });




  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'grape', label: 'Grape' },
    { value: 'lemon', label: 'Lemon' },
    { value: 'orange', label: 'Orange' },
    { value: 'pineapple', label: 'Pineapple' },
    { value: 'strawberry', label: 'Strawberry' }
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };




  const [productName, setProductName] = useState('');
  const [sku, setSku] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      productName,
      sku,
      category,
      subCategory,
      price,
      discount,
      quantity,
      description,
    };
    console.log('Form Submitted:', formData);
  };


  const [selectedSizes, setSelectedSizes] = useState([]);

  const sizeOptions = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
    { value: 'xlarge', label: 'X-Large' }
  ];

  const handleSizeChange = (selectedOptions) => {
    setSelectedSizes(selectedOptions);
  };

  return (
    <>
      <div className="page-content">

        <div className="container-xxl">

          <div className="row">


            <div className="col-xl-12 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Product Information</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label htmlFor="product-name" className="form-label">Product Name</label>
                        <input type="text" id="product-name" className="form-control" placeholder="Items Name" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <label htmlFor="product-categories" className="form-label">Product Categories</label>
                      <Select value={selectedOption} onChange={handleChange} options={options} placeholder="Search categories" />
                    </div>

                    <div className="col-lg-6">
                      <label htmlFor="sub-categories" className="form-label">Sub Categories</label>
                      <Select value={selectedOption} onChange={handleChange} options={options} placeholder="Search subcategories" />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-lg-4">
                      <label htmlFor="sku" className="form-label">SKU</label>
                      <input type="number" id="sku" className="form-control" placeholder="#******" />
                    </div>

                    <div className="col-lg-4">
                      <label htmlFor="stock" className="form-label">Stock</label>
                      <input type="number" id="stock" className="form-control" placeholder="Quantity" />
                    </div>


                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Attributes</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <label htmlFor="product-categories" className="form-label">Sizes</label>
                      <Select value={selectedOption} onChange={handleChange} options={options} placeholder="Search categories" />
                    </div>

                    <div className="col-lg-6">
                      <label htmlFor="sub-categories" className="form-label">Colors</label>
                      <Select value={selectedOption} onChange={handleChange} options={options} placeholder="Search Colors" />
                    </div>


                  </div>
                </div>
              </div>



              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Pricing Details</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <label htmlFor="price" className="form-label">Price</label>
                      <div className="input-group mb-3">
                        <span className="input-group-text fs-20"><GrCurrency /></span>
                        <input type="number" id="price" className="form-control" placeholder="000" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <label htmlFor="discount" className="form-label">Discounted Price</label>
                      <div className="input-group mb-3">
                        <span className="input-group-text fs-20"><GrCurrency /></span>
                        <input type="number" id="discount" className="form-control" placeholder="000" />
                      </div>
                    </div>


                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Add Product Photo</h4>
                </div>
                <div className="card-body">
                  <div {...getProductRootProps()} className="dropzone">
                    <input {...getProductInputProps()} />
                    {isProductDragActive ? (
                      <p>Drop the files here ...</p>
                    ) : (
                      <p>Drag 'n' drop some files here, or click to select files</p>
                    )}
                  </div>
                  <div style={{ display: 'flex', marginTop: '20px' }}>
                    {productImages.map((file, index) => (
                      <div key={index} style={{ marginRight: '10px' }}>
                        <img src={file} alt={`preview-${index}`} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Additional Details</h4>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <Editor />
                  </div>


                </div>
              </div>

              <div className="card p-1">
                <div className="card-header ">
                  <h4 className="card-title">Variant</h4>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    {/* Variant Name */}
                    <div className="col-lg-4">
                      <label htmlFor="variant-name" className="form-label">Variant Name</label>
                      <input type="text" id="variant-name" className="form-control" placeholder="Variant Name" />
                    </div>

                    {/* Variant Color */}
                    <div className="col-lg-4">
                      <label htmlFor="variant-color" className="form-label">Color</label>
                      <Select value={selectedOption} onChange={handleChange} options={options} placeholder="Select Color" />
                    </div>

                    {/* Stock Quantity */}
                    <div className="col-lg-4">
                      <label htmlFor="variant-stock" className="form-label">Stock</label>
                      <input type="number" id="variant-stock" className="form-control" placeholder="Stock Quantity" />
                    </div>

                  </div>

                  <div className="row g-3 mt-0">
                    {/* Sizes Selection */}



                    <div className="col-lg-12">
                      <label className="form-label">Sizes</label>
                      <Select isMulti value={selectedSizes} onChange={handleSizeChange} options={sizeOptions} placeholder="Select Sizes" />
                      <div className="mt-2">
                        <h6>Selected Sizes:</h6>
                        <ul>
                          {selectedSizes.map(size => (<li key={size.value}>{size.label}</li>))}
                        </ul>
                      </div>
                    </div>


                  </div>

                  <div className="row g-2 mt-0">
                    {/* Upload Variant Image */}
                    <div className="col-lg-12">
                      <div {...getVariantRootProps()} className="dropzone p-3 border rounded text-center">
                        <input {...getVariantInputProps()} />
                        {isVariantDragActive ? (
                          <p>Drop the files here ...</p>
                        ) : (
                          <p>Drag 'n' drop an image here, or click to select</p>
                        )}
                      </div>
                      <div className="d-flex mt-3">
                        {variantImages.map((file, index) => (
                          <div key={index} className="me-2">
                            <img src={file} alt={`preview-${index}`} className="img-thumbnail" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price Input */}
                  <div className="col-lg-12">
                    <label htmlFor="variant-price" className="form-label">Price</label>
                    <div className="input-group">
                      <span className="input-group-text fs-20"><GrCurrency /></span>
                      <input type="number" id="variant-price" className="form-control" placeholder="000" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-light mb-3 rounded">
                <div className="row justify-content-end g-2">
                  <div className="col-lg-2">
                    <button className="btn btn-outline-secondary w-100">Create Product</button>
                  </div>
                  <div className="col-lg-2">
                    <button className="btn btn-primary w-100">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}


export default Addproducts