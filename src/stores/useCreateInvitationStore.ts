import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  data_invitation: any;
};

type Action = {
  update_data_invitation: (data_invitation: any) => void;
  reset_states: () => void;
};

export const initialState: State = {
  data_invitation: {},
};

export const useCreateInvitationStore = create<State & Action>()(
  persist(
    (set) => ({
      ...initialState,

      update_data_invitation: (data_invitation: any) => {
        console.log(data_invitation);
        return set({ data_invitation });
      },
      reset_states: () => {
        set(initialState);
      },
    }),
    { name: "state-create-invitation" },
  ),
);
