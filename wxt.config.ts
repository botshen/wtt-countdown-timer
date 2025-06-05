import { defineConfig } from 'wxt';
import Tailwindcss from "@tailwindcss/vite";


// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-vue', "@wxt-dev/auto-icons",],
  runner: {
    disabled: true,
  },
  vite: () => ({
    plugins: [Tailwindcss() as any],

  }),
});
