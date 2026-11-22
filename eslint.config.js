import { fileURLToPath } from 'node:url';
import { includeIgnoreFile } from '@eslint/compat';
import straub from '@straub/eslint-config';

export default [
  includeIgnoreFile(fileURLToPath(new URL('.gitignore', import.meta.url))),
  ...await straub({ vue: true }),
  {
    files: ['pages/**', 'layouts/**', 'error.vue', 'app.vue'],
    rules: { 'vue/multi-word-component-names': 'off' },
  },
];
