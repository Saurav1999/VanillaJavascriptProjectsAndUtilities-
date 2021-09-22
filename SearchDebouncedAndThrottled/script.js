const search = document.getElementById('search')
console.log(search)


const debounce = (fn,delay) => {
    let timer
    console.log("getting called")
    return  function (){
    let context = this
      clearTimeout(timer)
        console.log()
       timer = setTimeout(() => {
            fn.apply(context,arguments)
        }, delay);
    }

}

const throttle = (fn,rate) => {
    let throttled = false
    return function(){
        let context = this
        if(throttled)
        {
            return 
        }
        throttled = true
        setTimeout(() => {
          fn.apply(context,arguments)
          throttled = false
        },rate)
    }

}
const userData = {
    name:"saurav",
    log:throttle(function(text){
        console.log(text,this.name)
    },1000)
}
// const userData = {
//     name:"saurav",
//     log:debounce(function(text){
//         console.log(text,this.name)
//     },400)
// }

search.addEventListener('keyup',() => userData.log("hello"))