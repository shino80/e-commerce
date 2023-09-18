import "./userpage.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import EmailIcon from "@mui/icons-material/Email";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import UpgradeIcon from "@mui/icons-material/Upgrade";
const UserPage = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              className="userShowTopImg"
              src="https://plus.unsplash.com/premium_photo-1684517010070-1a0ed98714cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
            <div className="userShowTopTitle">
              <span className="userShowUserName">Will</span>
              <span className="userShowUserTitle">Student</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>

            <div className="userInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Will20</span>
            </div>
            <div className="userInfo">
              <EmailIcon className="userShowIcon" />
              <span className="userShowInfoTitle">will2108@gmail.com</span>
            </div>
            <div className="userInfo">
              <DateRangeIcon className="userShowIcon" />
              <span className="userShowInfoTitle">21/8/2000</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userInfo">
              <LocalPhoneIcon className="userShowIcon" />
              <span className="userShowInfoTitle">+81 0828 83818</span>
            </div>
            <div className="userInfo">
              <HomeIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Chiba,Japan</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Will20"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Will"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="will2108@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Birthday</label>
                <input
                  type="text"
                  placeholder="21/8/2000"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Tel</label>
                <input
                  type="text"
                  placeholder="+81 0828 83818"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Chiba,Japan"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://plus.unsplash.com/premium_photo-1684517010070-1a0ed98714cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                />
                <label htmlFor="file">
                  <UpgradeIcon  className="userUpdateIcon"/>
                </label>
                <input type="file" id="file" style={{display:"none"}} />
              </div>
              <button className="buttonUpdate">Update</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
