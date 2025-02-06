import { IoNotificationsCircleOutline } from "react-icons/io5";
import Switch from '@mui/material/Switch';
const Header = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <>
        



                <header  className="topbar mb-3">
                    <div  className="container-fluid">
                        <div  className="navbar-header">
                            <div  className="d-flex align-items-center">


                                 



                                <div  className="topbar-item">
                                    <h4  className="fw-bold topbar-button pe-none text-uppercase mb-0">Store Name</h4>
                                </div>
                            </div>

                            <div  className="d-flex align-items-center gap-1">


                            <Switch {...label}  defaultChecked />
                              


                                <div  className="dropdown topbar-item">
                                    <button type="button"  className="topbar-button position-relative" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <IoNotificationsCircleOutline size={25} color={'white'} />
                                        <span  className="position-absolute topbar-badge fs-10 translate-middle badge bg-danger rounded-pill">3<span  className="visually-hidden">unread messages</span></span>
                                    </button>
                                    <div  className="dropdown-menu py-0 dropdown-lg dropdown-menu-end" aria-labelledby="page-header-notifications-dropdown">
                                        <div  className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                                            <div  className="row align-items-center">
                                                <div  className="col">
                                                    <h6  className="m-0 fs-16 fw-semibold"> Notifications</h6>
                                                </div>
                                                <div  className="col-auto">
                                                    <a    className="text-dark text-decoration-underline">
                                                        <small>Clear All</small>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-simplebar  >


                                            <a    className="dropdown-item py-3 border-bottom text-wrap">
                                                <div  className="d-flex">
                                                    <div  className="flex-shrink-0">
                                                        <img src="https://techzaa.in/larkon/admin/assets/images/users/avatar-1.jpg"  className="img-fluid me-2 avatar-sm rounded-circle" alt="avatar-1" />
                                                    </div>
                                                    <div  className="flex-grow-1">
                                                        <p  className="mb-0"><span  className="fw-medium">Josephine Thompson </span>commented on admin panel <span>" Wow 😍! this admin looks good and awesome design"</span></p>
                                                    </div>
                                                </div>
                                            </a>

                                            <a    className="dropdown-item py-3 border-bottom">
                                                <div  className="d-flex">
                                                    <div  className="flex-shrink-0">
                                                        <div  className="avatar-sm me-2">
                                                            <span  className="avatar-title bg-soft-info text-info fs-20 rounded-circle">
                                                                D
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div  className="flex-grow-1">
                                                        <p  className="mb-0 fw-semibold">Donoghue Susan</p>
                                                        <p  className="mb-0 text-wrap">
                                                            Hi, How are you? What about our next meeting
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>

                                            <a    className="dropdown-item py-3 border-bottom">
                                                <div  className="d-flex">
                                                    <div  className="flex-shrink-0">
                                                        <img src="assets/images/users/avatar-3.jpg"  className="img-fluid me-2 avatar-sm rounded-circle" alt="avatar-3" />
                                                    </div>
                                                    <div  className="flex-grow-1">
                                                        <p  className="mb-0 fw-semibold">Jacob Gines</p>
                                                        <p  className="mb-0 text-wrap">Answered to your comment on the cash flow forecast's graph 🔔.</p>
                                                    </div>
                                                </div>
                                            </a>

                                            <a    className="dropdown-item py-3 border-bottom">
                                                <div  className="d-flex">
                                                    <div  className="flex-shrink-0">
                                                        <div  className="avatar-sm me-2">
                                                            <span  className="avatar-title bg-soft-warning text-warning fs-20 rounded-circle">
                                                                <iconify-icon icon="iconamoon:comment-dots-duotone"></iconify-icon>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div  className="flex-grow-1">
                                                        <p  className="mb-0 fw-semibold text-wrap">You have received <b>20</b> new messages in the
                                                            conversation</p>
                                                    </div>
                                                </div>
                                            </a>

                                            <a    className="dropdown-item py-3 border-bottom">
                                                <div  className="d-flex">
                                                    <div  className="flex-shrink-0">
                                                        <img src="assets/images/users/avatar-5.jpg"  className="img-fluid me-2 avatar-sm rounded-circle" alt="avatar-5" />
                                                    </div>
                                                    <div  className="flex-grow-1">
                                                        <p  className="mb-0 fw-semibold">Shawn Bunch</p>
                                                        <p  className="mb-0 text-wrap">
                                                            Commented on Admin
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div  className="text-center py-3">
                                            <a    className="btn btn-primary btn-sm">View All Notification <i  className="bx bx-right-arrow-alt ms-1"></i></a>
                                        </div>
                                    </div>
                                </div>

                             
                                

                           
                               

                               
                                <div  className="dropdown topbar-item">
                                    <a type="button"  className="topbar-button" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span  className="d-flex align-items-center">
                                            <img  className="rounded-circle" width="32" src="https://techzaa.in/larkon/admin/assets/images/users/avatar-1.jpg" alt="avatar-3" />
                                        </span>
                                    </a>
                                  
                                </div>


                                 
                            </div>
                        </div>
                    </div>
                </header>

                
            </>
            )
} 
export default Header