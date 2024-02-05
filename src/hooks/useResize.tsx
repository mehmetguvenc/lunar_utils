import React, { useState, useEffect } from 'react';
import { waitForFinalEvent } from '../utils/debounce';
import { WindowHookModel } from '../models/resizeModel';


const useResize = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [screen, setScreen] = useState<WindowHookModel>({ height: 0, width: 0, orientation: 1 });

    useEffect(() => {
        if (window) {
            setScreen({ width: window.innerWidth, height: window.innerHeight, orientation: (window.innerWidth / window.innerHeight) })
            setIsMobile(window.innerWidth < 768);
        }
    }, [])

    const onResize = (e: UIEvent) => {
        waitForFinalEvent(() => {
            if (e) {
                if (e.target) {
                    const _target = e.target;
                    const _window = _target as Window;
                    console.log(_window)
                    setScreen({ width: _window.innerWidth, height: _window.innerHeight, orientation: (window.innerWidth / window.innerHeight) })
                    setIsMobile(_window.innerWidth < 768);
                }
            }
        }, 500, 'resize')

    };


    window.addEventListener('resize', onResize)

    return { isMobile, screen };
}

export default useResize;
module.exports = useResize;

