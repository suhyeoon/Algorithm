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
