import { USERS_API_URL } from "../../lib/constants/baseValues";
import { IUser } from "../../lib/models/IUser";

const get = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
    }
    const data: T = await response.json();
    return data;
};

export const getUsers = async () => {
    const data = await get<{ users: IUser[] }>(USERS_API_URL);
    return data.users;
};

export const getUser = async (id: string) => {
    const data = await get<IUser>(`${USERS_API_URL}/${id}`);
    return data;
};