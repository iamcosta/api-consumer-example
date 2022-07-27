import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useListUserRepos } from '../../service/controller/hooks/repo.hook';

export function ReposPage() {

  const { repos, loading, listRepos } = useListUserRepos();
  const { login } = useParams();

  useEffect(() => {
    if (!!login) {
      listRepos(login, {
        onReject(error) {
          alert("Tá maluco?!")
        },
      });
    } else {
      alert("Erro, verifique o parâmetro!")
    }
  }, [login])

  return loading ? <span>Carregando...</span> : (
    <div>
      {repos.map(repo =>
        <div key={repo.id} style={{ marginBottom: "32px" }}>
          <h1 style={{ margin: 0 }}>{repo.name}</h1>
          <span>{repo.name}</span><br />
          <span>{repo.description}</span><br />
          <span><a href={repo.html_url}>ir para</a></span><br />
        </div>
      )}
    </div>
  )
}
