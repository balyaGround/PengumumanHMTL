import logo from "../../img/logo.jpeg";
import { Link } from "react-router-dom";
import USU from "../../img/usu.jpeg";
import { useState, useEffect } from "react";
import "./home.css";
import axios from "axios";
function Home() {
  const [data, setData] = useState([]);
  const [id, setId] = useState([]);

  const getData = async () => {
    await axios
      .get("https://localhost:8000")
      .then((result) => setData(result.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // didMount
    getData();
  }, []);
  console.log("data", data);
  return (
    <>
      <main className=" container-fluid">
        <div className=" container gelas">
          <div className="container Header text-center ">
            <div className="row">
              <div className="col">
                <img src={USU} alt="" />
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Pengumuman Kelulusan Anggota Muda HMTL FT USU 2021</p>
              </div>
            </div>
          </div>
          <div className="container Input">
            <div className="row">
              <div className="col">
                <form>
                  <div className="mb-3 text-center ">
                    <label for="exampleInputEmail1" className="form-label mt-5">
                      Enter Your NIM
                    </label>
                    <input
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="200407002"
                      style={{ width: "10rem" }}
                      value={id}
                      onChange={(e) => {
                        setId(e.target.value);
                      }}
                    />
                    <div id="emailHelp" className="form-text text-center">
                      Before you click Checkout please pray for a minute goodluck!!
                    </div>
                  </div>

                  <Link to={`/hasil/${id}`}>
                    <button type="submit" className="btn btn-info ">
                      Checkout!!
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
