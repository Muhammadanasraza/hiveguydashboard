import { useState, useCallback } from 'react';
import Select from "react-dropdown-select";
import { useDropzone } from 'react-dropzone';
import logo from '../../assets/img/logo-light.png';
import { Link } from "react-router-dom";
const Setup = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        storeName: "",
        storeUsername: "",
        storeCategory: "",
        streetAddress: "",
        city: "",
        postalCode: "",
        state: "",
        bankName: "",
        accountNumber: "",
        iban: "",
        bankAddress: "",
        sellerLogo: null,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, sellerLogo: e.target.files[0] });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
    };

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

    const handleChanges = (selectedOption) => {
        setSelectedOption(selectedOption);
    };




    const [files, setFiles] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        // Create image preview URLs
        const imagePreviews = acceptedFiles.map(file => URL.createObjectURL(file));
        setFiles(imagePreviews);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (

        <>
            <div className="d-flex flex-column h-100 p-3">
                <div className="d-flex flex-column flex-grow-1">
                    <div className="row h-100">
                        <div className="col-xxl-7">
                            <div className="container mt-5">
                                <div className="card shadow-sm">
                                    <div className="card-header bg-primary text-white text-center">
                                        <h2 className='text-white'>Store Setup</h2>
                                    </div>
                                    <div className="card-body " style={{ height: "auto" }}>
                                        <form onSubmit={handleSubmit}>
                                            {step === 1 && (
                                                <div>
                                                    <h5 className="mb-3">Store Details</h5>
                                                    <input type="text" name="storeName" value={formData.storeName} onChange={handleChange} className="form-control mb-2" placeholder="Store Name" required />
                                                    <input type="text" name="storeUsername" value={formData.storeUsername} onChange={handleChange} className="form-control mb-2" placeholder="Store Username" required />
                                                    <Select value={selectedOption} onChange={handleChanges} options={options} placeholder="Search categories" />

                                                    <div className='d-flex  justify-content-end mt-3'>
                                                        <button type="button" onClick={nextStep} className="btn btn-primary">Next</button>
                                                    </div>
                                                </div>
                                            )}

                                            {step === 2 && (
                                                <div>
                                                    <h5 className="mb-3">Address Details</h5>
                                                    <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} className="form-control mb-2" placeholder="Street Address" required />
                                                    <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-control mb-2" placeholder="City" required />
                                                    <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} className="form-control mb-2" placeholder="Postal Code" required />
                                                    <input type="text" name="state" value={formData.state} onChange={handleChange} className="form-control mb-2" placeholder="State" required />
                                                    <div className="d-flex  justify-content-between mt-3">
                                                        <button type="button" onClick={prevStep} className="btn btn-secondary me-2">Back</button>
                                                        <button type="button" onClick={nextStep} className="btn btn-primary">Next</button>
                                                    </div>
                                                </div>
                                            )}

                                            {step === 3 && (
                                                <div>
                                                    <h5 className="mb-3">Bank Details</h5>
                                                    <input type="text" name="bankName" value={formData.bankName} onChange={handleChange} className="form-control mb-2" placeholder="Bank Name" required />
                                                    <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} className="form-control mb-2" placeholder="Account Number" required />
                                                    <input type="text" name="iban" value={formData.iban} onChange={handleChange} className="form-control mb-2" placeholder="IBAN" required />
                                                    <input type="text" name="bankAddress" value={formData.bankAddress} onChange={handleChange} className="form-control mb-2" placeholder="Bank Address" required />
                                                    <div className="d-flex  justify-content-between mt-3">
                                                        <button type="button" onClick={prevStep} className="btn btn-secondary me-2">Back</button>
                                                        <button type="button" onClick={nextStep} className="btn btn-primary">Next</button>
                                                    </div>
                                                </div>
                                            )}

                                            {step === 4 && (
                                                <div>
                                                    <h5 className="mb-3">Upload Seller Logo</h5>
                                                    <div {...getRootProps()} className="dropzone">
                                                        <input {...getInputProps()} />
                                                        {isDragActive ? (
                                                            <p>Drop the files here ...</p>
                                                        ) : (
                                                            <p>Drag 'n' drop some files here, or click to select files</p>
                                                        )}
                                                    </div>
                                                    <div style={{ display: 'flex', marginTop: '20px' }}>
                                                        {files.map((file, index) => (
                                                            <div key={index} style={{ marginRight: '10px' }}>
                                                                <img src={file} alt={`preview-${index}`} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="d-flex  justify-content-between mt-3">

                                                        <button type="button" onClick={prevStep} className="btn btn-secondary me-2">Back</button>
                                                        <button type="submit" className="btn btn-primary">Submit</button>

                                                    </div>
                                                </div>
                                            )}
                                        </form>
                                    </div>
                                </div>
                                        <p className="text-danger text-center">Already have an account? <Link to="../login" className="text-dark fw-bold ms-1"> Sign In</Link></p>
                            </div>

                        </div>

                        {/* <div className="col-xxl-5 d-none d-xxl-flex">
                            <div className="card h-100 mb-0 overflow-hidden">
                                <div className="d-flex flex-column h-100">
                                    <img src="assets/images/small/img-10.jpg" alt="" className="w-100 h-100" />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Setup