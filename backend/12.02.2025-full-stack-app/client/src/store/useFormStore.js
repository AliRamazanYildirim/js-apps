import {create} from 'zustand';

const useFormStore = create((set) => ({
  formData: {
    name: '',
    email: ''
  },
  setFormData: (newData) => set((state) => ({
    formData: {
      ...state.formData,
      ...newData
    }
  }))
}));

export default useFormStore;