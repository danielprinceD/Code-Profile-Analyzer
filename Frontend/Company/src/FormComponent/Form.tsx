import "./form.css";
import Button from "../Components/Button";
const Form = () => {
  return (
    <div className="form-container">
      <center>
        <h2 className="text-secondary">Appilcation Form</h2>
      </center>
      <br />
      <form action="post">
        <div className="form-items">
          <label htmlFor="name">Name : </label>
          <input type="text" id="name" className="form-control" />
        </div>

        <div className="form-items">
          <label htmlFor="add">Address : </label>
          <input type="text" id="add" className="form-control" />
        </div>

        <div className="form-items">
          <label htmlFor="em">Email : </label>
          <input type="email" id="em" className="form-control" />
        </div>

        <div className="form-items">
          <label htmlFor="gh">Github Username : </label>
          <input type="text" id="gh" className="form-control" />
        </div>

        <div className="form-items">
          <label htmlFor="lc">LeetCode Username : </label>
          <input type="text" id="lc" className="form-control" />
        </div>

        <div className="form-items">
          <label htmlFor="ib">Interview Bits Username : </label>
          <input type="text" id="ib" className="form-control" />
        </div>

        <div className="form-items">
          <label htmlFor="lid">Linked In Id : </label>
          <input type="text" id="lid" className="form-control" />
        </div>

        <div className="form-items">
          <label htmlFor="mob">Mobile Number : </label>
          <input type="number" id="mob" className="form-control" />
        </div>
        <div className="btn-item-form">
          <Button data="submit" className="btn btn-outline-danger px-4 py-2" />
        </div>
      </form>
    </div>
  );
};

export default Form;
