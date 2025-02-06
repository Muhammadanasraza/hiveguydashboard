import { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { PiSubtitles } from "react-icons/pi";
import Select from "react-dropdown-select";
const Vendorcreate = () => {



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


    const [formData, setFormData] = useState({
        storeName: "",
        username: "",
        businessType: "",
        streetAddress: "",
        city: "",
        postalCode: "",
        state: "",
        bankName: "",
        accountNumber: "",
        iban: "",
        bankAddress: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can add form submission logic here
        console.log(formData);
      };
    return (
        <>
            <div class="page-content">


                <div class="container-xxl">

                    <div class="row">
                    <div class="col-xl-3 col-md-6">
                              <div class="card">
                                   <div class="card-body">
                                        <div class="position-relative bg-light p-2 rounded text-center">
                                             <img src="https://techzaa.in/larkon/admin/assets/images/seller/zara.svg" alt="" class="avatar-xxl"/>
                                             <div class="position-absolute top-0 end-0 m-1">
                                                  <div class="dropdown">
                                                       <a href="#" class="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <iconify-icon icon="iconamoon:menu-kebab-vertical-circle-duotone" class="fs-20 align-middle text-muted"></iconify-icon>
                                                       </a>
                                                      
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="d-flex flex-wrap justify-content-between my-3">
                                             <div>
                                                  <h4 class="mb-1">ZARA International<span class="text-muted fs-13 ms-1">(Fashion) </span></h4>
                                                  
                                             </div>
                                            
                                        </div>
                                        
                                        <div class="d-flex align-items-center justify-content-between mt-3 mb-1">
                                             
                                            
                                        </div>
                                        <div class="">
                                             <p class="d-flex align-items-center gap-2 mb-1"><iconify-icon icon="solar:point-on-map-bold-duotone" class="fs-18 text-primary"></iconify-icon>4604 , Philli Lane Kiowa IN 47404</p>
                                             <p class="d-flex align-items-center gap-2 mb-1"><iconify-icon icon="solar:letter-bold-duotone" class="fs-18 text-primary"></iconify-icon>abc@gmail.com</p>
                                             <p class="d-flex align-items-center gap-2 mb-0"><iconify-icon icon="solar:outgoing-call-rounded-bold-duotone" class="fs-20 text-primary"></iconify-icon>+243 812-801-9335</p>
                                        </div>
                                
                                   </div>
                              </div>
                         </div>
                        <div class="col-xl-9 col-lg-9 ">
                         
    <div className="container">
      <form onSubmit={handleSubmit}>
        {/* Seller Logo Card */}
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Seller Logo</h4>
          </div>
          <div className="card-body">
            <input type="file" name="logo" className="form-control" />
          </div>
        </div>

        {/* Store Details Card */}
        <div className="card mt-3">
          <div className="card-header">
            <h4 className="card-title">Store Details</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 mt-2">
                <label htmlFor="storeName" className="form-label">Store Name</label>
                <input
                  type="text"
                  name="storeName"
                  id="storeName"
                  className="form-control"
                  value={formData.storeName}
                  onChange={handleChange}
                  placeholder="Enter Store Name"
                />
              </div>

              <div className="col-lg-6 mt-2">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter Username"
                />
              </div>

              <div className="col-lg-6 mt-2 mt-2">
                <label htmlFor="businessType" className="form-label">Business Type</label>
                <Select value={selectedOption} onChange={handleChanges} options={options} placeholder="Search categories" />
              </div>
            </div>
          </div>
        </div>

        {/* Address Details Card */}
        <div className="card mt-3">
          <div className="card-header">
            <h4 className="card-title">Address Details</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 mt-2">
                <label htmlFor="streetAddress" className="form-label">Street Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  className="form-control"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  placeholder="Enter Street Address"
                />
              </div>

              <div className="col-lg-6 mt-2">
                <label htmlFor="city" className="form-label">City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="form-control"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter City"
                />
              </div>

              <div className="col-lg-6 mt-2">
                <label htmlFor="postalCode" className="form-label">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  id="postalCode"
                  className="form-control"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Enter Postal Code"
                />
              </div>

              <div className="col-lg-6 mt-2">
                <label htmlFor="state" className="form-label">State</label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="form-control"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter State"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bank Details Card */}
        <div className="card mt-3">
          <div className="card-header">
            <h4 className="card-title">Bank Details</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 mt-2">
                <label htmlFor="bankName" className="form-label">Bank Name</label>
                <input
                  type="text"
                  name="bankName"
                  id="bankName"
                  className="form-control"
                  value={formData.bankName}
                  onChange={handleChange}
                  placeholder="Enter Bank Name"
                />
              </div>

              <div className="col-lg-6 mt-2">
                <label htmlFor="accountNumber" className="form-label">Account Number</label>
                <input
                  type="text"
                  name="accountNumber"
                  id="accountNumber"
                  className="form-control"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  placeholder="Enter Account Number"
                />
              </div>

              <div className="col-lg-6 mt-2">
                <label htmlFor="iban" className="form-label">IBAN</label>
                <input
                  type="text"
                  name="iban"
                  id="iban"
                  className="form-control"
                  value={formData.iban}
                  onChange={handleChange}
                  placeholder="Enter IBAN"
                />
              </div>

              <div className="col-lg-6 mt-2">
                <label htmlFor="bankAddress" className="form-label">Bank Address</label>
                <input
                  type="text"
                  name="bankAddress"
                  id="bankAddress"
                  className="form-control"
                  value={formData.bankAddress}
                  onChange={handleChange}
                  placeholder="Enter Bank Address"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-3">
          <button type="submit" className="btn btn-primary w-100">Save Changes</button>
        </div>
      </form>
    </div>
                        </div>
                    </div>


                </div>



            </div></>

    )
}
export default Vendorcreate