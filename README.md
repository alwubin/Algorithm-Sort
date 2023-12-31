# Algorithm-Sort
정렬 알고리즘

### 정의
: 데이터를 정렬하는 알고리즘 

정렬의 시간 복잡도:  최악의 경우 `O(NlogN)`

### 정렬 기준 함수
보통 정렬 알고리즘은 `sort()`라는 정렬 함수 사용하는데, 이 때 정렬시 정렬 기준 함수(compareFunction)가 필요하다.

- 정렬 함수에서 반환값을 통해서 정렬 기준 함수가 사용된다.
- 두 개의 원소 문자 a,b(아무거나)를 입력으로 받는다.
  
원소 a와 b를 기준으로,
1. 반환값이 **0보다 작은 경우** -> a가 우선순위가 높아, a가 앞에 위치한다.
2. 반환값이 **0보다 큰 경우** -> b가 우선순위가 높아, b가 앞에 위치한다.
3. 반환값이 **0인 경우** -> a와 b의 순서를 변경하지 않는다. 
