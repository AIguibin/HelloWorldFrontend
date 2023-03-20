

export default {
  methods:{
    filterRules(value,...args){
      for (arg in args) {
        let val= value;
       value = [arg](val)
      }

      return value
    }
  }
}
