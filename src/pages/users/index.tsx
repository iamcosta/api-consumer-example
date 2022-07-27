import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useListUser } from "../../service/controller/hooks/user.hook"

export function UsersPage() {

    const { users, list, loading } = useListUser();
    const navigate = useNavigate();

    useEffect(() => {
        list();
    }, [])


    const navigateToRepos = (login: string) => {
        navigate(`${login}/repos`);
    }

    return loading ? <span>Carregando...</span> : (
        <div>
          {users.map(user =>
            <div key={user.id} style={{ marginBottom: "32px" }}>
              <h1 style={{ margin: 0 }}>{user.login}</h1>
              <button type="button" onClick={() => navigateToRepos(user.login)}>Ver repositórios</button><br />
            </div>
          )}
        </div>
      )
}