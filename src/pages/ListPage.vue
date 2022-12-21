<template>
  <view class="content">
    <el-card v-for="(item, index) in pageData.gameData" :key="index">
      <template #header>
        <div class="card-header">
          <span>{{ item.titleCn ? item.titleCn : item.titleEn }}</span>
          <el-button class="button" text>{{ item.rate }}</el-button>
        </div>
      </template>
      <div>{{ item.platform }}</div>
    </el-card>
  </view>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import GameInfo from '@model/GameInfo';
import axiosUtil from '../util/axiosRequest';

const pageData = reactive<{ gameData: GameInfo[] }>({
  gameData: [],
});

function queryGameList() {
  axiosUtil
    .get<unknown, GameInfo[]>('/getAll')
    .then((data) => {
      pageData.gameData = data;
    });
}

onMounted(queryGameList);
</script>

<style lang="scss" scoped>
.content {
  margin: 0 20px;
}
</style>
