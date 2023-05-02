import React from "react";
import './ToggleButton.css'

export default function ToggleButton({mode, onToggle}){
    // Light mode button
    if (mode === "light"){
        return(
            <button className={`toggle-container`} onClick={onToggle}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.31818 3.40909V0H10.6818V3.40909H9.31818ZM15.1364 5.81818L14.1818 4.86364L16.5909 2.43182L17.5455 3.40909L15.1364 5.81818ZM16.5909 10.6818V9.31818H20V10.6818H16.5909ZM9.31818 20V16.5909H10.6818V20H9.31818ZM4.84091 5.79545L2.45455 3.40909L3.40909 2.45455L5.81818 4.86364L4.84091 5.79545ZM16.6136 17.5455L14.1818 15.1364L15.1136 14.2045L17.5682 16.5682L16.6136 17.5455ZM0 10.6818V9.31818H3.40909V10.6818H0ZM3.43182 17.5455L2.45455 16.5909L4.84091 14.2045L5.34091 14.6591L5.84091 15.1364L3.43182 17.5455ZM10 15.4545C8.48485 15.4545 7.19697 14.9242 6.13636 13.8636C5.07576 12.803 4.54545 11.5152 4.54545 10C4.54545 8.48485 5.07576 7.19697 6.13636 6.13636C7.19697 5.07576 8.48485 4.54545 10 4.54545C11.5152 4.54545 12.803 5.07576 13.8636 6.13636C14.9242 7.19697 15.4545 8.48485 15.4545 10C15.4545 11.5152 14.9242 12.803 13.8636 13.8636C12.803 14.9242 11.5152 15.4545 10 15.4545ZM10 14.0909C11.1364 14.0909 12.1023 13.6932 12.8977 12.8977C13.6932 12.1023 14.0909 11.1364 14.0909 10C14.0909 8.86364 13.6932 7.89773 12.8977 7.10227C12.1023 6.30682 11.1364 5.90909 10 5.90909C8.86364 5.90909 7.89773 6.30682 7.10227 7.10227C6.30682 7.89773 5.90909 8.86364 5.90909 10C5.90909 11.1364 6.30682 12.1023 7.10227 12.8977C7.89773 13.6932 8.86364 14.0909 10 14.0909Z" fill="black"/>
                </svg>
            </button>
        )
    } 

    // Light mode button
    return(
        <button className={`toggle-container`} onClick={onToggle}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 20C7.22222 20 4.86111 19.0278 2.91667 17.0833C0.972222 15.1389 0 12.7778 0 10C0 7.22222 0.972222 4.86111 2.91667 2.91667C4.86111 0.972222 7.22222 0 10 0C10.1481 0 10.3056 0.00462963 10.4722 0.0138889C10.6389 0.0231481 10.8519 0.037037 11.1111 0.0555556C10.4444 0.648148 9.92593 1.37963 9.55556 2.25C9.18519 3.12037 9 4.03704 9 5C9 6.66667 9.58333 8.08333 10.75 9.25C11.9167 10.4167 13.3333 11 15 11C15.963 11 16.8796 10.8287 17.75 10.4861C18.6204 10.1435 19.3519 9.66667 19.9444 9.05556C19.963 9.27778 19.9769 9.45833 19.9861 9.59722C19.9954 9.73611 20 9.87037 20 10C20 12.7778 19.0278 15.1389 17.0833 17.0833C15.1389 19.0278 12.7778 20 10 20ZM10 18.3333C12.0185 18.3333 13.7778 17.7083 15.2778 16.4583C16.7778 15.2083 17.713 13.7407 18.0833 12.0556C17.6204 12.2593 17.1235 12.412 16.5926 12.5139C16.0617 12.6157 15.5309 12.6667 15 12.6667C12.8761 12.6667 11.0674 11.9199 9.57375 10.4262C8.08014 8.93262 7.33333 7.12387 7.33333 5C7.33333 4.55556 7.37963 4.0787 7.47222 3.56944C7.56481 3.06019 7.73148 2.48148 7.97222 1.83333C6.15741 2.33333 4.65278 3.34722 3.45833 4.875C2.26389 6.40278 1.66667 8.11111 1.66667 10C1.66667 12.3148 2.47685 14.2824 4.09722 15.9028C5.71759 17.5231 7.68519 18.3333 10 18.3333Z" fill="black"/>
            </svg>
        </button>
    )
}