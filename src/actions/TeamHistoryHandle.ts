 export function uniqByKeepFirst(a: string[], key: (it: string) => string) {
    let seen = new Set();
    return a?.filter((item) => {
      let k = key(item);
      return seen.has(k) ? false : seen.add(k);
    });
  }