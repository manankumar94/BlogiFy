import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:9000/api/get/allblogs", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        alert(error.response ? error.response.data.message : "An error occurred");
      }
    };
    fetchAllBlogs();

   
   

  }, []);

  return (
    <>
      <main className="my-5">
        <div className="container shadow-lg">
          <section className="text-center">
            <h2 className="mb-5 my-3">
              <strong><u>Latest Blogs</u></strong>
            </h2>
            <div className="row">
              {blogs && blogs.length > 0 ? (
                blogs.map((item) => {
                  return (
                    <div className="col-lg-4 col-md-6 mb-4" key={item._id}>
                      <div className="card">
                        <div
                          className="bg-image hover-overlay ripple"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src={`http://localhost:9000/${item.thumbnail}`}
                            className="img-fluid"
                            alt="Card"
                          />
                          <a href="#!">
                            <div
                              className="mask"
                              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                            ></div>
                          </a>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">{item.description}</p>
                          <Link to={`/blog/${item._id}`} className="btn btn-primary">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h2>Loading...</h2>
              )}
            </div>
          </section>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-primary text-center text-lg-start">
        <div
          className="text-center p-3 text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a
            className="text-white mx-2"
            href="https://www.linkedin.com/in/manangautam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Manan Kumar
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
