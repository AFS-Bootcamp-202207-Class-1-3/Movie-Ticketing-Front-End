import Logo from "./assets/logo.svg";
import "./Pairing.css";
export default function NoPartner() {
  return (
    <div className="no-partner">
      <div className="no-partner-info">
        <div>该场次尚未有同伴加入，请耐心等待！</div>
      </div>
      <div className="big-Logo">
        <img src={Logo} alt="this is logo" />
        <span className="bussiness-name">TMovies</span>
      </div>
    </div>
  );
}
