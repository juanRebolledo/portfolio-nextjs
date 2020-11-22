function LogoDark({width = 108, ...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={123}
      viewBox="0 0 108 123"
      {...props}
    >
      <defs>
        <filter
          id="prefix__a"
          x={5}
          y={0}
          width={70}
          height={123}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx={-5} />
          <feGaussianBlur stdDeviation={5} result="blur" />
          <feFlood floodColor="#121212" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="prefix__b"
          x={23}
          y={0}
          width={70}
          height={123}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx={-5} />
          <feGaussianBlur stdDeviation={5} result="blur-2" />
          <feFlood floodColor="#121212" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="translate(-460 -480)">
        <g
          data-name="Rect\xE1ngulo 1"
          transform="translate(460 487)"
          fill="#121212"
          stroke="#ffa238"
          strokeWidth={5}
        >
          <rect width={108} height={108} rx={11} stroke="none" />
          <rect x={2.5} y={2.5} width={103} height={103} rx={8.5} fill="none" />
        </g>
        <path
          data-name="Rect\xE1ngulo 4"
          fill="#121212"
          d="M525 527h43v28h-43z"
        />
        <circle
          data-name="Elipse 3"
          cx={2.5}
          cy={2.5}
          r={2.5}
          transform="translate(563 553)"
          fill="#ffa238"
        />
        <circle
          data-name="Elipse 4"
          cx={2.5}
          cy={2.5}
          r={2.5}
          transform="translate(563 524)"
          fill="#ffa238"
        />
      </g>
      <g filter="url(#prefix__a)">
        <text
          data-name="J"
          transform="translate(25 89)"
          fill="#ffa238"
          fontSize={71}
          fontFamily="Roboto-Bold, Roboto"
          fontWeight={700}
        >
          <tspan x={0} y={0}>
            {"J"}
          </tspan>
        </text>
      </g>
      <g filter="url(#prefix__b)">
        <text
          data-name="J"
          transform="translate(43 89)"
          fill="#ffa238"
          fontSize={71}
          fontFamily="Roboto-Bold, Roboto"
          fontWeight={700}
        >
          <tspan x={0} y={0}>
            {"J"}
          </tspan>
        </text>
      </g>
    </svg>
  )
}

export default LogoDark
