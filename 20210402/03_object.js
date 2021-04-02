let product = 
{
  제품명 : '망고',
  유형 : '당절임',
  원산지 : '필리핀'
}
console.log(product)
console.log(product.제품명)
console.log(product.유형)
console.log(product.원산지)

let student_idj = 
{
  name : '루니',
  num : 123456789,
  '가장 좋아하는 사람' : '라둥이',
  eat : function (food) {
    console.log(food+'를 먹습니다.')
  },
  numbers : [1,2,3,4,5],
  introduce : function() {console.log("내 이름은 "+this.name+"입니다")}

}
console.log(student_idj)
console.log(student_idj.name)
console.log(student_idj.num)
console.log(student_idj['가장 좋아하는 사람'])
student_idj.eat('소고기')
console.log(student_idj.numbers)
student_idj.introduce()

// Java와 달리 추후에 속성을 추가할 수 있다
student_idj.newFunc = () => {console.log('추가')}
student_idj.newFunc()

student_idj.직업 = '기업인'
console.log(student_idj.직업)


// 속성값 지우기 가능
delete student_idj.num

console.log(student_idj)


const 한빛 = 
{
  name : '혼자 공부하는 파이썬',
  price : 18000,
  publisher : '한빛미디어'
}
console.log("한빛미디어 책 ! "+ 한빛.name)

let 대환장파티 =
{ 
배열 : [
()=>{console.log('ㅋㅋ')},
student_idj,[1,3,5],{이름 :'라둥이', 나이 : 26}
],한빛
}

