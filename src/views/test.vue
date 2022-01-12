<template>
  <div class="readers">{{ readersNumber }} 我是global.less中的颜色
    <div class="readers-book">
      {{ book.title }}
    </div>
    <div class="class_global class_min">
        我是全局的style2
    </div>
    <div class="class_global class_min2">
        我是全局的style2
    </div>
    <div class="class_global class_min2">
        VITE_BASE_PATH=>>{{url}}
    </div>
  </div>
</template>

<script>
  import { ref, reactive,onMounted } from 'vue'
  import {
  getTestList
} from '@/http/api/test'
  export default {
    setup() {
      onMounted(() => {
        console.log("onMounted===");
        getTableData()
      
    });
      const readersNumber = ref(0)
      const book = reactive({ title: 'Vue 3 Guide' })
      const url = ref(import.meta.env.VITE_BASE_PATH)


      const page = ref(1)
      const total = ref(0)
      const pageSize = ref(10)
      const tableData = ref([])
      const searchInfo = ref({})
      
      const getTableData = async() => {
        const table = await getTestList({ currentPage: page.value, pageSize: pageSize.value, ...searchInfo.value })
        
    }
    
      // expose to template
      return {
        readersNumber,
        book,
        url,
        getTableData,
      }
      
    }
  }
</script>
<style scoped lang="less">
    .readers{
        color: @color_test;
        
        .readers-book{
            color: blue;
        }
    }
    .class_min{
        font: 2rem sans-serif;
    }
    .class_min2{
        font: 200px sans-serif;
    }
</style>