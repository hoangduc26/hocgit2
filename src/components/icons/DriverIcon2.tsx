import React from 'react';

export const DriverIcon2 = ({ className }) => (
    <svg
        width='24'
        height='24'
        className={className}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M10.5 5.5C10.5 5.36739 10.5527 5.24021 10.6464 5.14645C10.7402 5.05268 10.8674 5 11 5H13C13.1326 5 13.2598 5.05268 13.3536 5.14645C13.4473 5.24021 13.5 5.36739 13.5 5.5C13.5 5.63261 13.4473 5.75979 13.3536 5.85355C13.2598 5.94732 13.1326 6 13 6H11C10.8674 6 10.7402 5.94732 10.6464 5.85355C10.5527 5.75979 10.5 5.63261 10.5 5.5Z'
            fill='var(--main-color)'
        />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M16.682 9.26C16.5005 9.4025 16.265 9.5165 15.981 9.609C16.0353 10.1645 15.9728 10.7252 15.7975 11.255C15.6221 11.7849 15.3378 12.2722 14.9629 12.6856C14.5879 13.0991 14.1306 13.4294 13.6203 13.6555C13.11 13.8816 12.5581 13.9984 12 13.9984C11.4418 13.9984 10.8899 13.8816 10.3796 13.6555C9.86934 13.4294 9.41202 13.0991 9.03707 12.6856C8.66211 12.2722 8.37783 11.7849 8.20249 11.255C8.02715 10.7252 7.96464 10.1645 8.01897 9.609C7.73497 9.5165 7.49947 9.4025 7.31847 9.26C7.08347 9.075 6.92597 8.828 6.90747 8.531C6.88997 8.2555 6.99897 8.0215 7.10797 7.8565C7.21558 7.70022 7.34335 7.55883 7.48797 7.436C7.55797 7.3745 7.62697 7.32 7.69097 7.2725C7.67197 7.17 7.65097 7.046 7.62997 6.9025C7.5414 6.27224 7.49795 5.63645 7.49997 5C7.49997 4.843 7.56697 4.726 7.59797 4.6765C7.63697 4.614 7.68297 4.5605 7.72497 4.5175C7.80847 4.43 7.91647 4.341 8.03497 4.2555C8.27497 4.0815 8.60497 3.886 8.99697 3.703C9.77847 3.338 10.852 3 12 3C13.1485 3 14.2215 3.3385 15.003 3.703C15.34 3.85714 15.662 4.04209 15.965 4.2555C16.0835 4.341 16.1915 4.4305 16.275 4.5175C16.317 4.5605 16.363 4.614 16.402 4.6765C16.433 4.726 16.5 4.843 16.5 5C16.5 5.801 16.435 6.45 16.37 6.9025C16.349 7.046 16.328 7.17 16.309 7.2725C16.373 7.32 16.4425 7.3745 16.5125 7.436C16.6375 7.5455 16.7805 7.688 16.892 7.8565C17.0015 8.0215 17.11 8.2555 17.093 8.5315C17.0745 8.828 16.917 9.075 16.682 9.26ZM8.50097 5.159C8.50847 5.833 8.56447 6.378 8.61997 6.759C8.63297 6.849 8.64597 6.929 8.65797 7H15.342C15.3545 6.929 15.367 6.8485 15.38 6.759C15.435 6.378 15.4915 5.833 15.499 5.159C15.4601 5.1261 15.4199 5.09474 15.3785 5.065C15.198 4.9345 14.924 4.77 14.58 4.6095C13.8885 4.2865 12.962 4 12 4C11.038 4 10.1115 4.2865 9.41997 4.6095C9.07597 4.77 8.80197 4.9345 8.62197 5.0645C8.5804 5.09456 8.54004 5.12625 8.50097 5.1595V5.159ZM8.39397 8L8.39247 8.001C8.30618 8.0585 8.22352 8.12129 8.14497 8.189C8.05597 8.267 7.98497 8.343 7.94197 8.409C7.93174 8.42384 7.92255 8.43938 7.91447 8.4555C7.92155 8.46196 7.92889 8.46813 7.93647 8.474C8.01147 8.533 8.17247 8.6195 8.48647 8.705C8.54847 8.722 8.61497 8.738 8.68597 8.754L8.69047 8.755C8.94147 8.8105 9.25047 8.86 9.62697 8.899C10.1605 8.9545 10.832 8.991 11.671 8.999L12 9C13.6135 9 14.657 8.8995 15.31 8.755L15.314 8.754C15.3855 8.738 15.452 8.722 15.514 8.705C15.8275 8.62 15.989 8.533 16.0635 8.474C16.0711 8.46813 16.0784 8.46196 16.0855 8.4555C16.0776 8.4394 16.0685 8.42386 16.0585 8.409C16.0003 8.32727 15.9319 8.25334 15.855 8.189C15.7766 8.1213 15.6941 8.05851 15.608 8.001L15.606 8H8.39397ZM11.864 10C13.185 10 14.209 9.93 14.994 9.808C15.0198 10.2157 14.9621 10.6243 14.8244 11.0089C14.6867 11.3934 14.4719 11.7458 14.1932 12.0444C13.9145 12.3431 13.5777 12.5816 13.2036 12.7455C12.8294 12.9094 12.4257 12.9951 12.0172 12.9975C11.6088 12.9998 11.2041 12.9187 10.8281 12.7592C10.4521 12.5996 10.1126 12.365 9.83049 12.0696C9.54836 11.7742 9.32953 11.4243 9.18741 11.0413C9.04529 10.6584 8.98287 10.2504 9.00397 9.8425C9.73547 9.9435 10.673 10 11.864 10ZM8.03897 19.4385C8.01292 19.6245 7.99989 19.8122 7.99997 20V20.5C8.00003 20.6099 7.96386 20.7168 7.89707 20.8041C7.83028 20.8914 7.73659 20.9542 7.63048 20.9829C7.52437 21.0116 7.41177 21.0045 7.31009 20.9628C7.20841 20.9211 7.12331 20.847 7.06797 20.752C6.73099 20.9348 6.33666 20.9812 5.96647 20.8815L5.00047 20.6225C4.61635 20.5194 4.2889 20.268 4.09013 19.9235C3.89135 19.579 3.83752 19.1697 3.94047 18.7855L4.32847 17.3365C4.43147 16.9523 4.68287 16.6247 5.02736 16.4258C5.37186 16.227 5.78124 16.1731 6.16547 16.276L7.13147 16.5345C7.46747 16.6245 7.74647 16.822 7.94047 17.08C8.40333 16.4357 9.01303 15.911 9.71907 15.5493C10.4251 15.1876 11.2072 14.9993 12.0005 15C12.7934 14.9995 13.575 15.1878 14.2806 15.5493C14.9863 15.9108 15.5957 16.4352 16.0585 17.079C16.2594 16.8125 16.5439 16.6209 16.8665 16.535L17.8325 16.2765C18.2166 16.1735 18.626 16.2274 18.9704 16.4262C19.3149 16.6249 19.5664 16.9524 19.6695 17.3365L20.058 18.786C20.1089 18.9763 20.1219 19.1747 20.0962 19.37C20.0704 19.5653 20.0065 19.7537 19.9079 19.9242C19.8094 20.0948 19.6783 20.2443 19.522 20.3642C19.3657 20.4841 19.1873 20.5721 18.997 20.623L18.0315 20.8815C17.6619 20.9812 17.2682 20.9354 16.9315 20.7535C16.876 20.8483 16.7907 20.9222 16.689 20.9638C16.5873 21.0053 16.4747 21.0122 16.3687 20.9834C16.2626 20.9545 16.1691 20.8915 16.1024 20.8041C16.0358 20.7168 15.9998 20.6099 16 20.5V20C16.0001 19.8122 15.987 19.6245 15.961 19.4385L13.359 20.136C13.2382 20.3945 13.0462 20.6132 12.8055 20.7665C12.5647 20.9197 12.2853 21.0011 12 21.0011C11.7146 21.0011 11.4352 20.9197 11.1945 20.7665C10.9538 20.6132 10.7618 20.3945 10.641 20.136L8.03897 19.4385ZM10.56 19.0785C10.6271 18.8506 10.7473 18.6418 10.9107 18.4692C11.074 18.2967 11.276 18.1654 11.5 18.086V16.031C10.7986 16.1197 10.1333 16.3924 9.57151 16.8215C9.00973 17.2506 8.57154 17.8207 8.30147 18.474L10.56 19.0785ZM15.6985 18.4735C15.4283 17.8203 14.9901 17.2503 14.4283 16.8213C13.8666 16.3923 13.2012 16.1196 12.5 16.031V18.0855C12.952 18.2455 13.305 18.6155 13.44 19.079L15.6985 18.474V18.4735ZM16.772 18.1135C16.755 18.0501 16.7506 17.9839 16.7592 17.9188C16.7677 17.8537 16.789 17.7909 16.8218 17.734C16.8547 17.6771 16.8984 17.6273 16.9505 17.5873C17.0026 17.5473 17.062 17.518 17.1255 17.501L18.0915 17.242C18.2195 17.2078 18.3559 17.2258 18.4706 17.2921C18.5854 17.3584 18.6691 17.4675 18.7035 17.5955L19.092 19.0445C19.109 19.1079 19.1133 19.1741 19.1048 19.2392C19.0962 19.3043 19.0749 19.3671 19.0421 19.424C19.0093 19.4809 18.9656 19.5307 18.9135 19.5707C18.8614 19.6107 18.8019 19.64 18.7385 19.657L17.7725 19.916C17.709 19.933 17.6428 19.9373 17.5777 19.9287C17.5125 19.9202 17.4497 19.8988 17.3929 19.8659C17.336 19.8331 17.2861 19.7893 17.2462 19.7371C17.2062 19.685 17.1769 19.6255 17.16 19.562L16.772 18.1135ZM5.90697 17.242C5.84351 17.2249 5.7773 17.2205 5.71214 17.229C5.64697 17.2375 5.58412 17.2588 5.52719 17.2917C5.47025 17.3245 5.42035 17.3682 5.38033 17.4204C5.34032 17.4725 5.31097 17.532 5.29397 17.5955L4.90597 19.044C4.88896 19.1074 4.88461 19.1736 4.89316 19.2387C4.90172 19.3038 4.92302 19.3666 4.95585 19.4235C4.98868 19.4804 5.03239 19.5302 5.08448 19.5702C5.13658 19.6102 5.19604 19.6395 5.25947 19.6565L6.22547 19.9155C6.2889 19.9325 6.35506 19.9369 6.42017 19.9283C6.48528 19.9198 6.54807 19.8985 6.60495 19.8656C6.66183 19.8328 6.71168 19.7891 6.75166 19.737C6.79165 19.6849 6.82097 19.6254 6.83797 19.562L7.22597 18.113C7.24306 18.0495 7.24747 17.9833 7.23895 17.9182C7.23043 17.853 7.20914 17.7901 7.17631 17.7332C7.14348 17.6763 7.09974 17.6264 7.04761 17.5864C6.99547 17.5463 6.93596 17.517 6.87247 17.5L5.90647 17.2415L5.90697 17.242ZM12.5 19.5C12.5 19.6326 12.4473 19.7598 12.3535 19.8536C12.2598 19.9473 12.1326 20 12 20C11.8674 20 11.7402 19.9473 11.6464 19.8536C11.5527 19.7598 11.5 19.6326 11.5 19.5C11.5 19.3674 11.5527 19.2402 11.6464 19.1464C11.7402 19.0527 11.8674 19 12 19C12.1326 19 12.2598 19.0527 12.3535 19.1464C12.4473 19.2402 12.5 19.3674 12.5 19.5Z'
            fill='var(--main-color)'
        />
    </svg>
);
