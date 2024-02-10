import { defineStore } from "pinia";
import { reactive } from "vue";

//选项式
// export const usetalkeStore = defineStore("talk", {
//   actions: {
//     getAtalk() {
//       var str = Math.random().toString(36).slice(-6);

//       return str;
//     },
//   },
//   state() {
//     return {
//       talkList: JSON.parse(localStorage.getItem("talkList") as string) || [],
//     };
//   },
// });

//组合式
export const usetalkeStore = defineStore("talk", () => {
  const talkList = reactive(
    JSON.parse(localStorage.getItem("talkList") as string) || []
  );
  //相当于actions
  function getAtalk() {
    var id = 1;
    var str = Math.random().toString(36).slice(-6);
    talkList.unshift({ id: id++, name: str });
  }

  return {
    talkList,
    getAtalk,
  };
});
