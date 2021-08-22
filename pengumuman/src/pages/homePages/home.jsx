import logo from "../../img/logo.jpeg";
import { Link } from "react-router-dom";
import "./home.css";
function Home() {
  return (
    <>
      <main class=" container-fluid">
        <div class=" container gelas">
          <div class="container Header text-center">
            <div class="row">
              <div class="col">
                <img src={logo} alt="" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>Pengumuman Kelulusan Anggota Muda HMTL FT USU 2021</p>
              </div>
            </div>
          </div>
          <div class="container Input">
            <div class="row">
              <div class="col">
                <form>
                  <div class="mb-3 text-center ">
                    <label for="exampleInputEmail1" class="form-label">
                      Enter Your NIM
                    </label>
                    <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="200407002" style={{ width: "10rem" }} />
                    <div id="emailHelp" class="form-text text-center">
                      Before you click Checkout please pray for a minute goodluck !!
                    </div>
                  </div>
                  <Link to="/Hasil">
                    <button type="submit" class="btn btn-info ">
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
