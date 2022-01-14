import {
  mapGetters
} from 'vuex';
export default {
  data() {
    return {
      name: 'mixin'
    }
  },
  computed: {
    ...mapGetters({
      // 写入数据
    }),
  },
}
