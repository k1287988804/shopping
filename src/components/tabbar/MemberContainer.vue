<template>
  <div>
    MemberContainer
    <!-- <div class='ceshi'></div> -->
    <input type="button" value="点我弹出toast" @click="tanchuang()" />
    <input type="button" value="点我弹出提示框" @click="tishikuang()" />
    <input type="button" value="点我获取一条绕口令" @click="huoquraokouling()" />
  </div>
</template>

<script>
import { Toast, MessageBox } from "mint-ui";

export default {
  methods: {
    tanchuang() {
      Toast({
        message: "操作成功",
        iconClass: "icon icon-success",
      });
    },
    tishikuang() {
      MessageBox({
        title: "提示",
        message: "确定执行此操作?",
        showCancelButton: true,
      });
    },
    async huoquraokouling() {
      const { text: text } = await this.$fetch.get("/API/rkl.php");
      MessageBox('绕口令来了', text);
    },
  },
  mounted() {},
};
</script>

<style lang='less' scoped>
.ceshi {
  width: 2.67rem;
  height: 3.07rem;
  margin-top: 0.97rem;
  margin-left: 0.67rem;
  background-color: red;
}
</style>