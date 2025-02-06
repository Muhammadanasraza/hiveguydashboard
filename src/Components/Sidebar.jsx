import logo from '../assets/img/logo-light.png';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiCoupon5Line } from "react-icons/ri";
import { MdOutlineStorefront, MdLocalGroceryStore } from "react-icons/md";
import { TbUserSquare } from "react-icons/tb";
import { FaQuestionCircle, FaHeadset } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { PiWalletFill } from "react-icons/pi";

const Sidebar = () => {
     return (
          <>
               <div className="main-nav">

                    <div className="logo-box">
                         <a className="logo-dark">
                              <img src="assets/images/logo-sm.png" className="logo-sm" alt="logo sm" />
                              <img src={logo} className="logo-lg" alt="logo dark" />
                         </a>

                         <a className="logo-light">
                              <img src="assets/images/logo-sm.png" className="logo-sm" alt="logo sm" />
                              <img src={logo} className="logo-lg" alt="logo light" />
                         </a>
                    </div>


                    <button type="button" className="button-sm-hover" aria-label="Show Full Sidebar">
                         <iconify-icon icon="solar:double-alt-arrow-right-bold-duotone" className="button-sm-hover-icon"></iconify-icon>
                    </button>

                    <div className="scrollbar" data-simplebar>
                         <ul className="navbar-nav" id="navbar-nav">

                              <li className="menu-title">General</li>

                              <li className="nav-item">
                                   <Link to="/dashboard" className="nav-link">
                                        <span className="nav-icon">
                                             <BiSolidDashboard />
                                        </span>
                                        <span className="nav-text"> Dashboard </span>
                                   </Link>
                              </li>


                              <li className="nav-item">
                                   <a className="nav-link menu-arrow" href="#sidebarProducts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarProducts">
                                        <span className="nav-icon">
                                             <iconify-icon icon="solar:t-shirt-bold-duotone"></iconify-icon>
                                        </span>
                                        <span className="nav-text w-100 d-flex justify-content-between"> <strong>Products</strong>   <IoIosArrowDown />
                                        </span>
                                   </a>
                                   <div className="collapse" id="sidebarProducts">
                                        <ul className="nav sub-navbar-nav">
                                             <li className="sub-nav-item">
                                                  <Link to="/all-products" className="sub-nav-link" >List</Link>
                                             </li>


                                             <li className="sub-nav-item">
                                                  <Link to="/add-products" className="sub-nav-link"  >Create             </Link>
                                             </li>

                                             <li className="sub-nav-item">
                                                  <Link to="/attribute" className="sub-nav-link" >Attribute</Link>
                                             </li>
                                        </ul>
                                   </div>
                              </li>

                              {/* <li   className="nav-item">
                              <a   className="nav-link menu-arrow" href="#sidebarCategory" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCategory">
                                   <span   className="nav-icon">
                                        <iconify-icon icon="solar:clipboard-list-bold-duotone"></iconify-icon>
                                   </span>
                                   <span   className="nav-text"> Vendor </span>
                              </a>
                              <div   className="collapse" id="sidebarCategory">
                                   <ul   className="nav sub-navbar-nav">
                                        <li   className="sub-nav-item">
                                        <Link to="/vendor"   className="sub-nav-link" >List</Link>
                                        </li>                         
                                     
                                        <li   className="sub-nav-item">
                                        <Link to="/vendor-create"   className="sub-nav-link" >Create</Link>
                                        </li>
                                   </ul>
                              </div>
                         </li> */}

                              <li className="nav-item">
                                   <Link to="/orders" className="nav-link">
                                        <span className="nav-icon">
                                             <MdLocalGroceryStore />
                                        </span>
                                        <span className="nav-text">   Orders    </span>
                                   </Link>
                              </li>

                              <li className="nav-item">
                                   <Link to="/orders" className="nav-link">
                                        <span className="nav-icon">
                                             <PiWalletFill />
                                        </span>
                                        <span className="nav-text">   Wallet    </span>
                                   </Link>
                              </li>










                              {/* <li   className="nav-item">
                              <a   className="nav-link" href="settings.html">
                                   <span   className="nav-icon">
                                        <iconify-icon icon="solar:settings-bold-duotone"></iconify-icon>
                                   </span>
                                   <span   className="nav-text"> Settings </span>
                              </a>
                         </li> */}

                              <li className="menu-title mt-2">Settings</li>

                              <li className="nav-item">
                                   <Link to="vendor-create" className="nav-link"  >
                                        <span className="nav-icon">
                                             <MdOutlineStorefront />
                                        </span>
                                        <span className="nav-text">My Store </span>
                                   </Link>
                              </li>
                              <li className="nav-item">
                                   <Link to="users" className="nav-link"  >
                                        <span className="nav-icon">
                                             <TbUserSquare />
                                        </span>
                                        <span className="nav-text">Users</span>
                                   </Link>
                              </li>











                              <li className="nav-item">
                                   <a className="nav-link menu-arrow" href="#sidebarCoupons" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCoupons">
                                        <span className="nav-icon">
                                             <RiCoupon5Line />
                                        </span>
                                        <span className="nav-text w-100 d-flex justify-content-between"> <strong> Coupons  </strong>  <IoIosArrowDown /></span>
                                   </a>
                                   <div className="collapse" id="sidebarCoupons">
                                        <ul className="nav sub-navbar-nav">
                                             <li className="sub-nav-item">
                                                  <Link className="sub-nav-link" to="coupon-list">List</Link>
                                             </li>
                                             <li className="sub-nav-item">
                                                  <Link className="sub-nav-link" to="create-coupons">Add</Link>
                                             </li>
                                        </ul>
                                   </div>
                              </li>















                              <li className="nav-item">
                                   <Link className="nav-link" to="../help-center">
                                        <span className="nav-icon">
                                             <FaHeadset />
                                        </span>
                                        <span className="nav-text"> Help Center </span>
                                   </Link>
                              </li>

                              <li className="nav-item">
                                   <a className="nav-link" href="help-center.html">
                                        <span className="nav-icon">
                                             <FaQuestionCircle />
                                        </span>
                                        <span className="nav-text"> Faqs </span>
                                   </a>
                              </li>


                         </ul>
                    </div>
               </div>
          </>
     )
}

export default Sidebar