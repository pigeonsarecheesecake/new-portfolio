import React from "react";
import "./About.css";

export default function About({mode}){
    return(
        <div className={`about page ${mode}`} id="about-page">
            {/* Skills */}
            <div className="skills-container">
                <h1>Skills</h1>
                <svg className = "css-skill" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9281 4.55869V6.70889H14.4299V0.0488281H19.9281V2.40527H16.7863V4.55869H19.9281ZM25.5802 2.40527H27.7767V0.0488281H22.2778C22.2778 0.0488281 22.2778 1.23164 22.2778 2.40527C23.0135 3.14092 23.3971 3.49307 24.461 4.55703C23.8391 4.55703 22.2778 4.55908 22.2778 4.55908V6.70889H27.7767V4.55869L25.5802 2.40527ZM33.3736 2.40527H35.5699V0.0488281H30.0713C30.0713 0.0488281 30.0713 1.23164 30.0713 2.40527C30.8067 3.14092 31.1905 3.49307 32.2544 4.55703C31.6328 4.55703 30.0713 4.55908 30.0713 4.55908V6.70889H35.57V4.55869L33.3736 2.40527ZM42.812 9.87412L39.4719 46.0544L24.9999 49.9509L10.5276 46.0544L7.18799 9.87412H42.812ZM36.0817 17.2308H24.9868H13.6958L14.2357 21.5998H24.9868H25.5907L24.9868 21.8512L14.6287 26.1653L14.9723 30.4358L24.9868 30.4684L30.3543 30.4854L30.0104 36.1799L24.9868 37.5943V37.5898L24.9456 37.6012L20.0937 36.3764L19.7992 32.8417H19.7832H15.2827H15.2669L15.856 39.6655L24.9868 42.3656V42.3607L25.0032 42.3656L34.0852 39.7146L35.2637 26.1654H24.9868H24.9614L24.9868 26.1545L35.6397 21.5999L36.0817 17.2308Z" />
                </svg>

                <svg className = "github-skill" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 0C11.1958 0 0 11.4767 0 25.632C0 36.9571 7.1625 46.5648 17.0979 49.9546C18.3458 50.1917 18.75 49.3971 18.75 48.7222V43.9503C11.7958 45.5011 10.3479 40.9258 10.3479 40.9258C9.21042 37.9631 7.57083 37.175 7.57083 37.175C5.30208 35.5836 7.74375 35.6178 7.74375 35.6178C10.2542 35.7972 11.575 38.26 11.575 38.26C13.8042 42.1775 17.4229 41.0454 18.85 40.3896C19.0729 38.7342 19.7208 37.6022 20.4375 36.9635C14.8854 36.312 9.04792 34.1141 9.04792 24.2949C9.04792 21.4946 10.025 19.2091 11.6229 17.4148C11.3646 16.7676 10.5083 14.1595 11.8667 10.6309C11.8667 10.6309 13.9667 9.94308 18.7437 13.2582C20.7375 12.69 22.875 12.4059 25 12.3952C27.125 12.4059 29.2646 12.69 31.2625 13.2582C36.0354 9.94308 38.1312 10.6309 38.1312 10.6309C39.4917 14.1617 38.6354 16.7697 38.3771 17.4148C39.9812 19.2091 40.95 21.4967 40.95 24.2949C40.95 34.1397 35.1021 36.3077 29.5354 36.9421C30.4312 37.7367 31.25 39.296 31.25 41.6883V48.7222C31.25 49.4036 31.65 50.2046 32.9187 49.9525C42.8458 46.5584 50 36.9528 50 25.632C50 11.4767 38.8062 0 25 0Z" />
                </svg>     

                <svg className = "html-skill" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.612 0.0488281H12.8612V2.27109H14.9188V0.0488281H17.1682V6.77822H14.9189V4.52471H12.8614V6.77822H10.6122V0.0488281H10.612ZM20.1259 2.28047H18.1459V0.0488281H24.3563V2.28047H22.3753V6.77822H20.1261V2.28047H20.1259ZM25.3418 0.0488281H27.6875L29.13 2.41338L30.5713 0.0488281H32.9173V6.77822H30.6772V3.44287L29.1299 5.83545H29.0913L27.5429 3.44287V6.77822H25.3418V0.0488281ZM34.0369 0.0488281H36.2867V4.554H39.4499V6.77822H34.0369V0.0488281ZM7.32275 9.85596L10.5401 45.9432L24.978 49.951L39.456 45.9374L42.6768 9.85586L7.32275 9.85596ZM35.9655 18.4198L35.7641 20.6637L35.6756 21.6586H35.661H24.9998H24.9844H18.7387L19.1432 26.1905H24.9844H24.9998H34.0799H35.2727L35.1646 27.3792L34.1246 39.0315L34.058 39.7788L24.9998 42.2895V42.2902L24.9795 42.296L15.9132 39.779L15.293 32.8297H17.3408H19.736L20.0512 36.3596L24.9803 37.6908L24.9844 37.6895V37.6892L29.921 36.3571L30.4344 30.6168H24.9998H24.9844H15.0953L14.0075 18.4198L13.9016 17.2326H24.9844H24.9998H36.0715L35.9655 18.4198Z" />
                </svg>

                <svg className = "react-skill" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.041 17.547C39.5417 17.3764 39.0387 17.2176 38.5322 17.0704C38.6162 16.7286 38.6937 16.3849 38.7646 16.0392C39.9072 10.4825 39.1602 6.00597 36.6104 4.53234C34.1689 3.11828 30.165 4.59191 26.126 8.11535C25.7288 8.463 25.3398 8.82108 24.959 9.18957C24.7051 8.94477 24.4447 8.70519 24.1777 8.47082C19.9443 4.70324 15.7012 3.11632 13.1543 4.59484C10.7129 6.01183 9.9873 10.2198 11.0156 15.4864C11.1185 16.0073 11.234 16.5258 11.3623 17.0421C10.7617 17.213 10.1816 17.3956 9.62695 17.589C4.66992 19.3224 1.5 22.0401 1.5 24.8585C1.5 27.7706 4.90234 30.6905 10.0713 32.4611C10.4906 32.6036 10.9137 32.7361 11.3408 32.8585C11.2021 33.4112 11.0794 33.9702 10.9727 34.5353C9.99609 39.7111 10.7578 43.8195 13.1943 45.2277C15.7109 46.6818 19.9326 45.1876 24.0479 41.5841C24.3734 41.2989 24.6989 40.9978 25.0244 40.6808C25.4359 41.0786 25.8591 41.4646 26.2939 41.839C30.2783 45.2745 34.2129 46.6622 36.6455 45.2501C39.1602 43.7911 39.9775 39.3771 38.916 34.0069C38.8346 33.5968 38.7409 33.1782 38.6348 32.7511C38.9316 32.6632 39.2223 32.5724 39.5068 32.4786C44.8779 30.6944 48.377 27.8097 48.377 24.8614C48.375 22.0294 45.1035 19.2941 40.041 17.547ZM27.4434 9.62902C30.9033 6.61046 34.1377 5.41906 35.6123 6.27062C37.1816 7.17785 37.792 10.8361 36.8057 15.6339C36.7406 15.9464 36.6702 16.2579 36.5947 16.5685C34.5299 16.0988 32.4361 15.7674 30.3271 15.5763C29.1197 13.8369 27.796 12.1811 26.3652 10.6202C26.7155 10.2804 27.0742 9.94998 27.4414 9.62902H27.4434ZM15.3408 27.2667C15.7646 28.087 16.2077 28.8972 16.6699 29.6974C17.1406 30.5138 17.6312 31.3181 18.1416 32.1105C16.6905 31.9527 15.2485 31.7203 13.8213 31.4142C14.2354 30.0743 14.7451 28.6827 15.3408 27.2667ZM15.3408 22.547C14.7549 21.1612 14.2588 19.798 13.8516 18.4816C15.1895 18.1818 16.6152 17.9366 18.1016 17.7511C17.6035 18.5284 17.1243 19.3172 16.6641 20.1173C16.2038 20.9174 15.7617 21.7273 15.3379 22.547H15.3408ZM16.4053 24.9073C17.0225 23.6202 17.6872 22.3579 18.3994 21.1202C19.111 19.8832 19.8685 18.6746 20.6719 17.4943C22.0664 17.3888 23.4961 17.3331 24.9404 17.3331C26.3848 17.3331 27.8232 17.3888 29.2168 17.4952C30.0117 18.673 30.7647 19.8774 31.4756 21.1085C32.1865 22.3396 32.86 23.5961 33.4961 24.878C32.8685 26.1697 32.1966 27.4373 31.4805 28.6808C30.7702 29.9178 30.0215 31.13 29.2344 32.3175C27.8428 32.4152 26.4023 32.4689 24.9375 32.4689C23.4727 32.4689 22.0596 32.423 20.6934 32.3341C19.8841 31.1499 19.1204 29.936 18.4023 28.6925C17.6842 27.449 17.0176 26.1873 16.4023 24.9073H16.4053ZM33.2139 29.6837C33.6859 28.8647 34.139 28.0349 34.5732 27.1944C35.1685 28.5441 35.6939 29.9236 36.1475 31.3273C34.7035 31.6524 33.2435 31.9018 31.7734 32.0743C32.2695 31.2872 32.7497 30.4903 33.2139 29.6837ZM34.5537 22.548C34.1214 21.7244 33.6719 20.9106 33.2051 20.1066C32.7493 19.3136 32.2744 18.5304 31.7803 17.7569C33.2754 17.9464 34.71 18.1984 36.0547 18.506C35.6223 19.8776 35.1214 21.2266 34.5537 22.548ZM24.96 12.0548C25.9351 13.1203 26.8559 14.2344 27.7188 15.3927C25.873 15.3048 24.026 15.3048 22.1777 15.3927C23.0889 14.1876 24.0215 13.0694 24.96 12.0548ZM14.1621 6.33019C15.7305 5.42003 19.1982 6.72081 22.8535 9.96984C23.0869 10.1778 23.3223 10.3956 23.5566 10.6212C22.1185 12.1819 20.7855 13.8362 19.5664 15.5734C17.4622 15.7629 15.3725 16.0892 13.3105 16.5499C13.1914 16.0707 13.084 15.5883 12.9883 15.1027C12.1045 10.588 12.6895 7.18468 14.1621 6.33019ZM11.876 30.9249C11.4854 30.8136 11.0996 30.6928 10.7188 30.5626C8.43359 29.7814 6.5459 28.7618 5.25 27.6515C4.08984 26.6564 3.50195 25.6632 3.50195 24.8585C3.50195 23.1485 6.04688 20.9669 10.291 19.4874C10.8242 19.3019 11.362 19.1323 11.9043 18.9786C12.5346 21.0043 13.298 22.9862 14.1895 24.9112C13.2874 26.863 12.5145 28.8718 11.876 30.9249ZM22.7285 40.0724C20.9092 41.6661 19.0869 42.796 17.4805 43.3653C16.0371 43.8761 14.8877 43.8907 14.1934 43.4894C12.7148 42.6349 12.0996 39.3351 12.9385 34.9093C13.0381 34.3885 13.152 33.8676 13.2803 33.3468C15.3628 33.7954 17.4735 34.1018 19.5977 34.2638C20.8287 36.01 22.1727 37.6737 23.6211 39.2443C23.3301 39.5304 23.0322 39.8058 22.7285 40.0724ZM25.0156 37.8048C24.0664 36.7784 23.1191 35.6427 22.1953 34.422C23.0931 34.4571 24.0072 34.4747 24.9375 34.4747C25.8926 34.4747 26.8379 34.4542 27.7695 34.4122C26.9098 35.5891 25.9906 36.7215 25.0156 37.8048ZM37.1758 40.5968C36.8965 42.1046 36.335 43.1105 35.6406 43.5128C34.1631 44.3702 31.0039 43.256 27.5977 40.3175C27.207 39.9816 26.8164 39.6212 26.4189 39.2433C27.8391 37.6666 29.1517 35.9962 30.3477 34.2433C32.4836 34.0623 34.6045 33.7344 36.6953 33.2618C36.791 33.6486 36.8757 34.0275 36.9492 34.3986C37.4189 36.7716 37.4863 38.9181 37.1758 40.5968ZM38.875 30.5734C38.6191 30.6583 38.3555 30.7403 38.0879 30.8204C37.4323 28.7852 36.6391 26.7969 35.7139 24.8693C36.6044 22.9673 37.3665 21.0078 37.9951 19.004C38.4746 19.1437 38.9404 19.2902 39.3887 19.4454C43.7266 20.9415 46.373 23.1564 46.373 24.8585C46.373 26.6749 43.5146 29.0323 38.875 30.5734Z" /><path d="M25 29.1553C25.8311 29.158 26.6443 28.914 27.3367 28.4542C28.029 27.9944 28.5694 27.3396 28.8893 26.5725C29.2092 25.8054 29.2944 24.9607 29.1339 24.1452C28.9734 23.3298 28.5745 22.5802 27.9878 21.9916C27.4011 21.403 26.6529 21.0017 25.8379 20.8385C25.023 20.6754 24.178 20.7577 23.4099 21.0752C22.6418 21.3926 21.9851 21.9308 21.5231 22.6217C21.0611 23.3125 20.8145 24.1249 20.8145 24.956C20.8133 25.5067 20.9207 26.0521 21.1304 26.5612C21.3402 27.0703 21.6483 27.5331 22.037 27.9231C22.4257 28.3131 22.8875 28.6226 23.3959 28.834C23.9043 29.0455 24.4494 29.1546 25 29.1553Z" />
                </svg>

                <svg className = "js-skill" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_22_7)"><path fill-rule="evenodd" clip-rule="evenodd" d="M38.32 46.0803C33.9575 46.0803 31.1375 44.0005 29.7625 41.2805L33.5875 39.0649C34.595 40.7099 35.9025 41.9177 38.22 41.9177C40.165 41.9177 41.4075 40.9445 41.4075 39.6021C41.4075 37.5821 38.7125 36.7928 36.81 35.9778C33.42 34.5353 31.17 32.7228 31.17 28.8953C31.17 25.3728 33.855 22.688 38.0525 22.688C41.0375 22.688 43.1875 23.7278 44.73 26.4453L41.0725 28.7952C40.2675 27.3527 39.395 26.7822 38.0525 26.7822C36.675 26.7822 35.8025 27.6552 35.8025 28.7952C35.8025 30.2052 36.675 30.7754 38.69 31.6479C42.9125 33.458 46.1075 34.8799 46.1075 39.5349C46.1075 43.7649 42.785 46.0803 38.32 46.0803ZM27.5 38.9978C27.5 43.8653 24.5025 46.438 20.34 46.438C16.58 46.438 14.3275 45 13.22 42.5H13.1825H13.165H13.155L16.9775 39.8279C17.715 41.1354 18.38 42.063 19.99 42.063C21.535 42.063 22.5 41.2806 22.5 38.9331V22.5H27.5V38.9978ZM0 50H50V0H0V50Z" /></g><defs><clipPath id="clip0_22_7"><rect width="50" height="50" fill="white"/></clipPath></defs>
                </svg>

                <svg className = "figma-skill" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 4.6875C14.4353 4.6875 10.9375 8.18527 10.9375 12.5C10.9375 15.0556 12.1646 17.3246 14.0617 18.75C12.1646 20.1754 10.9375 22.4444 10.9375 25C10.9375 27.5556 12.1646 29.8246 14.0617 31.25C12.1646 32.6754 10.9375 34.9444 10.9375 37.5C10.9375 41.8148 14.4353 45.3125 18.75 45.3125C23.0648 45.3125 26.5625 41.8148 26.5625 37.5V32.8125V31.2506C27.8681 32.2312 29.4912 32.8125 31.25 32.8125C35.5648 32.8125 39.0625 29.3148 39.0625 25C39.0625 22.4444 37.8354 20.1754 35.9383 18.75C37.8354 17.3246 39.0625 15.0556 39.0625 12.5C39.0625 8.18527 35.5648 4.6875 31.25 4.6875H26.5625H25H23.4375H18.75ZM31.25 17.1875C33.8387 17.1875 35.9375 15.0888 35.9375 12.5C35.9375 9.91117 33.8387 7.8125 31.25 7.8125H26.5625V17.1875H31.25ZM23.4375 25V20.3125H18.75C16.1612 20.3125 14.0625 22.4112 14.0625 25C14.0625 27.5887 16.1612 29.6875 18.75 29.6875H23.4375V25ZM26.5625 25C26.5625 22.4112 28.6612 20.3125 31.25 20.3125C33.8387 20.3125 35.9375 22.4112 35.9375 25C35.9375 27.5887 33.8387 29.6875 31.25 29.6875C28.6612 29.6875 26.5625 27.5887 26.5625 25ZM18.75 7.8125H23.4375V17.1875H18.75C16.1612 17.1875 14.0625 15.0888 14.0625 12.5C14.0625 9.91117 16.1612 7.8125 18.75 7.8125ZM18.75 32.8125H23.4375V37.5C23.4375 40.0887 21.3387 42.1875 18.75 42.1875C16.1612 42.1875 14.0625 40.0887 14.0625 37.5C14.0625 34.9112 16.1612 32.8125 18.75 32.8125Z" />
                </svg>

                <svg className = "python-skill" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_22_27)"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.86 46.145C30.655 46.145 29.68 45.1652 29.68 43.9539C29.68 42.7426 30.655 41.7651 31.86 41.7651C33.065 41.7651 34.04 42.7426 34.04 43.9539C34.04 45.1652 33.065 46.145 31.86 46.145ZM25.18 50C37.875 50 37.0825 44.4666 37.0825 44.4666L37.0675 38.7341H24.955V37.0129H41.8775C41.8775 37.0129 50 37.9403 50 25.0659C50 12.1915 42.9125 12.6453 42.9125 12.6453H38.68V18.6218C38.68 18.6218 38.9075 25.7458 31.705 25.7458H19.69C19.69 25.7458 12.94 25.6387 12.94 32.3059V43.3276C12.94 43.3276 11.915 50 25.18 50ZM18.1425 3.85498C19.3475 3.85498 20.32 4.83484 20.32 6.04614C20.32 7.25744 19.3475 8.23486 18.1425 8.23486C16.9375 8.23486 15.9625 7.25744 15.9625 6.04614C15.9625 4.83484 16.9375 3.85498 18.1425 3.85498ZM24.82 0C12.1275 0 12.92 5.53345 12.92 5.53345L12.935 11.2659H25.0475V12.9871H8.12248C8.12248 12.9871 0 12.0597 0 24.9341C0 37.8085 7.09 37.3547 7.09 37.3547H11.32V31.3782C11.32 31.3782 11.0925 24.2542 18.2975 24.2542H30.31C30.31 24.2542 37.06 24.3613 37.06 17.6941V6.67236C37.06 6.67236 38.085 0 24.82 0Z" /></g><defs><clipPath id="clip0_22_27"><rect width="50" height="50" fill="white"/></clipPath></defs>
                </svg>

                <svg className = "git-skill" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.9463 7.97593C26.3192 6.34874 23.6809 6.34874 22.0538 7.97593L20.6546 9.37503L23.9209 12.6412C24.265 12.5491 24.6267 12.5 25 12.5C27.3013 12.5 29.1667 14.3655 29.1667 16.6667C29.1667 17.0399 29.1175 17.4017 29.0257 17.7459L33.2959 22.0161C33.64 21.9242 34.0017 21.875 34.375 21.875C36.6763 21.875 38.5417 23.7404 38.5417 26.0417C38.5417 28.3429 36.6763 30.2084 34.375 30.2084C32.0738 30.2084 30.2084 28.3429 30.2084 26.0417C30.2084 25.6684 30.2575 25.3067 30.3494 24.9625L27.0834 21.6963V31.8075C28.3288 32.5279 29.1667 33.8744 29.1667 35.4167C29.1667 37.7179 27.3013 39.5834 25 39.5834C22.6988 39.5834 20.8334 37.7179 20.8334 35.4167C20.8334 33.8744 21.6713 32.5279 22.9167 31.8075V20.2759C21.6713 19.5555 20.8334 18.2089 20.8334 16.6667C20.8334 16.2934 20.8825 15.9317 20.9744 15.5874L17.7084 12.3213L7.97593 22.0538C6.34874 23.6809 6.34874 26.3192 7.97593 27.9463L22.0538 42.0242C23.6809 43.6513 26.3192 43.6513 27.9463 42.0242L42.0242 27.9463C43.6513 26.3192 43.6513 23.6809 42.0242 22.0538L27.9463 7.97593ZM19.1075 5.02963C22.3619 1.77527 27.6382 1.77528 30.8925 5.02966L44.9704 19.1075C48.2248 22.3619 48.2248 27.6382 44.9704 30.8925L30.8925 44.9704C27.6382 48.2248 22.3619 48.2248 19.1075 44.9704L5.02963 30.8925C1.77527 27.6382 1.77528 22.3619 5.02966 19.1075L19.1075 5.02963Z" />
                </svg>

                <svg className = "java-skill" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9373 20.3485C18.4754 19.3274 18.2684 18.1364 18.6212 17.0545C18.974 15.9483 19.7641 15.061 20.5542 14.2344C22.754 12.0341 25.4649 10.4175 27.6164 8.18106C28.8075 6.95322 29.7919 5.48242 30.1322 3.79268C30.4119 2.55293 30.2783 1.27666 30.0231 0.0488281C31.1657 1.34951 31.5425 3.20928 31.2142 4.88682C30.8619 6.7708 29.8162 8.43604 28.5886 9.87031C27.6041 11.0253 26.4735 12.0463 25.2946 12.9946C23.921 14.1008 22.5719 15.2919 21.709 16.8479C20.9793 18.1118 20.8091 19.6678 21.3077 21.0414C22.1222 23.3994 24.0182 25.1499 25.0516 27.3742C23.9087 26.3652 22.7907 25.3199 21.745 24.214C20.6514 23.047 19.618 21.8073 18.9373 20.3485ZM25.1365 18.5008C24.9299 20.4336 25.9385 22.2568 27.1422 23.6913C27.7254 24.3354 28.2239 25.1256 28.248 26.0252C28.2725 27.2281 27.5921 28.3469 26.7164 29.1366C26.9233 29.1126 27.0691 28.9301 27.2393 28.8329C28.5521 27.9941 29.816 26.9366 30.4602 25.4904C30.8857 24.5058 30.7885 23.3387 30.2295 22.4269C29.5729 21.3572 28.7101 20.4091 28.1997 19.2423C27.9197 18.5859 27.8225 17.8202 28.0536 17.1273C28.3577 16.1915 29.0139 15.4256 29.7069 14.757C31.6151 12.9461 33.9246 11.6571 36.137 10.2474C33.3412 11.0495 30.582 12.1558 28.2239 13.8941C26.7287 15.0124 25.3432 16.5682 25.1365 18.5008ZM38.4225 27.6418C39.7475 27.7148 41.0477 28.6871 41.2911 30.0243C41.5221 31.1791 40.9631 32.3216 40.2457 33.1967C39.0665 34.6066 37.474 35.6157 35.87 36.4788C35.7116 36.5756 35.578 36.6973 35.4564 36.8312C37.5715 36.2962 39.6863 35.4943 41.4004 34.1206C42.3482 33.3305 43.187 32.2848 43.3695 31.0328C43.5397 29.9512 43.0902 28.8328 42.2877 28.1157C41.3151 27.228 39.9419 26.9001 38.6532 27.0704C37.9117 27.1676 37.0974 27.3256 36.587 27.9455C37.195 27.8243 37.7901 27.581 38.4225 27.6418ZM12.0332 31.1179C13.6252 31.5434 15.2664 31.665 16.8952 31.7745C18.3538 31.8717 19.8126 31.8962 21.2835 31.8839C25.0758 31.8234 28.8925 31.5679 32.612 30.7414C32.9643 30.6564 33.3535 30.5956 33.6699 30.3769C34.2897 29.9755 34.97 29.6594 35.6388 29.3434C32.612 29.8296 29.5731 30.2433 26.5101 30.4376C23.4105 30.632 20.2864 30.7536 17.1749 30.5471C16.2875 30.4621 15.3757 30.4132 14.5493 30.0727C14.3545 29.9877 14.0871 29.8179 14.1842 29.5622C14.3667 29.234 14.7314 29.0762 15.0474 28.906C16.3847 28.2738 17.8432 27.9215 19.2655 27.5082C16.822 27.4715 14.3909 28.0913 12.1547 29.0518C11.6562 29.295 11.0971 29.4894 10.6961 29.9027C10.5377 30.0726 10.5377 30.3648 10.7203 30.5104C11.085 30.8386 11.5709 30.9844 12.0332 31.1179ZM31.7249 34.4609C29.5976 34.8378 27.458 35.1906 25.3064 35.2997C22.9483 35.4577 20.5902 35.3238 18.2565 35.0809C17.8069 35.02 17.357 34.9473 16.956 34.7407C16.7494 34.619 16.5428 34.4247 16.555 34.169C16.5791 33.7681 16.9193 33.4887 17.1626 33.1968C16.4092 33.4643 15.6554 33.7436 15.0234 34.2425C14.7556 34.4491 14.4884 34.7771 14.5612 35.1417C14.671 35.5671 15.0842 35.8224 15.4489 36.0167C16.3481 36.4789 17.3571 36.6853 18.3419 36.8677C20.8333 37.269 23.3739 37.2812 25.8778 37.1106C28.5283 36.9041 31.1657 36.4667 33.7304 35.7129C33.0011 35.385 32.3082 35.0077 31.7249 34.4609ZM18.366 38.6671C17.6853 38.8614 16.9923 39.0926 16.4333 39.5418C16.1533 39.7606 15.9348 40.1379 16.0687 40.4903C16.2389 40.9399 16.6644 41.2078 17.0651 41.4381C18.1108 42.0098 19.2897 42.2769 20.4444 42.4838C23.0582 42.8968 25.7442 42.8361 28.3456 42.3744C29.8891 42.0825 31.433 41.6692 32.8671 41.0253C31.9312 40.6362 31.0198 40.1984 30.1447 39.6881C28.6252 39.9555 27.0933 40.2353 25.5374 40.3324C23.4835 40.4904 21.4047 40.3202 19.3504 40.065C18.8641 39.9556 18.2565 39.907 17.9283 39.4814C17.7584 39.1286 18.1472 38.8733 18.366 38.6671ZM34.9946 46.4826C36.6961 46.1307 38.4103 45.7288 39.9661 44.9391C40.452 44.6591 41.0477 44.3552 41.2061 43.7721C41.2911 43.213 40.7076 42.9211 40.2943 42.69C40.5495 42.9823 40.7197 43.4075 40.4642 43.7477C40.0387 44.3192 39.3098 44.5378 38.6654 44.7566C36.6478 45.3279 34.5568 45.559 32.4784 45.79C26.972 46.2883 21.429 46.41 15.9229 45.948C14.0752 45.7533 12.1908 45.5468 10.4284 44.8905C10.1491 44.7688 9.72358 44.6472 9.72358 44.2702C9.83267 43.9427 10.1491 43.7598 10.4284 43.6018C11.6925 42.9577 13.1026 42.605 14.5125 42.52C14.0997 42.2768 13.6133 42.2526 13.1393 42.2648C11.96 42.3013 10.8053 42.605 9.68725 42.9823C8.7269 43.3343 7.74233 43.7235 6.97632 44.4287C6.67251 44.6958 6.39321 45.2062 6.70884 45.5712C7.19517 46.0939 7.94897 46.2274 8.61704 46.3854C12.361 47.0299 16.1533 47.394 19.9462 47.5279C24.9786 47.6742 30.0472 47.4553 34.9946 46.4826ZM39.9783 47.1393C37.6929 47.8686 35.3228 48.2695 32.9644 48.5979C28.8925 49.1083 24.7838 49.2663 20.6874 49.145C18.1957 49.0479 15.7041 48.8776 13.2484 48.464C13.8197 48.853 14.5249 48.9744 15.1814 49.1569C17.9409 49.7405 20.7727 49.8499 23.5808 49.9349C27.7009 50.0079 31.8217 49.8499 35.8818 49.2056C37.8026 48.8657 39.7352 48.4521 41.4609 47.5525C42.3608 47.0785 43.2726 46.3488 43.4299 45.2916C42.5186 46.2638 41.2061 46.7138 39.9783 47.1393Z" />
                </svg>
            </div>
            {/* Description */}
            <div className={`about-description-container ${mode}`} >
                    <h1>About</h1>
                    <p>
                        My name is William Ryuputra. I am an entry-level front-end developer and UI / UX designer. I was born in Indonesia and came to the United States back in 2012. I love to design, code, thrift, and collect a lot of things!<br></br><br></br>
                        I have a Bachelor of Science degree in Computer Science with a concentration in Information Systems. Currently I am working as a part-time specialist at Apple. On my free time, I build web-apps and learn new technologies I can implement in my projects.<br></br><br></br>
                        I am currently enrolled in the Coursera’s Front-End Developer Professional Certificate course by Meta, and Codecademy’s Front-End Path course. My goal is to become a professional front-end developer that focuses primarily on accessibility. I still have a lot to learn, and that makes it exciting!<br></br><br></br>
                        Thank you for visiting my website!
                    </p>
            </div>
        </div>
    )
}