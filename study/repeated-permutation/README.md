## 중복 순열이란

- 순서를 따진다.
  - `abc` 와 `acb`는 서로 다른 존재이다.
- <u>중복을 허용한다</u>
- 길이가 n 인 범위의 r 자리 중복 순열 경우의 수 
  - 👉 `n`을 `r`번 곱하면 된다.
    - 길이가 3 인 범위의 4 자리 중복 순열 경우의 수
      - 👉 \\(3 X 3 X 3 X 3 = 3^4 = 81\\)

<br>

## 구현 코드(feat. 재귀)

```cpp
#include <iostream>
#include <vector>

using namespace std;

void repeatPermutation(vector<char> vec, vector<char> perm, int depth)
{
    if (depth == perm.size())
    {
        for(int i = 0; i < perm.size(); i++)
        {
            cout << perm[i] << " ";
        }
        cout << endl;
        
        return;
    }
    
    for(int i = 0; i < vec.size(); i++)
    {
        perm[depth] = vec[i];
        repeatPermutation(vec, perm, depth + 1);
    }
}

int main()
{
    const int r = 3;
    
    vector<char> v = {'a', 'b'};
    vector<char> perm(r);
    
    repeatPermutation(v, perm, 0);  // {'a', 'b'}의 길이 3의 중복순열 모두 출력하기

    return 0;
}

```
```
💎출력💎

a a a
a a b
a b a
a b b
b a a
b a b
b b a
b b b
```
