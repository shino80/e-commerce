import "./newproduct.css";
import UpgradeIcon from "@mui/icons-material/Upgrade";
const NewProduct = () => {
  return (
    <div className="newproduct">

      <form className="newproductForm">
        <div className="newproductFormLeft">
          <label className="firstLabel">New Product </label>
          <input type="text" placeholder="Apple Airpod" />
          <label>In Stock</label>
          <select name="inStock" id="idStock">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newproductFormRight">
          <div className="newproductUpload">
            
            <label for="file">
              <UpgradeIcon />
            </label>
            <input type="file" id="file"  />
          </div>
          <button className="newproductButton"> Update</button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
