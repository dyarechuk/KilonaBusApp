import {create} from 'zustand';

interface BusState {
  busId: null | string;
  setBus: (busId: string) => void;
}

export const useBusStore = create<BusState>(set => ({
  busId: null,
  setBus: busId => set({busId}),
}));
