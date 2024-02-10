import { customRef } from "vue";

export function useDebouncedRef(val: any) {
  let timer: number;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return val;
      },
      set(newVal) {
        //防抖：不是最后一个计时器都去除，只执行最后一个
        clearTimeout(timer);

        timer = setTimeout(() => {
          trigger();
          val = newVal;
        }, 1000);
      },
    };
  });
}
