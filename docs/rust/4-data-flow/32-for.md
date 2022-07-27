# For 문

for분은 while문과는 조금 다릅니다.

while은 조건이 있을 때 그 조건을 충족할 때만 코드를 실행하지만 for은 하나하나 미리 더 자세히 조건을 정할 수 있습니다.

while문에는 불리언이 들어갑니다.

하지만 for문에는 다양한 조건이 들어갈 수 있습니다.

## 배열의 한 값씩

for의 가장 좋은 예는 배열의 값 중 하나하나 `i`라는 새로운 변수에 저장하고 사용하는 코드입니다.

참고로 for문에서 배열을 만들 때 숫자의 범위는 `..`를 사용합니다.

```rust
for i in 0..10 {
  println!("{}", i);
}
```

## `enumerate()`

`enumerate()`를 사용하면 배열의 인덱스와 값을 동시에 튜플로 받습니다.

```rust
for (i, x) in (0..10).enumerate() {
  println!("{}: {}", i, x);
}
```

위의 예시에서 `i`는 인덱스이고 `x`는 값입니다.