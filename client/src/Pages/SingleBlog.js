import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SingleBlog = () => { 
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:9000/api/get/blog/${id}`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setBlog(res.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
        alert(error.response ? error.response.data.message : "An error occurred");
      }
    };
    fetchSingleBlog();
  }, [id]);

  return (
    <div className="container shadow my-3">  
      <div className="col-md-12 d-flex items-center justify-content-center bg-light">
        <div className="row">
          <h1 className="my-3">{blog.title}</h1>
          <img
            src={`http://localhost:9000/${blog.thumbnail}`}  
            className="img img-responsive img-rounded my-3"
            alt=""
          />
          <p className="my-3">{blog.description}</p> 
        </div>
      </div>
      <button onClick={() => navigate("/")} className="btn btn-primary"> 
        Back To Blog
      </button>
    </div>
  );
};

export default SingleBlog;
