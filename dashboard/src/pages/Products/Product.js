import "./products.css";
import { DataGrid } from "@mui/x-data-grid";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts, getProducts } from "../../redux/apiCall";
const Products = () => {
  const products = useSelector((state) => state.product.currentproduct);
 
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    deleteProducts(id,dispatch)
   };
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productsListUser">
            <img className="productsListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },

    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/products/" + params.row._id}>
              <button className="productsListEdit"> Edit</button>
            </Link>
            <DeleteIcon
              className="productsListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productsList">
      <DataGrid
        rows={products}
        disableRowSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default Products;
