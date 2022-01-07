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

// Disabling since this function will be used a default prop
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noOp = () => {};
