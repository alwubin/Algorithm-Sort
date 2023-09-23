// 정수에 대한 오름차순 정렬 (1)
function compare(a,b) {
  if (a < b) return -1; // a가 우선순위
  else if (a > b) return 1; // b가 우선순위
  else return 0; // 동일하며 변동없음
}
arr.sort(compare);


// 정수에 대한 오름차순 정렬 (2)
function compare(a,b) {
  return a - b; // a가 작을 땐 반환값 음수, 크면 양수, 같으면 0으로 우선순위 측정
}
arr.sort(compare);


// 정수에 대한 오름차순 정렬 (3)
arr.sort(function(a,b) {
  return a - b;
});
arr.sort(comapre);


// 정수에 대한 내림차순 정렬
function compare(a,b) {
  return b - a; // a가 클 때 반환값이 음수, 더 큰 값이 앞으로 감
}
arr.sort(compare);


// 문자열에 대한 오름차순 정렬 
// compareFunction을 정의하지 않고 sort() 함수 사용 
arr.sort();


// 문자열에 대한 내림차순 정렬
function compare(a,b) {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
}
arr.sort(compare);


// 대소문자 섞인 문자열 오름차순 정렬 
function compare(a,b) {
  //문자열 모두 대문자 또는 소문자로 변환
  let upperCaseA = a.toUpperCase();
  let upperCaseB = b.toUpperCase();
  if (upperCaseA < upperCaseB) return -1;
  else if (upperCaseA > upperCaseB) return 1;
  else return 0;
}
arr.sort(compare);


// 객체에 대하여 원하는 기준으로 내림차순 정렬
let arr = [
	{ name: '서유빈', score: 90 },
	{ name: '서호빵', score: 70 },
	{ name: '노정완', score: 100 }
];

function compare(a,b) { // 객체의 key=score로 내림차순 정렬 
  return b.score - a.score;
}
arr.sort(compare);


// 2차원 정수 배열 오름차순 정렬 (1)
arr.sort(function (a,b) {
  return a[0] + a[1] - (b[0] + b[1]);
});


// 2차원 정수 배열 오름차순 정렬 (2)
arr.sort(function (a,b) { // arr[0]이 같을 경우 arr[1] 기준으로 오름차순 정렬
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  else {
    return a[0] - b[0];
  }
});


// 2차원 정수 배열 내림차순 정렬 
arr.sort(function (a,b) {
  return b[0] + b[1] - (a[0] + a[1]);
});


