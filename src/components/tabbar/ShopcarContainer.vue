<template>
  <div
    @mouseenter="enter"
    @mouseleave="leave"
    title="更换皮肤"
    class="theme-trigger"
    :style="`background-position: -${position}px 0`"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      position: 0,
      is_enter: false,
    };
  },
  methods: {
    async enter() {
      this.is_enter = true;
      while (this.position !== 522 && this.is_enter) {
        await new Promise((resolve) =>
          window.requestAnimationFrame(() => resolve((this.position += 58)))
        );
      }
    },
    async leave() {
      this.is_enter = false;
      while (this.position !== 0 && !this.is_enter) {
        await new Promise((resolve) =>
          window.requestAnimationFrame(() => resolve((this.position -= 58)))
        );
      }
    },
  },
};
</script>

<style lang='less' scoped>
.theme-trigger {
  background-image: url(./../../images/1.png);
  background-position: 0 0;
  border-radius: 0 4px 0 0;
  cursor: pointer;
  width: 58px;
  height: 49px;
  position: absolute;
  top: 50px;
  right: 50px;
}
</style>