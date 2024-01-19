/// <reference types="vite/client" />
declare module '*.tsx' {
    import type { Component } from "vue";
    const component: Component;
    export default component;
}