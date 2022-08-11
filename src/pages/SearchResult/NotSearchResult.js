import Logo from "../Pairing/assets/logo.svg";
import "./Search.css"
export default function NotSearchResult(props) {
    return (
        <div className="no-result">
            <div className="no-result-info">
                <div>沒有找到关于"{props.searchMessage}"电影!</div>
            </div>
            <div className="big-Logo">
                <img src={Logo} alt="this is logo" />
                <span className="bussiness-name">TMovies</span>
            </div>
        </div>
    );
}