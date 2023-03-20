

export default {
  methods:{
    filterFormat(value,...args){
      for (arg in args) {
        let val= value;
        value = [arg](val)
      }
      return value
    }
  }
}
