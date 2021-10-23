## 순열이란

- 순서를 따진다.
  - `abc` 와 `acb`는 서로 다른 존재이다.
- 중복을 허용하지 않는다.
- `nPr`
  - 5P3 = 5 X 4 X 3
  - 4P1 = 4
  - 4P4 = 4! = 4 X 3 X 2 X 1

<br>

## 재귀로 구현한 코드 1

> `{'a', 'b', 'c', 'd'}` 배열의 `4P3`의 순열 출력하기

```cpp
#include <iostream>

using namespace std;

void swap(char & a, char & b)
{
    char temp = a;
    a = b;
    b = temp;
}

void permutation(char data [], int depth, int n, int r)
{
    if (depth == r)
    {
        for(int i = 0; i < r; i++)
            cout << data[i] << " ";
        cout << endl;
        
        return;
    }
    
    for(int i = depth; i < n; i++)
    {
        swap(data[depth], data[i]);   // 스왑
        permutation(data, depth + 1, n, r);  // 재귀
        swap(data[depth], data[i]);  // 다시 원래 위치로 되돌리기
    }
}
```
```cpp

int main()
{
    char arr [] = {'a', 'b', 'c', 'd'};
    
    permutation(arr, 0, 4, 3); // 4P3

    return 0;
}
```
```
출력

a b c
a b d
a c b
a c d
a d c
a d b
b a c
b a d
b c a
b c d
b d c
b d a
c b a
c b d
c a b
c a d
c d a
c d b
d b c
d b a
d c b
d c a
d a c
d a b
```

## STL 함수로 순열 구하기

> #include \<algorithm>

### next_permutation

> `bool` 타입을 리턴한다. 

> `nPn` 을 구하는 함수다.

```cpp
next_permutation(vec.begin(),vec.end());
```
- 시작 위치, 끝 위치를 인수로 넘겨 해당 범위를 넘겨주면 <u>인수로 넘긴 범위를 기준으로</u> <u>다음 순열 모양새로 정렬을 한 후</u> `true` 를 리턴한다.
  - 다음 순열이 없다면 `false` 리턴


```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main(){

	vector<int> v = {1, 2, 3};
	
  // 3P3 출력하는 코드

	do
	{
		for(int i = 0; i < v.size(); i++)
		{
			cout << v[i] << " ";
		}
		cout << '\n';

	}while(next_permutation(v.begin(),v.end()));   

}
```
```
출력

1 2 3
1 3 2
2 1 3
2 3 1
3 1 2
3 2 1
```

- 다음 순열이 있다면 `true`를 리턴하고 없으면 `false`를 리턴하므로 위와 같이 while 반복 문의 조건으로 넣어 모든 순열을 전부 구할 수 있다.
- 위의 코드는 {1, 2, 3}의 ✨`3P3`✨ 순열들을 순열 순서대로 출력하게 된다.

#### nPr

`next_permutation`은 `nPn` 순열을 구한다.
