export function debounce(fn: Function, delay: number){
    let timer: NodeJS.Timeout;

    return function<T>(props: T){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn(props);
        }, delay);
    }
}