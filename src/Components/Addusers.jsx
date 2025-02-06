import { useState } from "react";
import Select from "react-dropdown-select";

const Addusers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    role: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const options = [
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" },
    { value: "editor", label: "Editor" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({ ...formData, role: selectedOption[0] ? selectedOption[0].value : null });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.number.trim()) {
      newErrors.number = "Number is required";
    }  
    if (!formData.role) {
      newErrors.role = "Role is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://webhook.site/86949e51-9eb1-4995-817f-e670792ae7af", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("User created successfully!");
        setFormData({ name: "", email: "", number: "", role: null }); // Reset form
      } else {
        setMessage(result.message || "Failed to create user.");
      }
    } catch (error) {
      setMessage("An error occurred while creating the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="page-content">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Add Users</h4>
                </div>
                <div className="card-body">
                  {message && <p className={message.includes("success") ? "text-success" : "text-danger"}>{message}</p>}
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          {errors.name && <p className="text-danger">{errors.name}</p>}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {errors.email && <p className="text-danger">{errors.email}</p>}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Number</label>
                          <input
                            type="text"
                            name="number"
                            className="form-control"
                            placeholder="Enter Number"
                            value={formData.number}
                            onChange={handleChange}
                          />
                          {errors.number && <p className="text-danger">{errors.number}</p>}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Role</label>
                          <Select
                            value={options.filter(option => option.value === formData.role)}
                            onChange={handleSelectChange}
                            options={options}
                            placeholder="Select Role"
                          />
                          {errors.role && <p className="text-danger">{errors.role}</p>}
                        </div>
                      </div>
                    </div>
                    <div className="card-footer border-top d-flex justify-content-end">
                      <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? "Creating..." : "Create User"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addusers;
