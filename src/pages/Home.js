import {Link} from "react-router-dom";

export const Home = () =>
  <div className="home-container">
    <h1>Github battle: battle your friends and staff</h1>
    <Link to="/battle" className="button">Battle</Link>
  </div>
