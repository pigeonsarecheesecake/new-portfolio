import React from "react";
import './ToggleButton.css'

export default function ToggleButton({mode, onToggle}){
    if (mode === "light"){
        return(
            <button className={`toggle-container`} onClick={onToggle}>
            <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="50" height="50" fill="url(#pattern0)"/>
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_42_2" transform="scale(0.02)"/>
                    </pattern>
                    <image id="image0_42_2" width="50" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZ0lEQVR4nO2Zy2oUQRSGP5IMjiFBFFtcqHtjXkFF3QhCFNGH0BBvG3EjrnSvT+DtQUyWwpgY8TJu3IluxAQvUUzLgX+gHGZGq7u6ugz9QcFQ03UufapPnzoNDQ0NdfMEeMoWINf478kbRxIjuYjsAtoRHWkBO6nAiS/ACpBFcCQDngGfgR0EZBuwLIOeezqzBCx6XJ9JRy6dFpmguApeAXtDK+BPHS8r0lG5M9GcGBb6Igmgn3aJrVuKTIq/DlA6BhwB7qo8eQ980O97wGFd47IH+CaZ0Zxw7+LuvrmjQMfJVMNGR866mKwQ0S3NDWBThlqavgTMAJMaM5rrbUu79jqJcUvGfQcuDNg6LvbfRWBDa26SCKd0d82JYx7rjsuZX8BJamYCeKM7a5HwZd5J5SarNs45KXPUdhrGOLAqGWepkccyYqGEjCuScZ8a6cqIgyVkHJKM1wHtYgp4NyL/WwHosq55W1eUaclYK2GHtyP9Veya5qcjO7JIYHoZy152RZmtYmsVfdgvU5xrkvGAGjkvI1aVSn2xNS8kw1J5bdjp7a0MsbLDlwWt7VZxEvTljIzZUNnxr5zQGitv5kiEO44z83/ZZuOKRK9ovE1CjDnO5Nr3V5WRpjRmNdd7JjblRJHSJigTOme4nHbe9qNGd8B2srZP9Ock0ynv44BTXUsZ6JGq2nUNayg81H/9BlvEPsU+6rrNh06g8rulhlweq/lQZcsmRt8sWt8pq9qZSTUUioTe94tV5jhjOrcTkP3Az8hN7BXgB7CPwByI/FmhLZ3JkNyHnqI0jqTGlonIUhVn7IaGBrz4DejQ596rineIAAAAAElFTkSuQmCC"/>
                </defs>
            </svg>
        </button>
        )
    } 

    return(
        <button className={`toggle-container`} onClick={onToggle}>
            <svg width="60%" height="60%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5442 4.2568C16.1862 5.21153 13.0177 7.0108 10.3739 9.65459C2.0976 17.931 2.0976 31.3496 10.3739 39.626C18.6503 47.9025 32.069 47.9025 40.3452 39.626C43.0061 36.9652 44.8115 33.7729 45.7613 30.3908M19.8717 4.16666C17.9836 11.237 19.8129 19.0936 25.3596 24.6404C30.9065 30.1873 38.7631 32.0167 45.8334 30.1285" stroke="black" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    )
}