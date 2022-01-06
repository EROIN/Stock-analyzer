export const parseFetchResponse = <T extends {json: () => any}>(
  response: T,
): any => response.json();

export const throttleFunc = (func: (...params: any) => any, delay: number) => {
  let id: any = null;
  return (...args: any) => {
    if (id) return;
    id = setTimeout(() => {
      func.apply(this, args);
      id = null;
    }, delay);
  };
};
