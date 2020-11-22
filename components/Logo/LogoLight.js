function LogoLight(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={108}
      height={108}
      viewBox="0 0 108 108"
      {...props}
    >
      <defs>
        <filter
          id="prefix__a"
          x={20}
          y={8}
          width={45}
          height={93}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx={-5} />
          <feGaussianBlur result="blur" />
          <feFlood floodColor="#ffa238" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="prefix__b"
          x={38}
          y={8}
          width={45}
          height={93}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx={-5} />
          <feGaussianBlur result="blur-2" />
          <feFlood floodColor="#ffa238" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="translate(-460 -487)">
        <g
          data-name="Rect\xE1ngulo 1"
          transform="translate(460 487)"
          fill="#f2e9e4"
          stroke="#000"
          strokeWidth={5}
        >
          <rect width={108} height={108} rx={11} stroke="none" />
          <rect x={2.5} y={2.5} width={103} height={103} rx={8.5} fill="none" />
        </g>
        <path
          data-name="Rect\xE1ngulo 4"
          fill="#f2e9e4"
          d="M525 527h43v28h-43z"
        />
        <circle
          data-name="Elipse 3"
          cx={2.5}
          cy={2.5}
          r={2.5}
          transform="translate(563 553)"
        />
        <circle
          data-name="Elipse 4"
          cx={2.5}
          cy={2.5}
          r={2.5}
          transform="translate(563 524)"
        />
      </g>
      <g filter="url(#prefix__a)">
        <text
          data-name="J"
          transform="translate(25 82)"
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
          transform="translate(43 82)"
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

export default LogoLight
