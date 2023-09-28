import { useState } from "react";
import "./newproduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import UpgradeIcon from "@mui/icons-material/Upgrade";
import app from "../../firebase";
import { addProducts } from "../../redux/apiCall";
import { useDispatch } from "react-redux";
const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };
  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const StorageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(StorageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat };
          addProducts(product, dispatch);
        });
      }
    );
  };

  return (
    <div className="newproduct">
      <form className="newproductForm">
        <div className="newproductFormLeft">
          <label className="firstLabel">Title </label>
          <input
            name="title"
            type="text"
            placeholder="Apple Airpod"
            onChange={handleChange}
          />
          <label className="">Price </label>
          <input
            name="price"
            type="number"
            placeholder="100"
            onChange={handleChange}
          />
          <label className="">Description </label>
          <input
            name="desc"
            type="text"
            placeholder="Nike Dior"
            onChange={handleChange}
          />
          <label className="">Categories</label>
          <input type="text" placeholder="jean,skrts" onChange={handleCat} />
          <label>In Stock</label>
          <select name="inStock" id="idStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="newproductFormRight">
          <div className="newproductUpload">
            <label for="file">
              <UpgradeIcon />
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <button onClick={handleClick} className="newproductButton">
            {" "}
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
