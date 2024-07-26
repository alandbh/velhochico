import React from "react";

function Arrow({
  color,
  height,
  width,
}: {
  color: string;
  height: string;
  width: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        fill={color}
        d="M11 .5C5.202.5.5 5.202.5 11S5.202 21.5 11 21.5 21.5 16.798 21.5 11 16.798.5 11 .5zm3.626 10.652L8.86 15.324a.188.188 0 01-.297-.152v-1.1a.75.75 0 01.309-.606L12.28 11 8.872 8.534a.747.747 0 01-.31-.607V6.828c0-.152.174-.241.298-.152l5.766 4.172a.189.189 0 010 .304z"
      ></path>
    </svg>
  );
}

export default Arrow;
