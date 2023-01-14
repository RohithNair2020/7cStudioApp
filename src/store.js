import { create } from 'zustand';

const useStore = create((set) => ({
    phone: null,
    requestId: null,
    token: localStorage.getItem('token'),
    setPhone: (phone) => set({ phone }),
    setRequestId: (requestId) => set({ requestId }),
    setToken: (token) => set({ token }),
}));

export default useStore;
