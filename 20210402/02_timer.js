setTimeout(() => {
  console.log('1최뒤 실행함!')
}, 1*1000);

let count = 0;
let id = setInterval(() => {
  console.log('1초마다 실행함' + count)
  count++
}, 1*1000);

setTimeout(() => {
  console.log('5최뒤 꺼짐!')
  clearInterval(id)
}, 5*1000);