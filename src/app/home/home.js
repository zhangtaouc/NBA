import request from "../../utils/request";
export default {
  methods:{
  },
  

  mounted() {
    request.post("/api/testData.json",{name:1}).then((result => {
      console.log('数据获取成功啦', result)
    }))
  }
};
