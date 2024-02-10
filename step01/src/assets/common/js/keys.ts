import type { InjectionKey } from "vue";

// provide 和 inject 通常会在不同的组件中运行。
// 要正确地为注入的值标记类型，Vue 提供了一个 InjectionKey 接口，
// 它是一个继承自 Symbol 的泛型类型，可以用来在提供者和消费者之间同步注入值的类型：
export const myInjectionkeys = Symbol() as InjectionKey<string>;
