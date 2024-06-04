import { mount } from 'svelte';
import App from './App.svelte';

const app = mount(App, {
  target: document.body, // or any other DOM element
  // other options
});

export default app;