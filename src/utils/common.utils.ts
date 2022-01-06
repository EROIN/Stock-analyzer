export const parseFetchResponse = <T extends {json: () => any}>(
  response: T,
): any => response.json();

export const debounceFunc = (func: (...args: any) => any, delay: number) => {
  let id: any = null;
  return (...args: any) => {
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      func.apply(this, args);
      id = null;
    }, delay);
  };
};
