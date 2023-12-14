import { Link } from "react-router-dom";

export function Navbar() {


  return (



    <nav className=" navbar navbar-expand-md bg-dark navbar-dark">
      <div className="container">
        <Link to={"/students"} className=" text-white navbar-brand">
         
          <img src="https://media.tenor.com/94gkWSb_kMEAAAAd/oasisnetwork.gif" alt="" style={{width:"20rem" }}/>
          </Link>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mynav">
          <span className="navbar-toggler-icon"></span>
        </button>



        <div className="collapse navbar-collapse " id="mynav">
          <ul className="navbar-nav ms-auto ">
          <li className="nav-item active "><Link to={"/"} className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to={"/books"} className="nav-link">Books</Link></li>
            <li className="nav-item  "><Link to={"/addbooks"} className="nav-link">AddBooks</Link></li>
            <li className="nav-item "><Link to={"/books/take"} className="nav-link">ReturnBooks</Link> </li>


          </ul>


        </div>

      </div>

    </nav>




  );
}