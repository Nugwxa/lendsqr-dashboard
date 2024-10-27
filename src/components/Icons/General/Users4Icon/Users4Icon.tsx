'use client'

export default function Users4Icon(props: Readonly<SvgProps>) {
  const { width = 24, height = 24, ...rest } = props
  const validWidth = typeof width === 'number' && !isNaN(width) ? width : 24
  const validHeight = typeof height === 'number' && !isNaN(height) ? height : 24

  return (
    <svg
      width={validWidth}
      height={validHeight}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <mask
        id="path-1-outside-1_90_1825"
        maskUnits="userSpaceOnUse"
        x="0.955078"
        y="2.32104"
        width="22"
        height="19"
        fill="black"
      >
        <rect fill="white" x="0.955078" y="2.32104" width="22" height="19" />
        <path d="M11.9898 4.88901C9.1708 4.88901 7.15696 7.85157 8.41048 10.5816C9.82704 13.6632 14.1734 13.6603 15.5898 10.5816C16.803 7.94445 14.9777 4.92573 11.9898 4.88901V4.88901ZM5.416 20.6755C5.13475 20.6558 4.97068 20.4421 4.97068 20.143H4.96787C4.96787 18.7939 5.34287 17.5349 5.98787 16.4614H2.43563C2.14595 16.4614 1.96218 16.2504 1.95657 15.9373C1.90032 13.6479 3.44344 11.4899 5.58369 10.6986C2.08305 8.7214 3.48837 3.32244 7.48214 3.32244C8.45058 3.32244 9.36933 3.68337 10.0763 4.32182C11.296 3.80056 12.7041 3.80056 13.9237 4.32182C16.4193 2.07182 20.4186 3.85963 20.4186 7.25894C20.4186 8.70926 19.6302 10.0105 18.4161 10.6977C20.6042 11.5058 22.0123 13.5477 22.0432 15.9815C22.0432 16.2459 21.8295 16.4606 21.5642 16.4606L17.9913 16.4615C18.6278 17.5181 19.0338 18.8896 19.0338 20.1993C19.0338 20.4636 18.82 20.6783 18.5547 20.6783L5.416 20.6755ZM6.68068 15.5042C7.52536 14.5189 8.63256 13.7745 9.88876 13.3751C8.96532 12.9355 8.20408 12.2117 7.70625 11.322C5.22465 11.2123 3.15753 13.0714 2.93529 15.5043L6.68068 15.5042ZM14.1048 13.3808C15.3555 13.7783 16.457 14.5245 17.299 15.5042H21.0677C20.8455 13.0704 18.7783 11.2123 16.2968 11.322C15.7971 12.2145 15.0311 12.9382 14.1049 13.3807L14.1048 13.3808ZM18.0396 19.7201C17.6928 14.5292 11.3984 12.0653 7.70092 15.8024C6.69499 16.8196 6.03967 18.2304 5.94031 19.7201H18.0396ZM16.744 10.2317C19.2482 10.0405 20.374 6.94204 18.6003 5.15044C17.5859 4.12483 15.9893 3.98983 14.8203 4.82419C16.519 6.02138 17.3132 8.17867 16.744 10.2316V10.2317ZM9.18211 4.82428C7.24711 3.44148 4.54051 4.83272 4.54051 7.26076C4.54051 8.81796 5.72364 10.1136 7.25827 10.2317C6.6892 8.1786 7.48327 6.0214 9.18201 4.82428H9.18211Z" />
      </mask>
      <path
        d="M11.9898 4.88901C9.1708 4.88901 7.15696 7.85157 8.41048 10.5816C9.82704 13.6632 14.1734 13.6603 15.5898 10.5816C16.803 7.94445 14.9777 4.92573 11.9898 4.88901V4.88901ZM5.416 20.6755C5.13475 20.6558 4.97068 20.4421 4.97068 20.143H4.96787C4.96787 18.7939 5.34287 17.5349 5.98787 16.4614H2.43563C2.14595 16.4614 1.96218 16.2504 1.95657 15.9373C1.90032 13.6479 3.44344 11.4899 5.58369 10.6986C2.08305 8.7214 3.48837 3.32244 7.48214 3.32244C8.45058 3.32244 9.36933 3.68337 10.0763 4.32182C11.296 3.80056 12.7041 3.80056 13.9237 4.32182C16.4193 2.07182 20.4186 3.85963 20.4186 7.25894C20.4186 8.70926 19.6302 10.0105 18.4161 10.6977C20.6042 11.5058 22.0123 13.5477 22.0432 15.9815C22.0432 16.2459 21.8295 16.4606 21.5642 16.4606L17.9913 16.4615C18.6278 17.5181 19.0338 18.8896 19.0338 20.1993C19.0338 20.4636 18.82 20.6783 18.5547 20.6783L5.416 20.6755ZM6.68068 15.5042C7.52536 14.5189 8.63256 13.7745 9.88876 13.3751C8.96532 12.9355 8.20408 12.2117 7.70625 11.322C5.22465 11.2123 3.15753 13.0714 2.93529 15.5043L6.68068 15.5042ZM14.1048 13.3808C15.3555 13.7783 16.457 14.5245 17.299 15.5042H21.0677C20.8455 13.0704 18.7783 11.2123 16.2968 11.322C15.7971 12.2145 15.0311 12.9382 14.1049 13.3807L14.1048 13.3808ZM18.0396 19.7201C17.6928 14.5292 11.3984 12.0653 7.70092 15.8024C6.69499 16.8196 6.03967 18.2304 5.94031 19.7201H18.0396ZM16.744 10.2317C19.2482 10.0405 20.374 6.94204 18.6003 5.15044C17.5859 4.12483 15.9893 3.98983 14.8203 4.82419C16.519 6.02138 17.3132 8.17867 16.744 10.2316V10.2317ZM9.18211 4.82428C7.24711 3.44148 4.54051 4.83272 4.54051 7.26076C4.54051 8.81796 5.72364 10.1136 7.25827 10.2317C6.6892 8.1786 7.48327 6.0214 9.18201 4.82428H9.18211Z"
        fill="currentColor"
      />
      <path
        d="M11.9898 4.88901C9.1708 4.88901 7.15696 7.85157 8.41048 10.5816C9.82704 13.6632 14.1734 13.6603 15.5898 10.5816C16.803 7.94445 14.9777 4.92573 11.9898 4.88901V4.88901ZM5.416 20.6755C5.13475 20.6558 4.97068 20.4421 4.97068 20.143H4.96787C4.96787 18.7939 5.34287 17.5349 5.98787 16.4614H2.43563C2.14595 16.4614 1.96218 16.2504 1.95657 15.9373C1.90032 13.6479 3.44344 11.4899 5.58369 10.6986C2.08305 8.7214 3.48837 3.32244 7.48214 3.32244C8.45058 3.32244 9.36933 3.68337 10.0763 4.32182C11.296 3.80056 12.7041 3.80056 13.9237 4.32182C16.4193 2.07182 20.4186 3.85963 20.4186 7.25894C20.4186 8.70926 19.6302 10.0105 18.4161 10.6977C20.6042 11.5058 22.0123 13.5477 22.0432 15.9815C22.0432 16.2459 21.8295 16.4606 21.5642 16.4606L17.9913 16.4615C18.6278 17.5181 19.0338 18.8896 19.0338 20.1993C19.0338 20.4636 18.82 20.6783 18.5547 20.6783L5.416 20.6755ZM6.68068 15.5042C7.52536 14.5189 8.63256 13.7745 9.88876 13.3751C8.96532 12.9355 8.20408 12.2117 7.70625 11.322C5.22465 11.2123 3.15753 13.0714 2.93529 15.5043L6.68068 15.5042ZM14.1048 13.3808C15.3555 13.7783 16.457 14.5245 17.299 15.5042H21.0677C20.8455 13.0704 18.7783 11.2123 16.2968 11.322C15.7971 12.2145 15.0311 12.9382 14.1049 13.3807L14.1048 13.3808ZM18.0396 19.7201C17.6928 14.5292 11.3984 12.0653 7.70092 15.8024C6.69499 16.8196 6.03967 18.2304 5.94031 19.7201H18.0396ZM16.744 10.2317C19.2482 10.0405 20.374 6.94204 18.6003 5.15044C17.5859 4.12483 15.9893 3.98983 14.8203 4.82419C16.519 6.02138 17.3132 8.17867 16.744 10.2316V10.2317ZM9.18211 4.82428C7.24711 3.44148 4.54051 4.83272 4.54051 7.26076C4.54051 8.81796 5.72364 10.1136 7.25827 10.2317C6.6892 8.1786 7.48327 6.0214 9.18201 4.82428H9.18211Z"
        stroke="currentColor"
        strokeWidth="0.4"
        mask="url(#path-1-outside-1_90_1825)"
      />
      <mask
        id="path-2-outside-2_90_1825"
        maskUnits="userSpaceOnUse"
        x="8.75635"
        y="8.58508"
        width="6"
        height="4"
        fill="black"
      >
        <rect fill="white" x="8.75635" y="8.58508" width="6" height="4" />
        <path d="M13.3361 9.84376C13.6257 9.28596 14.4742 9.72283 14.1864 10.2806C13.2686 12.061 10.7335 12.061 9.81479 10.2806C9.52792 9.72283 10.3754 9.28689 10.6623 9.84376C11.2267 10.9331 12.7726 10.936 13.3361 9.84376H13.3361Z" />
      </mask>
      <path
        d="M13.3361 9.84376C13.6257 9.28596 14.4742 9.72283 14.1864 10.2806C13.2686 12.061 10.7335 12.061 9.81479 10.2806C9.52792 9.72283 10.3754 9.28689 10.6623 9.84376C11.2267 10.9331 12.7726 10.936 13.3361 9.84376H13.3361Z"
        fill="currentColor"
      />
      <path
        d="M13.3361 9.84376C13.6257 9.28596 14.4742 9.72283 14.1864 10.2806C13.2686 12.061 10.7335 12.061 9.81479 10.2806C9.52792 9.72283 10.3754 9.28689 10.6623 9.84376C11.2267 10.9331 12.7726 10.936 13.3361 9.84376H13.3361Z"
        stroke="currentColor"
        strokeWidth="0.4"
        mask="url(#path-2-outside-2_90_1825)"
      />
    </svg>
  )
}
