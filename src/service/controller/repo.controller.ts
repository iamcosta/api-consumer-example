import { api } from "../api";

export async function listUserRepos(username: string) {
    return (await api.get(`/users/${username}/repos`)).data
}