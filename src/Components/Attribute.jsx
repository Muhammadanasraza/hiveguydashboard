import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const Attribute = () => {
    const [attributeVariant, setAttributeVariant] = useState("");
    const [option, setOption] = useState("Dropdown");
    const [attributeValues, setAttributeValues] = useState([""]);

    const handleAddValue = () => {
        setAttributeValues([...attributeValues, ""]);
    };

    const handleValueChange = (index, value) => {
        const newValues = [...attributeValues];
        newValues[index] = value;
        setAttributeValues(newValues);
    };

    const handleSave = () => {
        console.log("Saving:", { attributeVariant, option, attributeValues });
        // Here you would typically send this data to your backend
    };

    return (
        <>
            <div className="page-content">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Add Attribute</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label htmlFor="variant-name" className="form-label text-dark">Attribute Variant</label>
                                                <input 
                                                    type="text" 
                                                    id="variant-name" 
                                                    className="form-control" 
                                                    placeholder="Enter Name" 
                                                    value={attributeVariant}
                                                    onChange={(e) => setAttributeVariant(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label htmlFor="option" className="form-label">Option</label>
                                                <select 
                                                    className="form-control" 
                                                    id="option" 
                                                    value={option}
                                                    onChange={(e) => setOption(e.target.value)}
                                                >
                                                    <option value="Dropdown">Dropdown</option>
                                                    <option value="Radio">Radio</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-11">
                                            <div className="mb-3">
                                                <label htmlFor="value-name" className="form-label text-dark">Attribute Value</label>
                                                {attributeValues.map((value, index) => (
                                                    <div key={index} className="d-flex align-items-center mb-2">
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            placeholder="Enter Value" 
                                                            value={value}
                                                            onChange={(e) => handleValueChange(index, e.target.value)}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-lg-1 mt-3">
                                            <button 
                                                type="button" 
                                                className="p-2 bg-black text-white rounded"
                                                onClick={handleAddValue}
                                            >
                                                <IoMdAdd />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer border-top">
                                    <button className="btn btn-primary" onClick={handleSave}>Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Attribute;