import "./form.css";
import { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
const Form = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [gh, setGH] = useState("");
  const [lc, setLC] = useState("");
  const [ib, setIB] = useState("");
  const [li, setLI] = useState("");
  const [mob, setMob] = useState("");
  const [resume, setResume] = useState();

  let addResume = async () => {
    let formField = new FormData();
    formField.append("name", name);
    formField.append("address", address);
    formField.append("email", email);
    formField.append("github", gh);
    formField.append("leetcode", lc);
    formField.append("interview", ib);
    formField.append("linkedin", li);
    formField.append("phonenum", mob);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8001/api/",
      data: formField,
    })
      .then((req) => {
        alert("Registed Successfully" + req);
      })
      .catch((e) => {
        alert("Failed to Submit " + e);
      });
  };

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="form-container">
      <center>
        <h2 className="">Appilcation Form</h2>
      </center>
      <br />
      <form data-aos="zoom-in">
        <div className="form-items">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-items">
          <label htmlFor="add">Address : </label>
          <input
            type="text"
            id="add"
            className="form-control"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="form-items">
          <label htmlFor="em">Email : </label>
          <input
            type="email"
            id="em"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-items">
          <label htmlFor="gh">Github Username : </label>
          <input
            type="text"
            id="gh"
            className="form-control"
            name="gh"
            value={gh}
            onChange={(e) => setGH(e.target.value)}
          />
        </div>

        <div className="form-items">
          <label htmlFor="lc">LeetCode Username : </label>
          <input
            required
            type="text"
            id="lc"
            className="form-control"
            name="lc"
            value={lc}
            onChange={(e) => setLC(e.target.value)}
          />
        </div>

        <div className="form-items">
          <label htmlFor="ib">Interview Bits Username : </label>
          <input
            required
            type="text"
            id="ib"
            className="form-control"
            name="ib"
            value={ib}
            onChange={(e) => setIB(e.target.value)}
          />
        </div>

        <div className="form-items">
          <label htmlFor="lid">Linked In Id : </label>
          <input
            required
            type="text"
            id="lid"
            className="form-control"
            name="li"
            value={li}
            onChange={(e) => setLI(e.target.value)}
          />
        </div>

        <div className="form-items">
          <label htmlFor="mob">Mobile Number : </label>
          <input
            required
            type="number"
            id="mob"
            className="form-control"
            name="mob"
            value={mob}
            onChange={(e) => setMob(e.target.value)}
          />
        </div>
        <div className="form-items">
          <label htmlFor="resume" className="form-label">
            Upload Your Resume
          </label>
          <input
            type="file"
            className="form-control"
            id="resume"
            name="resume"
            value={resume}
            onChange={(e) => setResume(e.target.files[0])}
          />
        </div>
        <div className="btn-item-form">
          <button
            className="btn btn-outline-danger px-4 py-2"
            onClick={addResume}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
