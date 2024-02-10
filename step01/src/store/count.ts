import { PiniaCustomStateProperties, defineStore } from "pinia";

export const useCountStore = defineStore("count", {
  actions: {
    increament() {
      this.sum++;
    },
  },
  state() {
    return {
      sum: 12,
      name: "121211212",
    };
  },
  getters: {
    biggerSum(
      state: {
        sum: number;
        name: string;
      } & PiniaCustomStateProperties<{
        sum: number;
        name: string;
      }>
    ): number {
      return state.sum * 100;
    },
  },
});
