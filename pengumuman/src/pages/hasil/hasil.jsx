import "./hasil.css";
import logo from "../../img/logo.jpeg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Hasil() {
  const { id } = useParams();
  const [lulus, setLulus] = useState([]);
  const getData = async () => {
    await axios
      .get(`https://datapengumuman.herokuapp.com/data/${id}`)
      .then((result) => setLulus(result.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData(id);
  }, [id]);
  console.log("data id ", lulus);
  return (
    <>
      <main className=" container-fluid">
        <div className="container gelas">
          <div className="container Header text-center">
            <div className="row">
              <div className="col">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Pengumuman Kelulusan Anggota Muda HMTL FT USU 2021</p>
              </div>
            </div>
          </div>
          <div className="container Input mt-5">
            <div className="row">
              <div className="col text-center mt-3">
                <h1>
                  peserta atas nama {lulus.nama} {lulus.keterangan}
                </h1>
                <Link to={`/`}>
                  <button type="submit" className="btn btn-secondary ms-2 ">
                    Check teman2 lain?
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hasil;
