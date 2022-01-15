export default {
  name:'deviceHeader',
  data() {
    return {
    }
  },
  props: ['title','isShowRight'],
  computed: {
  },
  watch: {},
  methods: {
    goBack() {
      router.back()
    },
  },
  created() {},
  mounted() {
  }
}