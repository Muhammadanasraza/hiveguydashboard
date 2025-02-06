import { IoMdAdd } from "react-icons/io";
const Attribute = () => {

    
return (
    <>
    <div class="page-content">

 
<div class="container-xxl">

     <div class="row">
          <div class="col-lg-12">
               <div class="card">
                    <div class="card-header">
                         <h4 class="card-title">Add Attribute</h4>
                    </div>
                    <div class="card-body">
                         <div class="row">
                              <div class="col-lg-6">
                                   <form>
                                        <div class="mb-3">
                                             <label for="variant-name" class="form-label text-dark">Attribute Variant</label>
                                             <input type="text" id="variant-name" class="form-control" placeholder="Enter Name"/>
                                        </div>
                                   </form>
                              </div>
                              <div class="col-lg-6">
                                   <form>
                                        <div class="">
                                             <label for="option" class="form-label">	Option</label>
                                             <select class="form-control" id="option" data-choices data-choices-groups data-placeholder="Select Option">
                                                  <option value="Dropdown">Dropdown</option>
                                                  <option value="Radio">Radio</option>                                                                     
                                             </select>
                                        </div>
                                   </form>
                              </div>
                              <div class="col-lg-11">
                                   
                                        <div class="mb-3">
                                             <label for="value-name" class="form-label text-dark">Attribute Value</label>
                                             <input type="text" id="value-name" class="form-control" placeholder="Enter Value"/>
                                           
                                        </div>
                                 
                              </div>
                              <div class="col-lg-1 mt-4">
                               
                                   <span className="p-2 bg-black text-white"><IoMdAdd /></span>
                                  
                            
                         </div>
                              
                             
                         </div>
                    </div>
                    <div class="card-footer border-top">
                         <a href="#!" class="btn btn-primary">Save Change</a>
                    </div>
               </div>
          </div>
     </div>

     </div>
     </div>
    </>
)
}
export default Attribute