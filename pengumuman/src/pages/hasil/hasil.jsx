import "./hasil.css";
import logo from "../../img/logo.jpeg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Hasil() {
  const { id } = useParams();
  const [lulus, setLulus] = useState([]);
  const getData = async () => {
    await axios
      .get(`https://loacalhost:8000/${id}`)
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
          <div className="container Input">
            <div className="row">
              <div className="col">
                <h1>Selamat {lulus.nama} Anda Lulus sebagai anggota muda HMTL FT USU 2021!!!</h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hasil;
