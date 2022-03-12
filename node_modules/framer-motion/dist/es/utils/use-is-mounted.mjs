import { useRef, useLayoutEffect } from 'react';

function useIsMounted() {
    var isMounted = useRef(false);
    useLayoutEffect(function () {
        isMounted.current = true;
        return function () {
            isMounted.current = false;
        };
    }, []);
    return isMounted;
}

export { useIsMounted };
