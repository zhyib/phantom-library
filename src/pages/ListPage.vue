<template>
  <view class="content">
    <div v-for="(item, index) in pageData.gameData" :key="index" class="card-box">
      <div class="card-header">
        <div class="card-header-left">
          <div class="card-header-title">{{ item.titleCn ? item.titleCn : item.titleEn }}</div>
          <div class="card-header-subtitle">{{ item.titleCn ? item.titleEn : '' }}</div>
        </div>
        <div class="card-header-right">
          <div>{{ item.rate }}</div>
        </div>
      </div>
      <div>{{ item.platform }}</div>
    </div>
  </view>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import GameInfo from '@model/GameInfo';
import uniRequest from '../util/uniRequest';

const pageData = reactive<{ gameData: GameInfo[] }>({
  gameData: [],
});

function queryGameList() {
  uniRequest({
    url: '/api/getAll',
    success: (res: ResponseBody<GameInfo[]>) => {
      pageData.gameData = res.data.data;
    },
  });
}

onMounted(queryGameList);
</script>

<style lang="scss" scoped>
.content {
  margin: 0 20px;
}

.card-box {
  height: 80px;
  margin: 10px 0;
  padding: 10px 20px;
  border-radius: 10px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 5px 5px 15px #808080, -5px -5px 15px #ffffff;
}

.card-header {
  display: flex;
  justify-content: space-between;

  .card-header-title {
    font-weight: bold;
  }

  .card-header-subtitle {
    font-size: 14px;
  }
}
</style>
