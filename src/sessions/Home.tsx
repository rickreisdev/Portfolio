import Intro from "./Intro";
import '../assets/styles/home.scss'
import Resumo from "../components/Resumo";

const Home = () => {
    return (
        <div className="home-container">
            <Intro />
            <Resumo />
        </div>
    );
};

export default Home;
