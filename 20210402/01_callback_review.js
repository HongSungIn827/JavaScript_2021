// 배열에 대해서 제공되는 함수 3가지
// forEach , map , filter
let numbers = [273,52,103,32,57]

numbers.forEach(function(value,index,array){
  console.log(`${index}번째 요소 : ${value}`)
})

// map 함수는 원본을 보존한다
// 원본을 변경할 경우 , 새로운 변수 선언하고 변경할 값을 할당한다
numbers = numbers.map(function(value,index,array){
  return value+value
})
numbers.forEach(console.log)
console.log(numbers)

// filter : 특정조건 만족하는 값을 필터링해서 새로운 배열 생성
const numbers2 = [0,1,2,3,4,5]
const eventNumbers = numbers2.filter(function(value) {
  return value%2 === 0  
})
console.log("원본 : "+numbers2)
console.log("원본 : "+eventNumbers)

// 화살표 함수
const arrowFunc = (value) => value%2===0
const eventNumbers2 = numbers2.filter(arrowFunc)
console.log("원본 : "+numbers2)
console.log("원본 : "+eventNumbers)

// 연속적으로 사용 가능
let numbersEx = [0,1,2,3,4,5,6,7,8,9]
numbersEx.filter((value))