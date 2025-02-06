import { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import Select from "react-dropdown-select";
const OrderDetails = () => {

    
    
        const [selectedOption, setSelectedOption] = useState(null);
    
        const options = [
            { value: 'order_received', label: 'Order Received' },
            { value: 'pending', label: 'Pending' },
            { value: 'confirmed', label: 'Confirmed' },
            { value: 'processing', label: 'Processing' },
            { value: 'ready_for_pickup', label: 'Ready for Pickup' },
            { value: 'shipped', label: 'Shipped' },
            { value: 'handover_to_delivery', label: 'Handed Over to Delivery Guy' }
        ];
    
        const handleChange = (selectedOption) => {
            setSelectedOption(selectedOption);
        };
    
    
  return (
    <>
    <div className="page-content">

 
<div className="container-xxl">

     <div className="row">
          <div className="col-xl-8 col-lg-8">
               <div className="row">
                    <div className="col-lg-12">
                         <div className="card">
                              <div className="card-body">
                                   <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                                        <div className="d-flex justify-content-between w-100">
                                             <h4 className="fw-medium text-dark d-flex align-items-center gap-2">#0758267/90 <span className="badge bg-success-subtle text-success  px-2 py-1 fs-13">Paid</span></h4><span className="border border-warning text-warning fs-13 px-2 py-1 rounded">In Progress</span>
                                           
                                        </div>
                                        <p className="mb-0">Order / Order Details / #0758267/90 - April 23 , 2024 at 6:23 pm</p>

                                   </div>

                                    {/* <div className="mt-4">
                                            <h4 className="fw-medium text-dark">Progress</h4>
                                    </div> */}
                                   {/* <div className="row row-cols-xxl-5 row-cols-md-2 row-cols-1">
                                        <div className="col">
                                             <div className="progress mt-3"  >
                                                  <div className="progress-bar progress-bar  progress-bar-striped progress-bar-animated bg-success" role="progressbar"    aria-valuenow="70" aria-valuemin="0" aria-valuemax="70">
                                                  </div>
                                             </div>
                                             <p className="mb-0 mt-2">Order Confirming</p>
                                        </div>
                                        <div className="col">
                                             <div className="progress mt-3"  >
                                                  <div className="progress-bar progress-bar  progress-bar-striped progress-bar-animated bg-success" role="progressbar"    aria-valuenow="70" aria-valuemin="0" aria-valuemax="70">
                                                  </div>
                                             </div>
                                             <p className="mb-0 mt-2">Payment Pending</p>
                                        </div>
                                        <div className="col">
                                             <div className="progress mt-3"  >
                                                  <div className="progress-bar progress-bar  progress-bar-striped progress-bar-animated bg-warning" role="progressbar"   aria-valuenow="70" aria-valuemin="0" aria-valuemax="70">
                                                  </div>
                                             </div>
                                             <div className="d-flex align-items-center gap-2 mt-2">
                                                  <p className="mb-0">Processing</p>
                                                  <div className="spinner-border spinner-border-sm text-warning" role="status">
                                                       <span className="visually-hidden">Loading...</span>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col">
                                             <div className="progress mt-3"  >
                                                  <div className="progress-bar progress-bar  progress-bar-striped progress-bar-animated bg-primary" role="progressbar"   aria-valuenow="70" aria-valuemin="0" aria-valuemax="70">
                                                  </div>
                                             </div>
                                             <p className="mb-0 mt-2">Shipping</p>
                                        </div>
                                        <div className="col">
                                             <div className="progress mt-3"  >
                                                  <div className="progress-bar progress-bar  progress-bar-striped progress-bar-animated bg-primary" role="progressbar"   aria-valuenow="70" aria-valuemin="0" aria-valuemax="70">
                                                  </div>
                                             </div>
                                             <p className="mb-0 mt-2">Delivered</p>
                                        </div>
                                   </div> */}
                              </div>
                              <div className="card-footer d-flex flex-wrap align-items-center justify-content-between bg-light-subtle gap-2">
                                        <div className="w-100">
                                   <Select value={selectedOption} onChange={handleChange} options={options} placeholder="Search categories"  />
                                   </div>
                              </div>
                         </div>
                         <div className="card">
                              <div className="card-header">
                                   <h4 className="card-title d-flex justify-content-between"> <span>Product</span> <span>Total : $8</span> </h4>
                                   
                              </div>
                              <div className="card-body">
                                   <div className="table-responsive">
                                        <table className="table align-middle mb-0 table-hover table-centered">
                                             <thead className="bg-light-subtle border-bottom">
                                                  <tr>
                                                       <th>Product Name &amp; Size</th>
                                                       <th>Status</th>
                                                       <th>Quantity</th>
                                                       <th>Price</th>
                                                      
                                                  </tr>
                                             </thead>
                                             <tbody>
                                                  <tr>
                                                       <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                 <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                                                                      <img src="https://techzaa.in/larkon/admin/assets/images/product/p-1.png" alt="" className="avatar-md"/>
                                                                 </div>
                                                                 <div>
                                                                      <a href="#!" className="text-dark fw-medium fs-15">Men Black Slim Fit T-shirt</a>
                                                                      <p className="text-muted mb-0 mt-1 fs-13"><span>Size : </span>M</p>
                                                                 </div>
                                                            </div>

                                                       </td>

                                                       <td>
                                                            <span className="badge bg-success-subtle text-success  px-2 py-1 fs-13">Ready</span>
                                                       </td>
                                                       <td> 1</td>
                                                       <td>$80.00</td>
                                                     
                                                  </tr>


                                                
                                             </tbody>
                                        </table>
                                   </div>
                              </div>
                         </div>
                         <div className="card">
                              <div className="card-header">
                                   <h4 className="card-title">Order Timeline</h4>
                              </div>
                              <div className="card-body">
                                   <div className="position-relative ms-2">
                                        <span className="position-absolute start-0  top-0 border border-dashed h-100"></span>

                                     
                                        <div className="position-relative ps-4">
                                             <div className="mb-2">
                                                  <span className="position-absolute start-0 avatar-sm translate-middle-x bg-light d-inline-flex align-items-center justify-content-center rounded-circle text-success fs-20">
                                                  <div class="spinner-border spinner-border-sm text-warning" role="status">
                                                                           <span class="visually-hidden">Loading...</span>
                                                                      </div>
                                                  </span>
                                                  <div className="ms-2 d-flex flex-wrap gap-2  align-items-center justify-content-between">
                                                       <div>
                                                            <h5 className="m-0 text-dark fw-medium fs-15">Handed Over to Delivery Guy  </h5>
                                                            <p className="mb-0">April 26, 2024, 10:40 am</p>
                                                       </div>
                                                      

                                                  </div>
                                             </div>
                                        </div>


                                        <hr></hr>
                                        <div className="position-relative ps-4">
                                             <div className="mb-2">
                                                  <span className="position-absolute start-0 avatar-sm translate-middle-x bg-light d-inline-flex align-items-center justify-content-center rounded-circle text-success fs-20">
                                                  <FaRegCircleCheck />
                                                  </span>
                                                  <div className="ms-2 d-flex flex-wrap gap-2  align-items-center justify-content-between">
                                                       <div>
                                                            <h5 className="m-0 text-dark fw-medium fs-15">Ready for Pickup  </h5>
                                                            <p className="mb-0">April 25, 2024, 10:40 am</p>
                                                       </div>
                                                      

                                                  </div>
                                             </div>
                                        </div>
                                        <hr></hr>

                                             <div className="position-relative ps-4">
                                             <div className="mb-2">
                                                  <span className="position-absolute start-0 avatar-sm translate-middle-x bg-light d-inline-flex align-items-center justify-content-center rounded-circle text-success fs-20">
                                                  <FaRegCircleCheck />
                                                  </span>
                                                  <div className="ms-2 d-flex flex-wrap gap-2  align-items-center justify-content-between">
                                                       <div>
                                                            <h5 className="m-0 text-dark fw-medium fs-15">Processing  </h5>
                                                            <p className="mb-0">April 24, 2024, 10:40 am</p>
                                                       </div>
                                                      

                                                  </div>
                                             </div>
                                        </div>
                                        <hr></hr>  
                                        <div className="position-relative ps-4">
                                             <div className="mb-2">
                                                  <span className="position-absolute start-0 avatar-sm translate-middle-x bg-light d-inline-flex align-items-center justify-content-center rounded-circle text-success fs-20">
                                                  <FaRegCircleCheck />
                                                  </span>
                                                  <div className="ms-2 d-flex flex-wrap gap-2  align-items-center justify-content-between">
                                                       <div>
                                                            <h5 className="m-0 text-dark fw-medium fs-15">Confirmed </h5>
                                                            <p className="mb-0">April 23, 2024, 10:40 am</p>
                                                       </div>
                                                      

                                                  </div>
                                             </div>
                                        </div>
                                        <hr></hr>

                                        <div className="position-relative ps-4">
                                             <div className="mb-2">
                                                  <span className="position-absolute start-0 avatar-sm translate-middle-x bg-light d-inline-flex align-items-center justify-content-center rounded-circle text-success fs-20">
                                                  <FaRegCircleCheck />
                                                  </span>
                                                  <div className="ms-2 d-flex flex-wrap gap-2  align-items-center justify-content-between">
                                                       <div>
                                                            <h5 className="m-0 text-dark fw-medium fs-15">Pending </h5>
                                                            <p className="mb-0">April 23, 2024, 09:40 am</p>
                                                       </div>
                                                      

                                                  </div>
                                             </div>
                                        </div>
                                        <hr></hr>
                                        <div className="position-relative ps-4">
                                             <div className="mb-2">
                                                  <span className="position-absolute start-0 avatar-sm translate-middle-x bg-light d-inline-flex align-items-center justify-content-center rounded-circle text-success fs-20">
                                                  <FaRegCircleCheck />
                                                  </span>
                                                  <div className="ms-2 d-flex flex-wrap gap-2  align-items-center justify-content-between">
                                                       <div>
                                                            <h5 className="m-0 text-dark fw-medium fs-15">Order Received </h5>
                                                            <p className="mb-0">April 23, 2024, 09:40 am</p>
                                                       </div>
                                                      

                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                        
                    </div>
               </div>
          </div>
          <div className="col-xl-4 col-lg-4">
              
               
               <div className="card">
                    <div className="card-header">
                         <h4 className="card-title">Customer Details</h4>
                    </div>
                    <div className="card-body">
                         <div className="d-flex align-items-center gap-2">
                              {/* <img src="assets/images/users/avatar-1.jpg" alt="" className="avatar rounded-3 border border-light border-3"/> */}
                              <div>
                                   <p className="mb-1">Gaston Lapierre</p>
                                   <a href="#!" className="link-primary fw-medium">hello@dundermuffilin.com</a>
                              </div>
                         </div>
                         <div className="d-flex justify-content-between mt-3">
                              <h5 className="">Contact Number</h5>
                              <div>
                                   <a href="#!"><i className="bx bx-edit-alt fs-18"></i></a>
                              </div>
                         </div>
                         <p className="mb-1">(723) 732-760-5760</p>

                         <div className="d-flex justify-content-between mt-3">
                              <h5 className="">Shipping Address</h5>
                              <div>
                                   <a href="#!"><i className="bx bx-edit-alt fs-18"></i></a>
                              </div>
                         </div>

                         <div>
                              <p className="mb-1">Wilson's Jewelers LTD</p>
                              <p className="mb-1">1344 Hershell Hollow Road</p>
                              <p className="mb-1">Tukwila, WA 98168 </p>
                              <p className="mb-1">United States</p>
                              <p className="">(723) 732-760-5760</p>
                         </div>

                         <div className="d-flex justify-content-between mt-3">
                              <h5 className="">Billing Address</h5>
                              <div>
                                   <a href="#!"><i className="bx bx-edit-alt fs-18"></i></a>
                              </div>
                         </div>

                         <p className="mb-1">Same as shipping address</p>
                    </div>
               </div>
               
          </div>
     </div>
</div>

</div>
</>
  )
}

export default OrderDetails