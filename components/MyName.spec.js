import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MyName from '@/components/MyName.vue';

describe('MyName', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MyName);
    expect(wrapper.vm).toBeTruthy();
  });
});
