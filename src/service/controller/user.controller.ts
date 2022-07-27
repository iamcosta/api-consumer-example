import { api } from "../api";

export async function listUser() {
    return (await api.get("/users")).data
}