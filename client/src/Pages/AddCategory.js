import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const navigate= useNavigate();
  const [input, setInput]=useState({
    title: "",
  })

  const handleCategory = async (e) => {
    e.preventDefault();
    try {
       const res= await axios.post(
        "http://localhost:9000/api/add/category", input,
        {
          headers : {
            "Authorization" : `Bearer ${localStorage.getItem("token")}`,
          },
        }
       )
       alert(res.data.message);
       navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  return (
    <div className="container add-category-container shadow p-4" style={{ maxWidth: "400px", margin: "50px auto", borderRadius: "10px" }}>
      <h2 className="text-center mb-4">Add a New Category</h2>

      {/* Form Section */}
      <div className="row justify-content-center">
        <div className="col-12">
          <form onSubmit= {handleCategory}>  
            {/* Title Input */}
            <div className="mb-3">
              <label htmlFor="categoryTitle" className="form-label">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={input.title}
                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value})
              }
                className="form-control"
                id="categoryTitle"
                placeholder="Enter Category Title"
                style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
              />
            </div>
            
            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-block" style={{ width: "100%", padding: "10px" }}>
                Add Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;


// Adding Comment to again adding to git 