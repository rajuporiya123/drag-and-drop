import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [laoding, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    navigate("/login");
  };
  const fetchData = () => {
    setLoading(true);
    fetch("https://dummyjson.com/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result?.products);
        setProducts(result?.products);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDetails = (id) => {
    navigate(`/pagedetails/${id}`);
  };

  const handleDelete = (id) => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
        fetchData();
        setLoading(false);
      });
  };

  return (
    <>
      {laoding ? (
        <>
          <div class="loader-container">
            <div class="loader"></div>
          </div>
        </>
      ) : (
        <>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">title</th>
                <th scope="col">brand</th>
                <th scope="col">category</th>
                <th scope="col">discountPercentage</th>
                <th scope="col">price</th>
                <th scope="col">rating</th>
                <th scope="col">stock</th>
                {/* <th scope="col">thumbnail</th> */}
                <th scope="col">Details</th>
              </tr>
            </thead>
            {products &&
              products?.length > 0 &&
              products?.map((item) => (
                <>
                  <tbody>
                    <tr>
                      <td scope="row">{item?.id}</td>
                      <td scope="col">{item?.title}</td>
                      <td scope="col">{item?.brand}</td>
                      <td scope="col">{item?.category}</td>
                      <td scope="col">{item?.discountPercentage}</td>
                      <td scope="col">{item?.price}</td>
                      <td scope="col">{item?.rating}</td>
                      <td scope="col">{item?.stock}</td>
                      {/* <td scope="col"><img src={item?.thumbnail} alt="image" width={100} height={100}/></td> */}
                      <td scope="col">
                        <button
                          className="btn btn-secondary"
                          onClick={() => handleDetails(item?.id)}
                        >
                          Details
                        </button>
                      </td>
                      <td scope="col">
                        <button
                          className="btn btn-secondary"
                          onClick={() => handleDelete(item?.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </>
              ))}
          </table>
          <input type="text" placeholder="enter the name" />
        </>
      )}
      <div>
        <button className="btn btn-secondary" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Dashboard;
