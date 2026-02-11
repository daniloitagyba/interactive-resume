import React from 'react';

export const FlagUS: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className={className}>
    <g fillRule="evenodd">
      <path fill="#bd3d44" d="M0 0h640v480H0"/>
      <path fill="#fff" d="M0 55h640v37H0zm0 74h640v37H0zm0 74h640v37H0zm0 74h640v37H0zm0 74h640v37H0zm0 74h640v37H0z"/>
      <path fill="#192f5d" d="M0 0h296v259H0z"/>
      <g fill="#fff">
        <g id="s18">
          <g id="s9">
            <g id="s5">
              <g id="s4">
                <path id="s" d="M247 90l5 15.2h16l-13 9 5 15.2-13-9-13 9 5-15.2-13-9h16z"/>
                <use xlinkHref="#s" y="42"/>
                <use xlinkHref="#s" y="84"/>
                <use xlinkHref="#s" y="126"/>
              </g>
              <use xlinkHref="#s" y="168"/>
            </g>
            <use xlinkHref="#s4" x="247" y="21"/>
          </g>
          <use xlinkHref="#s9" x="-247"/>
        </g>
        <use xlinkHref="#s18" x="-50"/>
        <use xlinkHref="#s9" x="-100"/>
        <use xlinkHref="#s5" x="-150"/>
      </g>
    </g>
  </svg>
);

export const FlagBR: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className={className}>
    <path fill="#009c3b" d="M0 0h640v480H0z"/>
    <path fill="#ffdf00" d="m320 40 280 200-280 200L40 240z"/>
    <circle cx="320" cy="240" r="140" fill="#002776"/>
    <path fill="#fff" d="M180 240a140 140 0 0 0 280 0c0-10-8-10-8-10a140 140 0 0 1-264 10s-8 0-8 10z"/>
  </svg>
);
