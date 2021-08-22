import "./hasil.css";
import logo from "../../img/logo.jpeg";
function Hasil() {
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
                <h1>Selamat Anda Lulus !!!</h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hasil;