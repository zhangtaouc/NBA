import request from "../../utils/request";
import commonHeader from '../../components/header.vue';
export default {
  components: {
    commonHeader
  },
  data() {
    return {
      title: 'NBA赛程'
    }
  },
  methods:{
  },
  

  mounted() {
    request.get("/api/data/nba/schedule/schedule_0.json").then((result => {
      console.log('数据获取成功啦', result)
    }))
  }
};
