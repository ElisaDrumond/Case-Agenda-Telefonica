import {create} from "zustand"

type SessionData = {
  username: string;
  email: string;
  token: string;
};

type Store = {
  session?: SessionData;
  setSession: (session: SessionData) => void;
};

export const useSession = create<Store>()((set) => ({
  setSession: (session: SessionData) => set(() => ({ session }))
}));
