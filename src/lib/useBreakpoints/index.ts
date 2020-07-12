import {useState, useEffect, useMemo} from 'react';


const useWindowWidth = () => {
    const [width, setWidth] = useState(document.documentElement.clientWidth);

    useEffect(()=>{
        // todo:debounce
        const handler = () => setWidth(document.documentElement.clientWidth)
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
    }, []);

    return width;
}

export const useBreakpointUp = (breakpoint:number) : boolean => {
    const width = useWindowWidth();
    return useMemo(()=>breakpoint < width, [width]);
}