import { axs } from '@/service';

export const fetchCart = () => {
  return axs.get(`http://localhost:8080/api/cart`)
};
