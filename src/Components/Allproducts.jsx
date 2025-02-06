import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const Allproducts = () => {
    return (
        <>
           <div className="page-content">
        <div className="container-fluid">

<div className="row">
     <div className="col-xl-12">
          <div className="card">
               <div className="card-header d-flex justify-content-between align-items-center gap-1">
                    <h4 className="card-title flex-grow-1">All Product List</h4>

                    <Link to="/add-products"className="btn btn-sm btn-primary">
                    Add Product
                    </Link>

                    
               </div>
               <div>
                    <div className="table-responsive">
                         <table className="table align-middle mb-0 table-hover table-centered">
                              <thead className="bg-light-subtle">
                                   <tr>
                                        <th style={{width: '20px'}}>
                                             <div className="form-check ms-1">
                                                  <input type="checkbox" className="form-check-input" id="customCheck1" />
                                                  <label className="form-check-label" for="customCheck1"></label>
                                             </div>
                                        </th>
                                        <th>Product Name & Size</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                        <th>Category</th>
                                        <th>Rating</th>
                                        <th>Action</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   <tr>
                                        <td>
                                             <div className="form-check ms-1">
                                                  <input type="checkbox" className="form-check-input" id="customCheck2" />
                                                  <label className="form-check-label" for="customCheck2">&nbsp;</label>
                                             </div>
                                        </td>
                                        <td>
                                             <div className="d-flex align-items-center gap-2">
                                                  <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                                                       <img src="https://techzaa.in/larkon/admin/assets/images/product/p-1.png" alt="" className="avatar-md" />
                                                  </div>
                                                  <div>
                                                       <a href="#!" className="text-dark fw-medium fs-15">Black T-shirt</a>
                                                       <p className="text-muted mb-0 mt-1 fs-13"><span>Size : </span>S , M , L , Xl </p>
                                                  </div>
                                             </div>

                                        </td>
                                        <td>$80.00</td>
                                        <td>
                                             <p className="mb-1 text-muted"><span className="text-dark fw-medium">486 </span> </p>
                                             
                                        </td>
                                        <td> Fashion</td>
                                        <td> <span className="badge p-1 bg-light text-dark fs-12 me-1"><i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i> 4.5</span> 55 Review</td>
                                        <td>
                                             <div className="d-flex gap-2">
                                                  <a href="#!" className="btn btn-light btn-sm"><iconify-icon icon="solar:eye-broken" className="align-middle fs-18"></iconify-icon></a>
                                                  <a href="#!" className="btn btn-soft-primary btn-sm"><iconify-icon icon="solar:pen-2-broken" className="align-middle fs-18"></iconify-icon></a>
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

export default Allproducts