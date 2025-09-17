<template>
  <label ref="labelText"> {{ nameLabel }} </label>
  <input ref="inputText" class="input-text-vue" />
</template>

<script>
export default {
  props: {
    nameInput: {  
      type: String,
      required: true,
    },
    nameLabel: {
        type: String,
        required: true,
    },
    typeInput: {
        type: String,
        required: false,
        default:"text"
    }
  },
  mounted() {
    this.$refs.inputText.name = this.nameInput;
    this.$refs.inputText.type = this.typeInput;
    this.$refs.labelText.htmlFor = this.nameInput
},
};
</script>

<style scoped lang="scss">
  @use '../../styles/abstracts/variables';

  label {
    color: variables.$cor-principal;
  }
  input{
    background-color: variables.$cor-clara;
    border: 1px solid variables.$cor-principal;
    padding: 4px;
    transition: 0.1s;
    
    &:focus{
      outline: none;
      border: 2px solid variables.$cor-principal;
      border-radius: 5px;
    }
  }
</style>
