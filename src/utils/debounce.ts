export function debounce(fn: Function, delay: number){
    let timer: number;

    return function<T>(props: T){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn(props);
        }, delay);
    }
}