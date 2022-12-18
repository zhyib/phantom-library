<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import axiosUtil from './util/axiosRequest';
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
  axiosUtil.get('/getAll')
  .then((data) => {
    console.log(data)
  })
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
