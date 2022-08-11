magic_num = "1347"  // 答案。 數字梗："Leet" 的變種寫法之一。

// 抓到網頁元素
const button = document.querySelector(".btn") //get .btn元素
const guess_number = document.querySelector(".password") //get .password元素
const change_h1 = document.querySelector("h1") // h1本來就有的 直接呼叫


// 加入click事件
button.addEventListener('click', function (event) {  //換掉'click' 應該就能更換不同事件
  console.log(guess_number.value)
  
  // 幾A幾B
  if(guess_number.value == magic_num)
    change_h1.innerText =  "變成 “哦?看來你有點天分”"
  else{
    let A = 0
    let B = 0
    var i,j 
    for(i=0; i<magic_num.length; i++){
      for(j=0; j<guess_number.value.length; j++){
        if(magic_num[i] == guess_number.value[j] && i==j)
          A++
        else if(magic_num[i] == guess_number.value[j] && i!=j)
          B++
        else if(magic_num[i] != guess_number.value[j]){}
      }
    }  
    console.log(A+"A "+B+"B")
    change_h1.innerText = A+" A "+B+" B "
  }
  
  // 猜大小
  // if(guess_number.value.length > magic_num.length){
  //   change_h1.innerText =  "請輸入四位數字"
  // }
  // else{
  //   if(guess_number.value > magic_num)
  //     change_h1.innerText =  "再小一點"
  //   else if(guess_number.value == magic_num)
  //     change_h1.innerText =  "變成 “哦?看來你有點天分”"
  //   else
  //     change_h1.innerText =  "再大一點"
  // }  


  // if(guess_number.value == magic_num){
  //   document.body.style.backgroundColor = "rgb(255, 255, 255)"
  //   change_h1.innerText =  "變成 “哦?看來你有點天分”"
  // }  

  // else 
  //   change_h1.innerText = "再試一次?”"
})

  
