import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useCartStore = create(

  immer((set) => ({
    // initialState 역할 (장바구니 배열)
    cart: [],

    // 상품 수량 1개 늘리기
    addCount: (id) =>
      set((state) => {
        const num = state.cart.findIndex((a) => a.id === id);      
        state.cart[num].amount++;
      }),

    // 상품 수량 1개 줄이기 (0개 이하는 알림 띄움)
    decreaseCount: (id) =>
      set((state) => {
        const num = state.cart.findIndex((a) => a.id === id);
        console.log(num);
        if (state.cart[num].amount > 0) {
          state.cart[num].amount--;
        } else if (state.cart[num].amount === 0) {
          alert("상품이 더 이상 없습니다.");
        }
      }),


    // 장바구니에 상품 추가하기, 이미 있으면 수량만 +1, 없으면 새로 추가
    addItem: (newItem) =>
      set((state) => {
        const num = state.cart.findIndex((a) => a.id === newItem.id);
        if (num !== -1) {
          state.cart[num].amount++;
        } else {
          state.cart.push(newItem);
        }
      }),


    // 장바구니에서 상품 삭제하기
    deleteItem: (id) =>
      set((state) => {
        const num = state.cart.findIndex((a) => a.id === id);
        state.cart.splice(num, 1);
      }),


    // 이름순으로 상품 정렬하기
    sortName: () =>
      set((state) => {
        state.cart.sort((a, b) => (a.name > b.name ? 1 : -1));
      }),
  }))
);
