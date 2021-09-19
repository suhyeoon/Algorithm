const inputString = prompt("문자열을 입력해주세요.");

const stringArray = [];
let numberSum=0;

for(let element of inputString){
  if(isNaN(element)){
    stringArray.push(element);
  }else{
    numberSum += Number(element);
  }
}

let result = stringArray.sort(); // 문자부터 우선 정렬

if(numberSum != 0){ // 숫자들의 합이 0이 아니라면 배열에 가장 뒤에 삽입
  result.push(numberSum);
}

result = result.join(""); //배열을 문자열로 바꾸기

console.log(result);
