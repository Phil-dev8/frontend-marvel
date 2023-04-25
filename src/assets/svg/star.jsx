export const StarSvg = ({ backgroundColor, borderColor, size, cursor }) => {
  return (
    <svg
      width={size || 30}
      height={size || 30}
      cursor={cursor || "unset"}
      viewBox="0 -2.12 95.444 95.444"
      xmlns="
http://www.w3.org/2000/svg
"
    >
      <g transform="translate(-595.671 -698.786)">
        <path
          d="M687.689,737.222,667.74,756.675l4.727,27.475a8.46,8.46,0,0,1,.048,1.1c0,1.426-.657,2.748-2.251,2.748a4.444,4.444,0,0,1-2.2-.661l-24.676-12.971-24.676,12.971a4.622,4.622,0,0,1-2.2.661c-1.594,0-2.307-1.322-2.307-2.748a8.559,8.559,0,0,1,.1-1.1l4.727-27.475-20.005-19.453a4.292,4.292,0,0,1-1.37-2.639c0-1.651,1.706-2.308,3.076-2.528l27.592-4.014,12.362-25c.5-1.042,1.426-2.251,2.692-2.251s2.2,1.209,2.692,2.251l12.362,25,27.592,4.014c1.322.22,3.076.877,3.076,2.528A4.1,4.1,0,0,1,687.689,737.222Z"
          fill={backgroundColor || "#ffd500"}
          stroke={borderColor || "black"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        ></path>
      </g>
    </svg>
  );
};
