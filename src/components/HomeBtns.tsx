import '../assets/styles/intro-sobre.scss'


const HomeBtns: React.FC = () => {

  return (
    <div className="home-btns">
      <div className="card">
        <p>Sobre Mim</p>
      </div>
      <div className="card">
        <p>Ver meus projetos</p>
      </div>
      {/* <div className="card">
        <h3>Commits</h3>
        <p>{data.commits}</p>
      </div> */}
    </div>
  );
};

export default HomeBtns;