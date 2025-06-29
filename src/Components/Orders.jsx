import { Link } from "react-router-dom";
const Orders = () => {
    return (
        <>
        <div className="page-content">

 
<div className="container-xxl">

     <div className="row orders">
          <div className="col-md-6 col-xl-3">
               <div className="card">
                    <div className="card-body">
                         <div className="d-flex align-items-center justify-content-between">
                              <div>
                                   <h4 className="card-title mb-2">Payment Refund</h4>
                                   <p className="text-muted fw-medium fs-22 mb-0">490</p>
                              </div>
                              <div>
                                   <div className="avatar-md bg-primary bg-opacity-10 rounded">
                                        <iconify-icon icon="solar:chat-round-money-broken" className="fs-32 text-primary avatar-title"></iconify-icon>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <div className="col-md-6 col-xl-3">
               <div className="card">
                    <div className="card-body">
                         <div className="d-flex align-items-center justify-content-between">
                              <div>
                                   <h4 className="card-title mb-2">Order Cancel</h4>
                                   <p className="text-muted fw-medium fs-22 mb-0">241</p>
                              </div>
                              <div>
                                   <div className="avatar-md bg-primary bg-opacity-10 rounded">
                                        <iconify-icon icon="solar:cart-cross-broken" className="fs-32 text-primary avatar-title"></iconify-icon>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>

          <div className="col-md-6 col-xl-3">
               <div className="card">
                    <div className="card-body">
                         <div className="d-flex align-items-center justify-content-between">
                              <div>
                                   <h4 className="card-title mb-2">Order Shipped</h4>
                                   <p className="text-muted fw-medium fs-22 mb-0">630</p>
                              </div>
                              <div>
                                   <div className="avatar-md bg-primary bg-opacity-10 rounded">
                                        <iconify-icon icon="solar:box-broken" className="fs-32 text-primary avatar-title"></iconify-icon>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>

          <div className="col-md-6 col-xl-3">
               <div className="card">
                    <div className="card-body">
                         <div className="d-flex align-items-center justify-content-between">
                              <div>
                                   <h4 className="card-title mb-2">Order Delivering</h4>
                                   <p className="text-muted fw-medium fs-22 mb-0">170</p>
                              </div>
                              <div>
                                   <div className="avatar-md bg-primary bg-opacity-10 rounded">
                                        <iconify-icon icon="solar:tram-broken" className="fs-32 text-primary avatar-title"></iconify-icon>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>

          <div className="col-md-6 col-xl-3">
               <div className="card">
                    <div className="card-body">
                         <div className="d-flex align-items-center justify-content-between">
                              <div>
                                   <h4 className="card-title mb-2">Pending Review</h4>
                                   <p className="text-muted fw-medium fs-22 mb-0">210</p>
                              </div>
                              <div>
                                   <div className="avatar-md bg-primary bg-opacity-10 rounded">
                                        <iconify-icon icon="solar:clipboard-remove-broken" className="fs-32 text-primary avatar-title"></iconify-icon>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <div className="col-md-6 col-xl-3">
               <div className="card">
                    <div className="card-body">
                         <div className="d-flex align-items-center justify-content-between">
                              <div>
                                   <h4 className="card-title mb-2">Pending Payment</h4>
                                   <p className="text-muted fw-medium fs-22 mb-0">608</p>
                              </div>
                              <div>
                                   <div className="avatar-md bg-primary bg-opacity-10 rounded">
                                        <iconify-icon icon="solar:clock-circle-broken" className="fs-32 text-primary avatar-title"></iconify-icon>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <div className="col-md-6 col-xl-3">
               <div className="card">
                    <div className="card-body">
                         <div className="d-flex align-items-center justify-content-between">
                              <div>
                                   <h4 className="card-title mb-2">Delivered</h4>
                                   <p className="text-muted fw-medium fs-22 mb-0">200</p>
                              </div>
                              <div>
                                   <div className="avatar-md bg-primary bg-opacity-10 rounded">
                                        <iconify-icon icon="solar:clipboard-check-broken" className="fs-32 text-primary avatar-title"></iconify-icon>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <div className="col-md-6 col-xl-3">
               <div className="card">
                    <div className="card-body">
                         <div className="d-flex align-items-center justify-content-between">
                              <div>
                                   <h4 className="card-title mb-2">In Progress</h4>
                                   <p className="text-muted fw-medium fs-22 mb-0">656</p>
                              </div>
                              <div>
                                   <div className="avatar-md bg-primary bg-opacity-10 rounded">
                                        <iconify-icon icon="solar:inbox-line-broken" className="fs-32 text-primary avatar-title"></iconify-icon>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>

     <div className="row">
          <div className="col-xl-12">
               <div className="card">
                    <div className="d-flex card-header justify-content-between align-items-center">
                         <div>
                              <h4 className="card-title">All Order List</h4>
                         </div>
                        
                    </div>
                    <div className="card-body p-0">
                         <div className="table-responsive">
                              <table className="table align-middle mb-0 table-hover table-centered">
                                   <thead className="bg-light-subtle">
                                        <tr>
                                             <th>Order ID</th>
                                             <th>Created at</th>
                                             <th>Customer</th>
                                           
                                             <th>Total</th>
                                             <th>Payment Status</th>
                                             <th>Items</th>
                                             
                                             <th>Order Status</th>
                                             <th>Action</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        <tr>
                                             <td>
                                                  #583488/80
                                             </td>
                                             <td>Apr 23 , 2024</td>
                                             <td>
                                                  <a href="#!" className="link-primary fw-medium">Gail C. Anderson</a>
                                             </td>
                                            
                                             <td> $1,230.00</td>
                                             <td> <span className="badge bg-light text-dark  px-2 py-1 fs-13">Unpaid</span></td>
                                             <td> 4</td>
                                            
                                             <td> <span className="badge border border-secondary text-secondary  px-2 py-1 fs-13">Draft</span></td>
                                             <td>
                                                  <div className="d-flex gap-2">
                                                     
                                                       <Link to="../order-details" className="btn btn-soft-primary btn-sm"><iconify-icon icon="solar:pen-2-broken" className="align-middle fs-18"></iconify-icon></Link>
                                                       <a href="#!" className="btn btn-soft-danger btn-sm"><iconify-icon icon="solar:trash-bin-minimalistic-2-broken" className="align-middle fs-18"></iconify-icon></a>
                                                  </div>
                                             </td>
                                        </tr>

                                      

                                   </tbody>
                              </table>
                         </div>
                       
                    </div>
                    <div className="card-footer border-top">
                         <nav aria-label="Page navigation example">
                              <ul className="pagination justify-content-end mb-0">
                                   <li className="page-item"><a className="page-link" href="javascript:void(0);">Previous</a></li>
                                   <li className="page-item active"><a className="page-link" href="javascript:void(0);">1</a></li>
                                   <li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
                                   <li className="page-item"><a className="page-link" href="javascript:void(0);">3</a></li>
                                   <li className="page-item"><a className="page-link" href="javascript:void(0);">Next</a></li>
                              </ul>
                         </nav>
                    </div>
               </div>
          </div>

     </div>

</div>
 

 

</div>
        </>
    )
}
export default Orders