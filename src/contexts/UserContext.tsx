import { createContext, ReactNode, useEffect, useState } from "react";
import { Repository } from "../models/Repository";
import { User } from "../models/User";
import { api } from "../services/api";

interface UserContextType {
  user: User | undefined;
  repository: Repository | undefined;
  loadPosts: (query?: string) => void;
}

export const UserContext = createContext({} as UserContextType);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>();
  const [repository, setRepository] = useState<Repository>();

  async function loadUserData() {
    const response = await api.get("users/marrcelosantana");
    setUser(response.data);
  }

  async function loadPosts(query?: string) {
    const response = await api.get(
      `/search/issues?q=${query ?? ""}repo:marrcelosantana/github-blog`
    );
    setRepository(response.data);
  }

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, repository, loadPosts }}>
      {children}
    </UserContext.Provider>
  );
}
