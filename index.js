magic_num = 1337  // 答案。 數字梗："Leet" 的變種寫法之一。

// 抓到網頁元素
const button = document.querySelector(".btn") //get .btn元素
const guess_number = document.querySelector(".password") //get .password元素
const change_h1 = document.querySelector("h1") // h1本來就有的 直接呼叫


// 加入click事件
button.addEventListener('click', function (event) {  //換掉'click' 應該就能更換不同事件
  console.log(guess_number.value)
  
  if(guess_number.value == magic_num){
  document.body.style.backgroundColor = "rgb(255, 255, 255)"
  change_h1.innerText =  "變成 “哦?看來你有點天分”"
  }  

  else 
    change_h1.innerText = "再試一次?”"
})

  
