/**
 * Q: 배열 reduce - 객체 목록 통계
 *
 * - `calculateStatistics` 함수를 작성하세요.
 *   1. users 배열이 [{ age: 10 }, { age: 30 }, ...] 형태라고 가정
 *   2. 평균 나이와 최대 나이를 계산 후 { averageAge, maxAge } 반환
 *   3. reduce를 사용
 *
 * @param {{age:number}[]} users
 * @returns {{ averageAge: number, maxAge: number }}
 */

// TODO: calculateStatistics 함수를 작성하세요.
function calculateStatistics(users) {
  const calcu = users.reduce((acc, e) => {
    acc.totalage += e.age;
    acc.maxAge = Math.max(acc.maxAge, e.age);
    acc.count += 1;
    acc.averageAge = acc.totalage / acc.count;
    return acc
  })
  return { averageAge: calcu.averageAge, maxAge: calcu.maxAge }
}

// export를 수정하지 마세요.
export { calculateStatistics };
