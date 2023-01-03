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
    url: '/api/getAll', // 仅为示例，并非真实接口地址。
    success: (res) => {
      const data = res.data as AnyObject;
      pageData.gameData = data.data;
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
  margin: 10px 0;
  border-radius: 10px;
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
