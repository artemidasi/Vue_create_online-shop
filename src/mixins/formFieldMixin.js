import BaseFormField from "@/components/BaseFormField";

export default {
  data() {
    return {};
  },
  props: {
    title: String,
    error: String,
    placeholder: String,
    value: String,
  },
  components: {
    BaseFormField,
  },
  computed: {
    dataValue: {
      get() {
        return this.value;
      },
      set(modelValue) {
        this.$emit('update:modelValue', modelValue);
      },
    },
  },
};
