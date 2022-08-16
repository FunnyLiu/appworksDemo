<template>
  <div class="TestPage-page">
    <!-- v-chart 自定义图表类型切换，支持七种图表类型切换 -->
    <DiyToggleChart1 />
  </div>
</template>
<script>
import DiyToggleChart1 from './components/DiyToggleChart1';
export default {
  name: 'TestPage',
  components: {
    DiyToggleChart1,
  },
};
</script>
