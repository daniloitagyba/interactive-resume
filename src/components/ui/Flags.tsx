import React from 'react';

export const FlagUS: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={className}>
    <mask id="circleMaskUS">
      <circle cx="256" cy="256" r="256" fill="white" />
    </mask>
    <g mask="url(#circleMaskUS)">
      <rect width="512" height="512" fill="#f0f0f0" />
      <path d="M0 36h512v72H0zm0 144h512v72H0zm0 144h512v72H0zm0 144h512v72H0z" fill="#d80027" />
      <rect width="270" height="270" fill="#2e52b2" />
      <g fill="white">
        <circle cx="65" cy="65" r="22" /><circle cx="135" cy="65" r="22" /><circle cx="205" cy="65" r="22" />
        <circle cx="65" cy="135" r="22" /><circle cx="135" cy="135" r="22" /><circle cx="205" cy="135" r="22" />
        <circle cx="65" cy="205" r="22" /><circle cx="135" cy="205" r="22" /><circle cx="205" cy="205" r="22" />
      </g>
    </g>
  </svg>
);

export const FlagBR: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={className}>
    <mask id="circleMaskBR">
      <circle cx="256" cy="256" r="256" fill="white" />
    </mask>
    <g mask="url(#circleMaskBR)">
      <rect width="512" height="512" fill="#009c3b" />
      <path d="M256 60l188 196-188 196-188-196z" fill="#ffdf00" />
      <circle cx="256" cy="256" r="110" fill="#002776" />
      <path d="M160 265c40-15 110-15 192 0" fill="none" stroke="white" strokeWidth="18" strokeLinecap="round" />
    </g>
  </svg>
);
