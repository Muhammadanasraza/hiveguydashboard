import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-dropdown-select";
const CreateCoupons = () => {
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

            <div class="page-content">


                <div class="container-xxl">

                    <div class="row">
                        <div class="col-lg-5">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Coupon Status</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="d-flex gap-2 align-items-center">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault9" checked="true" />
                                                    <label class="form-check-label" for="flexRadioDefault9">
                                                        Active
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault10" />
                                                <label class="form-check-label" for="flexRadioDefault10">
                                                    In Active
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Date Schedule</h4>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <div class="mb-3">
                                            <label for="start-date" class="form-label text-dark">Start Date</label>
                                            <input type="text" id="start-date" class="form-control flatpickr-input active" placeholder="dd-mm-yyyy" readonly="readonly" />
                                        </div>
                                    </form>
                                    <form>
                                        <div class="mb-3">
                                            <label for="end-date" class="form-label text-dark">End Date</label>
                                            <input type="text" id="end-date" class="form-control flatpickr-input active" placeholder="dd-mm-yyyy" readonly="readonly" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-7">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Coupon Information</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label for="coupons-code" class="form-label">Coupons Code</label>
                                                <input type="text" id="coupons-code" name="coupons-code" class="form-control" placeholder="Code enter" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">

                                            <label for="product-categories" class="form-label">Discount Categories</label>
                                            <Select value={selectedOption} onChange={handleChange} options={options} placeholder="Search categories"  />

                                        </div>
                                       
                                        <div class="col-lg-12">
                                            <div class="mb-3">
                                                <label for="coupons-limits" class="form-label">Coupons Limits</label>
                                                <input type="number" id="coupons-limits" name="coupons-limits" class="form-control" placeholder="limits nu" />
                                            </div>
                                        </div>
                                    </div>
                                    <h4 class="card-title mb-3 mt-2">Coupons Types</h4>
                                    <div class="row mb-3">
                                        <div class="col-lg-4">
                                            <div class="d-flex gap-2 align-items-center">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault12" checked="true" />
                                                    <label class="form-check-label" for="flexRadioDefault12">
                                                        Free Shipping
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault13" />
                                                <label class="form-check-label" for="flexRadioDefault13">
                                                    Percentage
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault14" />
                                                <label class="form-check-label" for="flexRadioDefault14">
                                                    Fixed Amount
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="">
                                                <label for="discount-value" class="form-label">Discount Value</label>
                                                <input type="text" id="discount-value" name="discount-value" class="form-control" placeholder="value enter" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer border-top d-flex justify-content-end">
                                    <a href="" class="btn btn-primary">Create Coupon</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


        </>
    )
}

export default CreateCoupons


