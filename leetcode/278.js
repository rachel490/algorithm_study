var solution = function (isBadVersion) {
  return function (n) {
    let left = 1;
    let right = n;

    while (left <= right) {
      const pivot = Math.ceil((left + right) / 2);

      if (isBadVersion(pivot) && !isBadVersion(pivot - 1)) {
        return pivot;
      } else if (isBadVersion(pivot)) {
        right = pivot - 1;
      } else if (!isBadVersion(pivot)) {
        left = pivot + 1;
      }
    }
  };
};
