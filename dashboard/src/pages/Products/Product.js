import "./products.css";
import { DataGrid } from "@mui/x-data-grid";
import { productsRow } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Products = () => {
  const [data, setData] = useState(productsRow);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productsListUser">
            <img className="productsListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
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
            <Link to={"/products/" + params.row.id}>
              <button className="productsListEdit"> Edit</button>
            </Link>
            <DeleteIcon
              className="productsListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productsList">
      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Products;
