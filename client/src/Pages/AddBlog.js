import React,{ useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddBlog = () => {

  const navigate= useNavigate();
  const [input, setInput]= useState({
    title: "",
    description: "",
    category: "",
  })
  const [file, setFile] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    const fetchAllCategories = async () =>{
        const res= await axios.get("http://localhost:9000/api/get/allcategories",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            },
          }
        )
        setCategories(res.data);
    };
    fetchAllCategories();
  }, [])

  // creating a form data

  const formData= new FormData();
  formData.append("title", input.title);
  formData.append("category", input.category);
  formData.append("description", input.description);formData.append("thumbnail", file);

  const handleSubmit= async (e)=>{
    e.preventDefault();
    try {
      const res= await axios.post("http://localhost:9000/api/add/blog", formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
        }
      );
      alert(res.data.message);
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  return (
    <div className="container shadow p-4" style={{ maxWidth: "400px", margin: "50px auto", borderRadius: "10px" }}>
      <h2 className="text-center my-3">Add a New Blog</h2>
      <div className="row justify-content-center">
        <form onSubmit={handleSubmit}>
          {/* Title Input */}
          <div className="mb-3">
            <label htmlFor="blogTitle" className="form-label">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={input.title}
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value})}
              className="form-control"
              id="blogTitle"
              placeholder="Blog Title"
            />
          </div>

          {/* Category Select */}
          <div className="mb-3">
            <label htmlFor="blogCategory" className="form-label">
              Category
            </label>
            <select 
            className="form-control" 
            name="category"
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value})}
            id="blogCategory"
            >
              <option disabled>Select Category</option>
              {/* Category options here */}
              {
                categories &&
                categories.map((item)=>{
                  return <option value={item._id}>
                    {item.title}
                  </option>
                })
              }
            </select>
          </div>

          {/* Description Textarea */}
          <div className="mb-3">
            <label htmlFor="blogDescription" className="form-label">
              Description
            </label>
            <textarea
              name="description"
              value={input.description}
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value})
            }
              placeholder="Blog Description"
              className="form-control"
              id="blogDescription"
            ></textarea>
          </div>

          {/* Thumbnail Input */}
          <div className="mb-3">
            <label htmlFor="blogThumbnail" className="form-label">
              Thumbnail
            </label>
            <input
              name="thumbnail"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="form-control"
              id="blogThumbnail"
              placeholder="Select Thumbnail"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-block">
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;


// Adding Comment to again adding to git 