import React from "react";


export default function Logo({dataType}) {


  const Expense = <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.875 33.1375C21.875 35.708 23.8625 37.775 26.3005 37.775H31.2825C33.4025 37.775 35.125 35.973 35.125 33.7205C35.125 31.309 34.065 30.4345 32.5015 29.878L24.525 27.0955C22.9615 26.539 21.9015 25.691 21.9015 23.253C21.9015 21.027 23.624 19.1985 25.744 19.1985H30.726C33.164 19.1985 35.1515 21.2655 35.1515 23.836" stroke="#292D32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M28.5 16.575V40.425" stroke="#292D32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M55 28.5C55 43.128 43.128 55 28.5 55C13.872 55 2 43.128 2 28.5C2 13.872 13.872 2 28.5 2" stroke="#292D32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M55 12.6V2H44.4" stroke="#292D32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M41.75 15.25L55 2" stroke="#292D32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

  const Investment = <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M33.0783 5.7957L37.7417 15.1227C38.3777 16.421 40.0735 17.6664 41.5043 17.9048L49.9569 19.3092C55.3623 20.2101 56.6341 24.1316 52.7391 28.0002L46.1678 34.5714C45.0549 35.6843 44.4455 37.8306 44.79 39.3674L46.6712 47.502C48.1551 53.9408 44.737 56.4315 39.0401 53.0664L31.1175 48.3764C29.6866 47.5285 27.3284 47.5285 25.8711 48.3764L17.9484 53.0664C12.278 56.4315 8.8334 53.9143 10.3172 47.502L12.1985 39.3674C12.543 37.8306 11.9336 35.6843 10.8207 34.5714L4.24942 28.0002C0.380853 24.1316 1.62621 20.2101 7.03161 19.3092L15.4842 17.9048C16.8885 17.6664 18.5843 16.421 19.2202 15.1227L23.8838 5.7957C26.4275 0.734767 30.561 0.734767 33.0783 5.7957Z" stroke="#292D32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

  const Savings = <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_6_288)">
  <path d="M23.6753 34.6748C23.6753 38.0933 26.2988 40.8493 29.5582 40.8493H36.2097C39.0452 40.8493 41.3507 38.4378 41.3507 35.4698C41.3507 32.2368 39.9462 31.0973 37.8527 30.3553L27.1733 26.6453C25.0798 25.9033 23.6753 24.7638 23.6753 21.5307C23.6753 18.5627 25.9808 16.1512 28.8162 16.1512H35.4677C38.7272 16.1512 41.3507 18.9072 41.3507 22.3257" stroke="#292D32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M32.5 12.6V44.4" stroke="#292D32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6 20.55C6 7.3 11.3 2 24.55 2H40.45C53.7 2 59 7.3 59 20.55V36.45C59 49.7 53.7 55 40.45 55H24.55C11.3 55 6 49.7 6 36.45V31.2295" stroke="#292D32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
  <filter id="filter0_d_6_288" x="0.5" y="0.5" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="2"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_288"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_288" result="shape"/>
  </filter>
  </defs>
  </svg>
  
  
  return <>
    {dataType === 'Expense' ? Expense : dataType === 'Investment' ? Investment : Savings}

  </>;
}
