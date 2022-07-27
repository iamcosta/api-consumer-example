import { AxiosError } from "axios";
import { useState } from "react";
import { UserModel } from "../../model/user.model";
import { listUser } from "../user.controller";
import { OnListActions } from "./types";

export function useListUser() {

    const [users, setUsers] = useState<UserModel[]>([]);
    const [loading, setLoading] = useState(false);

    const list = (onListActions?: OnListActions<UserModel>) => {

        setLoading(true);

        listUser().then((_users: UserModel[]) => {
            setUsers(_users);
            onListActions?.onSuccess && onListActions.onSuccess(_users);
        }).catch((error: AxiosError) => {
            onListActions?.onReject && onListActions.onReject(error);
        }).finally(() => {
            setLoading(false);
            onListActions?.onFinally && onListActions.onFinally();
        })
    }

    return {
        users,
        setUsers,
        list,
        loading
    }
}