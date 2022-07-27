import { AxiosError } from "axios";
import { useState } from "react";
import { RepoModel } from "../../model/repo.model";
import { listUserRepos } from "../repo.controller";
import { OnListActions } from "./types";

export function useListUserRepos() {

    const [repos, setRepos] = useState<RepoModel[]>([]);
    const [loading, setLoading] = useState(false);

    const listRepos = (username: string, onListActions?: OnListActions<RepoModel>) => {

        setLoading(true);

        listUserRepos(username).then((_repos) => {
            setRepos(_repos);
            onListActions?.onSuccess && onListActions.onSuccess(_repos);
        }).catch((_error: AxiosError) => {
            setRepos([]);
            onListActions?.onReject && onListActions.onReject(_error);
        }).finally(() => {
            setLoading(false);
            onListActions?.onFinally && onListActions.onFinally();
        })
    }

    return {
        repos,
        setRepos,
        listRepos,
        loading
    }
}