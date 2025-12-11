export function fetchData(callback: (param: string) => void) {
  setTimeout(() => {
    callback("peanut butter");
  }, 1000);
}

export function fetchPromise(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("chocolate"), 1000);
  });
}

export function fetchReject(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("error")), 1000);
  });
}

export function fetchUser(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Billy"), 1000);
  });
}
