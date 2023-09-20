import './newuser.css'
const NewUser = () => {
  return (
    <div className="newuser">
      <h1 className="newuserTitle">New user</h1>
      <form className="newuserForm">
        <div className="newuserFormItem">
          <label>User Name</label>
          <input type="text" placeholder="Will" />
        </div>
        <div className="newuserFormItem">
          <label>Full Name</label>
          <input type="text" placeholder="Will" />
        </div>
        <div className="newuserFormItem">
          <label>Email</label>
          <input type="email" placeholder="will2108@gmail.com" />
        </div>
        <div className="newuserFormItem">
          <label>Password</label>
          <input type="password" placeholder="" />
        </div>
        <div className="newuserFormItem">
          <label>Phone</label>
          <input type="text" placeholder="+81 213 1233 4441" />
        </div>
        <div className="newuserFormItem">
          <label>Address</label>
          <input type="text" placeholder="Chiba Japan" />
        </div>
        <div className="newuserFormItem">
          <label>Gender</label>
          <div className="newuserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newuserFormItem">
          <label>Active</label>
        <select className="newuserSelect" name="active" id="active">
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
