import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  id_template: string;
  title: string;
  location: string;
  date: string;
  time: string;
  description: string;
  primary_color: string;
  secondary_color: string;
  background_image: string;

  msg_success: string;
};

type Action = {
  updateIdTemplate: (id_template: State["id_template"]) => void;
  updateTitle: (title: State["title"]) => void;
  updateLocation: (location: State["location"]) => void;
  updateDate: (date: State["date"]) => void;
  updateTime: (time: State["time"]) => void;
  updateDescription: (description: State["description"]) => void;
  updatePrimaryColor: (primary_color: State["primary_color"]) => void;
  updateSecondaryColor: (secondary_color: State["secondary_color"]) => void;
  setDefaultBackgroundImage: (background_image: string) => void;
  setBackgroundImage: (background_image: File) => void;
  setMsgSuccess: (msg: string) => void;
  resetStates: () => void;
};

export const initialState: State = {
  id_template: "",
  title: "",
  location: "",
  date: "",
  time: "",
  description: "",
  primary_color: "",
  secondary_color: "",
  background_image: "",
  msg_success: "",
};

export const useCreateInvitationStore = create<State & Action>()(
  persist(
    (set) => ({
      ...initialState,

      updateIdTemplate: (id_template) => set(() => ({ id_template })),
      updateTitle: (title) => set(() => ({ title })),
      updateLocation: (location) => set(() => ({ location })),
      updateDate: (date) => set(() => ({ date })),
      updateTime: (time) => set(() => ({ time })),
      updateDescription: (description) => set(() => ({ description })),
      updatePrimaryColor: (primary_color) => set(() => ({ primary_color })),
      updateSecondaryColor: (secondary_color) =>
        set(() => ({ secondary_color })),
      setDefaultBackgroundImage: (file) => set({ background_image: file }),
      setBackgroundImage: (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;
          set({ background_image: base64String });
        };
        reader.readAsDataURL(file);
      },
      setMsgSuccess: (msg: string) => set(() => ({ msg_success: msg })),
      resetStates: () => {
        set(initialState);
      },
    }),
    { name: "state-create-invitation" },
  ),
);
