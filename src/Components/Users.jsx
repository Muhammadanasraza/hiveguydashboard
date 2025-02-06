import { Link } from "react-router-dom";
const Users = () => {
    return (

        <>
            <div className="page-content">


                <div className="container-xxl">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="d-flex card-header justify-content-between align-items-center w-100">
                                
                                    <h4 className="card-title">All User</h4>
                                    <Link to="/add-users"className="btn btn-sm btn-primary">
                    Add Users
                    </Link>  

                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table align-middle mb-0 table-hover table-centered">
                                    <thead className="bg-light-subtle">
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Number</th>
    <th>Role</th>
    <th>Created At</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>John Doe</td>
    <td>johndoe@example.com</td>
    <td>(123) 456-7890</td>
    <td>Admin</td>
    <td>Jan 30, 2025</td>
    <td>
      <div className="d-flex gap-2">
        <Link to="../user-details" className="btn btn-soft-primary btn-sm">
          <iconify-icon icon="solar:pen-2-broken" className="align-middle fs-18"></iconify-icon>
        </Link>
        <a href="#!" className="btn btn-soft-danger btn-sm">
          <iconify-icon icon="solar:trash-bin-minimalistic-2-broken" className="align-middle fs-18"></iconify-icon>
        </a>
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

export default Users