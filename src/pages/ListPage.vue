<template>
  <view class="content">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import axios, { AxiosResponse } from 'axios';
import axiosUtil from '../util/axiosRequest';
import GameInfo from '../../nodejs/src/model/GameInfo';

const title = ref('About');
const pageData = reactive<{ gameData: GameInfo[] }>({
  gameData: [],
});

function queryGameList() {
  // axios
  //   .get('/getAll')
  //   .then((data: AxiosResponse<Record<string, string>, any>) => {
  //     console.log(data.data);
  //   });
  axiosUtil
    .get('/getAll')
    .then((data) => {
      console.log(data);
    });
}

onMounted(queryGameList);
</script>

<style lang="scss" scoped>
.content {
  margin: 0 20px;
}
</style>
