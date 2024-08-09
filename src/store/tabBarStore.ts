import {create} from 'zustand';

interface TabBarState {
  visible: boolean;
  setTabBarStatus: (visible: boolean) => void;
}

export const useTabBarStore = create<TabBarState>(set => ({
  visible: false,
  setTabBarStatus: visible => set({visible}),
}));
