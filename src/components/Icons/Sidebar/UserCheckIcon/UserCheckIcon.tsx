'use client'

export default function UserCheckIcon(props: Readonly<SvgProps>) {
  const { width = 16, height = 13, ...rest } = props
  // Ensure width and height are valid numbers
  const validWidth = typeof width === 'number' && !isNaN(width) ? width : 16
  const validHeight = typeof height === 'number' && !isNaN(height) ? height : 13

  return (
    <svg
      width={validWidth}
      height={validHeight}
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0)">
        <path
          opacity="0.4"
          d="M15.915 3.99004C15.9696 4.04645 16 4.12202 15.9995 4.20055C15.999 4.27908 15.9678 4.35429 15.9125 4.41004L12.38 7.91504C12.3523 7.94251 12.3194 7.96425 12.2833 7.97899C12.2472 7.99374 12.2085 8.00121 12.1695 8.00098C12.1304 8.00075 12.0919 7.99282 12.0559 7.97764C12.02 7.96246 11.9874 7.94034 11.96 7.91254L9.91749 5.85504C9.89002 5.82733 9.86828 5.79447 9.85354 5.75835C9.83879 5.72222 9.83132 5.68354 9.83155 5.64452C9.83178 5.6055 9.83971 5.56691 9.85489 5.53097C9.87006 5.49502 9.89219 5.46242 9.91999 5.43504L10.6225 4.73754C10.6502 4.71007 10.6831 4.68834 10.7192 4.67359C10.7553 4.65884 10.794 4.65137 10.833 4.6516C10.872 4.65183 10.9106 4.65977 10.9466 4.67494C10.9825 4.69012 11.0151 4.71224 11.0425 4.74004L12.18 5.88504L14.8 3.28504C14.8277 3.25757 14.8606 3.23584 14.8967 3.22109C14.9328 3.20634 14.9715 3.19887 15.0105 3.1991C15.0495 3.19933 15.0881 3.20727 15.1241 3.22244C15.16 3.23762 15.1926 3.25974 15.22 3.28754L15.915 3.99004Z"
          fill="currentColor"
        />
        <path
          d="M5.6 6.4C6.2329 6.4 6.85159 6.21233 7.37782 5.8607C7.90406 5.50908 8.31421 5.00931 8.55641 4.42459C8.79862 3.83986 8.86199 3.19645 8.73851 2.57571C8.61504 1.95497 8.31027 1.38479 7.86274 0.93726C7.41521 0.489732 6.84503 0.184961 6.22429 0.0614885C5.60355 -0.0619842 4.96014 0.0013865 4.37541 0.243587C3.79069 0.485787 3.29092 0.895939 2.9393 1.42218C2.58768 1.94841 2.4 2.5671 2.4 3.2C2.4 4.04869 2.73714 4.86263 3.33726 5.46274C3.93737 6.06286 4.75131 6.4 5.6 6.4ZM7.84 7.2H7.4225C6.85106 7.46352 6.22927 7.59999 5.6 7.59999C4.97073 7.59999 4.34894 7.46352 3.7775 7.2H3.36C2.46893 7.2002 1.61442 7.55426 0.984341 8.18434C0.354262 8.81442 0.000198832 9.66894 0 10.56L0 11.6C0 11.9183 0.126428 12.2235 0.351472 12.4485C0.576516 12.6736 0.88174 12.8 1.2 12.8H10C10.3183 12.8 10.6235 12.6736 10.8485 12.4485C11.0736 12.2235 11.2 11.9183 11.2 11.6V10.56C11.1998 9.66894 10.8457 8.81442 10.2157 8.18434C9.58558 7.55426 8.73107 7.2002 7.84 7.2Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="16" height="12.8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}