declare module 'vue-hot-reload-api' {
  import Vue, { Component, VueConstructor } from 'vue';
  export function install(Vue:VueConstructor): void;
  export function compatible(): boolean;
  export function createRecord(id: string, component: Component): void;
  export function reload(id: string, component: Component): void;
}
