<template>
  <label class="form__label">
    <slot />
    <span class="form__value">{{ title }}</span>
    <span class="form__error" v-show="error">
      {{ error }}
    </span>
  </label>
</template>

<script>
export default {
  props: {
    title: String,
    error: String,
  },
  data() {
    return {};
  },
};
</script>