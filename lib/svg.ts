
export const label = (unique: number, total: number) => `<svg xmlns="http://www.w3.org/2000/svg" width="360" height="99" viewBox="0 0 360 99">
  <g id="Rectangle_1" data-name="Rectangle 1" fill="none" stroke="#707070" stroke-width="1">
    <rect width="360" height="99" rx="4" stroke="none"/>
    <rect x="0.5" y="0.5" width="359" height="98" rx="3.5" fill="none"/>
  </g>
  <text id="Unique_Visitors:_" data-name="Unique Visitors: " transform="translate(23 40)" fill="#707070" font-size="20" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">Unique Visitors: </tspan></text>
  <text id="Total_Visits:_" data-name="Total Visits: " transform="translate(23 71)" fill="#707070" font-size="20" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Total Visits: </tspan></text>
  <text id="_1" data-name="1" transform="translate(190 40)" fill="#707070" font-size="20" font-family="Roboto-Regular, Roboto"><tspan x="0" y="0">${unique}</tspan></text>
  <text id="_1-2" data-name="1" transform="translate(190 71)" fill="#707070" font-size="20" font-family="Roboto-Regular, Roboto"><tspan x="0" y="0">${total}</tspan></text>
</svg>
`