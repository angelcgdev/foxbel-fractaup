export function debounce<T>(
  fn: (props: T) => void,
  delay: number
) {
  let timer: NodeJS.Timeout;

  return function (props: T) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(props);
    }, delay);
  };
}
