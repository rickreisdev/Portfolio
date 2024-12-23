import React, { useEffect, useState } from "react";
import axios from "axios";
import '../assets/styles/intro-sobre.scss'

interface GitHubDados {
  public_repos: number;
  followers: number;
}

const GitHubDados: React.FC = () => {
  const [data, setData] = useState<GitHubDados | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = "rickreisdev";
        const token = import.meta.env.VITE_GH_TOKEN
        
        // Obter dados do usuário
        const userResponse = await axios.get(`https://api.github.com/users/${username}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData({
          public_repos: userResponse.data.public_repos,
          followers: userResponse.data.followers
        });
      } catch (error) {
        console.error("Erro ao buscar dados do GitHub:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="github-data">
      <div className="card">
        <h3>Repositórios</h3>
        <p>{data.public_repos}</p>
      </div>
      <div className="card">
        <h3>Seguidores</h3>
        <p>{data.followers}</p>
      </div>
      {/* <div className="card">
        <h3>Commits</h3>
        <p>{data.commits}</p>
      </div> */}
    </div>
  );
};

export default GitHubDados;