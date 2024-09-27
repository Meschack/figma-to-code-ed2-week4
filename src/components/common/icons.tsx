import { ComponentPropsWithoutRef } from 'react'

interface IconProps extends ComponentPropsWithoutRef<'svg'> {}

export const Icons = {
  circleCheck: (props: IconProps) => (
    <svg
      width='43'
      height='42'
      viewBox='0 0 43 42'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        x='2'
        y='1.5'
        width='39'
        height='39'
        rx='19.5'
        stroke='currentColor'
        strokeWidth='3'
      />
      <path
        d='M29.5 15L18.5 27L13.5 21.5455'
        stroke='currentColor'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  arrowLeft: (props: IconProps) => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M4.25 12.2743L19.25 12.2743'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.2998 18.2987L4.2498 12.2747L10.2998 6.24969'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  menu: (props: IconProps) => (
    <svg
      width='48'
      height='50'
      viewBox='0 0 48 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect width='48' height='50' rx='10' fill='none' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.25 16.5C15.5 16.5 15.5 16.708 15.5 19.25V19.275C15.5 20.382 15.5 21.182 15.771 21.52C16.036 21.848 16.823 22 18.25 22C19.677 22 20.464 21.847 20.729 21.519C21 21.182 21 20.382 21 19.274C21 16.708 21 16.5 18.25 16.5ZM18.25 23.5C16.564 23.5 15.299 23.323 14.604 22.46C14 21.711 14 20.689 14 19.275L14.75 19.25H14C14 16.38 14.181 15 18.25 15C22.319 15 22.5 16.38 22.5 19.25C22.5 20.688 22.5 21.711 21.896 22.46C21.201 23.323 19.936 23.5 18.25 23.5Z'
        fill='#007bff'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M29.25 16.5C26.5 16.5 26.5 16.708 26.5 19.25V19.275C26.5 20.382 26.5 21.182 26.771 21.52C27.036 21.848 27.823 22 29.25 22C30.677 22 31.464 21.847 31.729 21.519C32 21.182 32 20.382 32 19.274C32 16.708 32 16.5 29.25 16.5ZM29.25 23.5C27.564 23.5 26.299 23.323 25.604 22.46C25 21.711 25 20.689 25 19.275L25.75 19.25H25C25 16.38 25.181 15 29.25 15C33.319 15 33.5 16.38 33.5 19.25C33.5 20.688 33.5 21.711 32.896 22.46C32.201 23.323 30.936 23.5 29.25 23.5Z'
        fill='#007bff'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.25 27.5C15.5 27.5 15.5 27.708 15.5 30.25V30.275C15.5 31.382 15.5 32.182 15.771 32.52C16.036 32.848 16.823 33 18.25 33C19.677 33 20.464 32.847 20.729 32.519C21 32.182 21 31.382 21 30.274C21 27.708 21 27.5 18.25 27.5ZM18.25 34.5C16.564 34.5 15.299 34.323 14.604 33.46C14 32.711 14 31.689 14 30.275L14.75 30.25H14C14 27.38 14.181 26 18.25 26C22.319 26 22.5 27.38 22.5 30.25C22.5 31.688 22.5 32.711 21.896 33.46C21.201 34.323 19.936 34.5 18.25 34.5Z'
        fill='#007bff'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M29.25 27.5C26.5 27.5 26.5 27.708 26.5 30.25V30.275C26.5 31.382 26.5 32.182 26.771 32.52C27.036 32.848 27.823 33 29.25 33C30.677 33 31.464 32.847 31.729 32.519C32 32.182 32 31.382 32 30.274C32 27.708 32 27.5 29.25 27.5ZM29.25 34.5C27.564 34.5 26.299 34.323 25.604 33.46C25 32.711 25 31.689 25 30.275L25.75 30.25H25C25 27.38 25.181 26 29.25 26C33.319 26 33.5 27.38 33.5 30.25C33.5 31.688 33.5 32.711 32.896 33.46C32.201 34.323 30.936 34.5 29.25 34.5Z'
        fill='#007bff'
      />
    </svg>
  ),
  arrowRight: (props: IconProps) => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M19.75 11.7257L4.75 11.7257'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.7002 5.70131L19.7502 11.7253L13.7002 17.7503'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  bell: (props: IconProps) => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g id='Iconly/Curved/Notification'>
        <g id='Notification'>
          <path
            id='Stroke 1'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M11.9961 2.51416C7.56185 2.51416 5.63519 6.5294 5.63519 9.18368C5.63519 11.1675 5.92281 10.5837 4.82471 13.0037C3.48376 16.4523 8.87614 17.8618 11.9961 17.8618C15.1152 17.8618 20.5076 16.4523 19.1676 13.0037C18.0695 10.5837 18.3571 11.1675 18.3571 9.18368C18.3571 6.5294 16.4295 2.51416 11.9961 2.51416Z'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 3'
            d='M14.3059 20.5122C13.0116 21.9579 10.9926 21.9751 9.68591 20.5122'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>
    </svg>
  ),
  calendar: (props: IconProps) => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g id='Iconly/Light/Calendar'>
        <g id='Calendar'>
          <path
            id='Line_200'
            d='M3.09265 9.40427H20.9166'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Line_201'
            d='M16.4421 13.3097H16.4514'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Line_202'
            d='M12.0046 13.3097H12.0139'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Line_203'
            d='M7.55793 13.3097H7.5672'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Line_204'
            d='M16.4421 17.1962H16.4514'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Line_205'
            d='M12.0046 17.1962H12.0139'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Line_206'
            d='M7.55793 17.1962H7.5672'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Line_207'
            d='M16.0438 2V5.29078'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Line_208'
            d='M7.96552 2V5.29078'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Path'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M16.2383 3.57922H7.77096C4.83427 3.57922 3 5.21516 3 8.22225V17.2719C3 20.3263 4.83427 22 7.77096 22H16.229C19.175 22 21 20.3546 21 17.3475V8.22225C21.0092 5.21516 19.1842 3.57922 16.2383 3.57922Z'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>
    </svg>
  ),
  check: (props: IconProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M20 6 9 17l-5-5' />
    </svg>
  ),
  cross: (props: IconProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M18 6 6 18' />
      <path d='m6 6 12 12' />
    </svg>
  ),
  chevronDown: (props: IconProps) => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M19 8.5L12 15.5L5 8.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  chevronUp: (props: IconProps) => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M5 15.5L12 8.5L19 15.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  chevronLeft: (props: IconProps) => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M15.5 19L8.5 12L15.5 5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  chevronRight: (props: IconProps) => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      color='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8.5 5L15.5 12L8.5 19'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  doubleChevronLeft: (props: IconProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='m17 17-5-5 5-5' />
      <path d='m10 17-5-5 5-5' />
    </svg>
  ),
  doubleChevronRight: (props: IconProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='m6 17 5-5-5-5' />
      <path d='m13 17 5-5-5-5' />
    </svg>
  ),
  chevronUpDown: (props: IconProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='m7 15 5 5 5-5' />
      <path d='m7 9 5-5 5 5' />
    </svg>
  ),
  dashboard: (props: IconProps) => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g id='Iconly/Light/Chart'>
        <g id='Chart'>
          <path
            id='Line_182'
            d='M7.37145 10.2017V17.0619'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Line_183'
            d='M12.0381 6.91913V17.0618'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Line_184'
            d='M16.6285 13.8268V17.0619'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Path'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>
    </svg>
  ),
  logo: (props: IconProps) => (
    <svg
      width='109'
      height='28'
      viewBox='0 0 109 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M108.365 15.1782V27.4896H104.281V16.1796C104.281 15.3026 104.065 14.5041 103.633 13.7841C103.214 13.0641 102.644 12.4947 101.924 12.0758C101.217 11.6438 100.419 11.4279 99.5288 11.4279C98.6648 11.4279 97.8729 11.6438 97.1529 12.0758C96.4329 12.4947 95.857 13.0641 95.425 13.7841C94.993 14.5041 94.777 15.3026 94.777 16.1796V27.4896H90.6929V7.85423H94.777V9.93557C95.4577 9.12398 96.2955 8.48256 97.2903 8.01131C98.2852 7.54007 99.3586 7.30444 100.511 7.30444C101.964 7.30444 103.286 7.65788 104.477 8.36475C105.668 9.07162 106.611 10.0207 107.304 11.2119C108.011 12.4031 108.365 13.7252 108.365 15.1782Z'
        fill='#1376F8'
      />
      <path
        d='M84.2765 7.85419H88.3607V27.4895H84.2765V7.85419ZM86.3578 5.00706C85.7295 5.00706 85.2059 4.80416 84.787 4.39837C84.3681 3.99257 84.1587 3.48205 84.1587 2.86681C84.1587 2.26466 84.3681 1.76069 84.787 1.35489C85.2059 0.936005 85.723 0.726562 86.3382 0.726562C86.9404 0.726562 87.4509 0.936005 87.8698 1.35489C88.2887 1.76069 88.4981 2.26466 88.4981 2.86681C88.4981 3.48205 88.2887 3.99257 87.8698 4.39837C87.464 4.80416 86.96 5.00706 86.3578 5.00706Z'
        fill='#1376F8'
      />
      <path
        d='M72.2227 27.4896V7.85423H76.3068V9.93557C76.9875 9.12398 77.8253 8.48256 78.8201 8.01131C79.815 7.54007 80.8884 7.30444 82.0403 7.30444C82.7734 7.30444 83.4999 7.40262 84.2198 7.59897L82.5901 11.7224C82.0796 11.526 81.5691 11.4279 81.0586 11.4279C80.1946 11.4279 79.4026 11.6438 78.6827 12.0758C77.9627 12.4947 77.3868 13.0641 76.9548 13.7841C76.5228 14.5041 76.3068 15.3026 76.3068 16.1796V27.4896H72.2227Z'
        fill='#1376F8'
      />
      <path
        d='M70.9199 11.9384H66.7965L66.7769 27.4895H62.6927L62.7123 11.9384H59.5903V7.85421H62.7123L62.6927 1.68872H66.7769L66.7965 7.85421H70.9199V11.9384Z'
        fill='#1376F8'
      />
      <path
        d='M53.9381 21.0492L59.2397 23.9159C58.3364 25.1464 57.2041 26.1347 55.8428 26.8809C54.4814 27.627 52.9956 28.0001 51.3855 28.0001C49.5791 28.0001 47.9297 27.5354 46.4374 26.606C44.9582 25.6766 43.7736 24.433 42.8834 22.8753C42.0064 21.3044 41.5679 19.57 41.5679 17.6719C41.5679 16.232 41.8231 14.8902 42.3337 13.6467C42.8442 12.39 43.5445 11.2904 44.4346 10.3479C45.3379 9.39233 46.3851 8.64619 47.5763 8.10949C48.7675 7.57279 50.0372 7.30444 51.3855 7.30444C52.9956 7.30444 54.4814 7.67751 55.8428 8.42366C57.2041 9.1698 58.3364 10.1712 59.2397 11.4279L53.9381 14.2946C53.5847 13.9412 53.1854 13.6728 52.7404 13.4896C52.3084 13.2932 51.8568 13.195 51.3855 13.195C50.6394 13.195 49.9718 13.4045 49.3827 13.8234C48.7937 14.2423 48.3224 14.792 47.969 15.4727C47.6286 16.1534 47.4585 16.8865 47.4585 17.6719C47.4585 18.4442 47.6286 19.1707 47.969 19.8514C48.3224 20.519 48.7937 21.0623 49.3827 21.4811C49.9718 21.9 50.6394 22.1095 51.3855 22.1095C51.8568 22.1095 52.3084 22.0178 52.7404 21.8346C53.1854 21.6382 53.5847 21.3764 53.9381 21.0492Z'
        fill='#1376F8'
      />
      <path
        d='M32.0066 28.0001C30.2002 28.0001 28.5508 27.5354 27.0585 26.606C25.5793 25.6766 24.3947 24.433 23.5045 22.8753C22.6275 21.3044 22.189 19.57 22.189 17.6719C22.189 16.232 22.4442 14.8902 22.9547 13.6467C23.4653 12.39 24.1656 11.2904 25.0557 10.3479C25.9589 9.39233 27.0062 8.64619 28.1974 8.10949C29.3886 7.57279 30.6583 7.30444 32.0066 7.30444C33.8131 7.30444 35.4559 7.76915 36.9351 8.69855C38.4274 9.62796 39.612 10.8781 40.4891 12.4489C41.3792 14.0197 41.8243 15.7607 41.8243 17.6719C41.8243 19.0987 41.569 20.4339 41.0585 21.6775C40.548 22.9211 39.8411 24.0207 38.9379 24.9762C38.0478 25.9187 37.0071 26.6583 35.8159 27.195C34.6378 27.7317 33.368 28.0001 32.0066 28.0001ZM32.0066 22.1095C32.7528 22.1095 33.4204 21.9066 34.0094 21.5008C34.6116 21.095 35.0828 20.5583 35.4232 19.8907C35.7635 19.21 35.9337 18.4704 35.9337 17.6719C35.9337 16.8472 35.7504 16.0945 35.3839 15.4138C35.0305 14.7331 34.5527 14.1964 33.9505 13.8037C33.3615 13.3979 32.7135 13.195 32.0066 13.195C31.2736 13.195 30.606 13.4045 30.0038 13.8234C29.4148 14.2292 28.9435 14.7724 28.5901 15.4531C28.2497 16.1338 28.0796 16.8734 28.0796 17.6719C28.0796 18.5097 28.2563 19.2624 28.6097 19.93C28.9762 20.5976 29.454 21.1277 30.0431 21.5204C30.6452 21.9131 31.2998 22.1095 32.0066 22.1095Z'
        fill='#1376F8'
      />
      <path
        d='M0 27.4895V0H9.11079C11.0089 0 12.7826 0.359981 14.432 1.07994C16.0944 1.78682 17.554 2.77513 18.8106 4.04488C20.0804 5.30154 21.0687 6.7611 21.7756 8.42356C22.4955 10.0729 22.8555 11.8466 22.8555 13.7447C22.8555 15.6428 22.4955 17.4231 21.7756 19.0855C21.0687 20.7349 20.0804 22.1945 18.8106 23.4642C17.554 24.7209 16.0944 25.7092 14.432 26.4291C12.7826 27.136 11.0089 27.4895 9.11079 27.4895H0ZM5.8906 21.5989H9.11079C10.1711 21.5989 11.1725 21.396 12.115 20.9902C13.0575 20.5844 13.8953 20.0215 14.6283 19.3015C15.3614 18.5816 15.9308 17.7503 16.3366 16.8078C16.7555 15.8523 16.9649 14.8312 16.9649 13.7447C16.9649 12.6582 16.7555 11.6437 16.3366 10.7013C15.9308 9.75876 15.3614 8.92753 14.6283 8.20757C13.9084 7.47451 13.0771 6.90509 12.1346 6.49929C11.1921 6.0935 10.1842 5.8906 9.11079 5.8906H5.8906V21.5989Z'
        fill='#1376F8'
      />
    </svg>
  ),
  message: (props: IconProps) => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g id='Iconly/Curved/Chat'>
        <g id='Chat'>
          <path
            id='Stroke 11'
            d='M15.9393 12.413H15.9483'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 13'
            d='M11.9304 12.413H11.9394'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 15'
            d='M7.9214 12.413H7.9304'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 4'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M19.071 19.0698C16.0159 22.1264 11.4896 22.7867 7.78631 21.074C7.23961 20.8539 3.70113 21.8339 2.93334 21.067C2.16555 20.2991 3.14639 16.7601 2.92631 16.2134C1.21285 12.5106 1.87411 7.9826 4.9302 4.9271C8.83147 1.0243 15.1698 1.0243 19.071 4.9271C22.9803 8.83593 22.9723 15.1681 19.071 19.0698Z'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>
    </svg>
  ),
  patients: (props: IconProps) => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g id='Iconly/Light/3 User'>
        <g id='3 User'>
          <path
            id='Stroke 1'
            d='M17.8877 10.8967C19.2827 10.7007 20.3567 9.50467 20.3597 8.05567C20.3597 6.62767 19.3187 5.44367 17.9537 5.21967'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 3'
            d='M19.7285 14.2503C21.0795 14.4523 22.0225 14.9253 22.0225 15.9003C22.0225 16.5713 21.5785 17.0073 20.8605 17.2813'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 5'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M11.8867 14.6638C8.67273 14.6638 5.92773 15.1508 5.92773 17.0958C5.92773 19.0398 8.65573 19.5408 11.8867 19.5408C15.1007 19.5408 17.8447 19.0588 17.8447 17.1128C17.8447 15.1668 15.1177 14.6638 11.8867 14.6638Z'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 7'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M11.8869 11.8879C13.9959 11.8879 15.7059 10.1789 15.7059 8.06888C15.7059 5.95988 13.9959 4.24988 11.8869 4.24988C9.7779 4.24988 8.0679 5.95988 8.0679 8.06888C8.0599 10.1709 9.7569 11.8809 11.8589 11.8879H11.8869Z'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 9'
            d='M5.88484 10.8967C4.48884 10.7007 3.41584 9.50467 3.41284 8.05567C3.41284 6.62767 4.45384 5.44367 5.81884 5.21967'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 11'
            d='M4.044 14.2503C2.693 14.4523 1.75 14.9253 1.75 15.9003C1.75 16.5713 2.194 17.0073 2.912 17.2813'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>
    </svg>
  ),
  phone: (props: IconProps) => (
    <svg
      width='13'
      height='13'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.3558 2.00793C14.1328 1.97595 13.9087 2.04191 13.7304 2.18381C13.5472 2.32771 13.4326 2.53557 13.4077 2.76841C13.355 3.23908 13.6946 3.66479 14.1646 3.71776C17.4063 4.07951 19.9259 6.60477 20.2904 9.85654C20.3392 10.2922 20.7047 10.621 21.1409 10.621C21.1738 10.621 21.2057 10.619 21.2385 10.615C21.4666 10.59 21.6698 10.4771 21.8132 10.2972C21.9556 10.1174 22.0203 9.89351 21.9944 9.66467C21.5403 5.60746 18.4002 2.45862 14.3558 2.00793ZM14.4181 5.48994C13.9421 5.402 13.5048 5.70579 13.4142 6.17047C13.3236 6.63515 13.6283 7.08884 14.0914 7.17978C15.4857 7.45159 16.5623 8.53085 16.8351 9.92989V9.93089C16.9128 10.3336 17.2674 10.6264 17.6757 10.6264C17.7305 10.6264 17.7852 10.6214 17.841 10.6114C18.3041 10.5185 18.6088 10.0658 18.5182 9.60012C18.1109 7.51055 16.5025 5.89666 14.4181 5.48994ZM16.0001 15.0905C16.4515 14.8302 16.9615 14.5362 17.6047 14.673C18.1873 14.7959 20.1731 16.4078 20.7169 16.9665C21.0734 17.3322 21.2716 17.7099 21.3025 18.0877C21.3562 19.5697 19.3425 21.2615 18.976 21.4724C18.489 21.8231 17.9224 22 17.286 22C16.6357 22 15.9106 21.8151 15.1199 21.4464C10.8296 19.6556 4.27553 13.231 2.54266 8.97395C1.82362 7.38903 1.81864 6.08193 2.53071 5.09961C2.81454 4.63892 4.43288 2.71325 5.88192 2.7742C6.26733 2.80718 6.64179 3.00505 7.00928 3.3648C7.56499 3.90942 9.13653 5.90106 9.25803 6.48565C9.39247 7.13521 9.09769 7.65185 8.83576 8.10554C8.7799 8.20307 8.70463 8.31881 8.62217 8.44561C8.3092 8.92683 7.89264 9.56735 8.04004 9.97626C9.09669 12.5705 11.5376 14.8339 14.133 15.8972C14.5343 16.0431 15.1745 15.6235 15.6542 15.3092C15.7791 15.2273 15.8932 15.1525 15.9893 15.0967L16.0001 15.0905Z'
        fill='#1376F8'
      />
    </svg>
  ),
  search: (props: IconProps) => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g id='Iconly/Light/Search'>
        <g id='Search'>
          <circle
            id='Ellipse_739'
            cx='11.7666'
            cy='11.7666'
            r='8.98856'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Line_181'
            d='M18.0183 18.4851L21.5423 22'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>
    </svg>
  ),
  shieldDone: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <mask
        id='mask0_201_3214'
        maskUnits='userSpaceOnUse'
        x='3'
        y='1'
        width='15'
        height='18'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M3.3335 1.66797H17.4725V18.631H3.3335V1.66797Z'
          fill='white'
        />
      </mask>
      <g mask='url(#mask0_201_3214)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10.403 2.91797C9.69634 2.91797 5.23801 4.48797 4.72384 4.91714C4.57217 5.06964 4.56634 5.33464 4.59884 7.1088C4.61384 7.9638 4.63467 9.12547 4.63467 10.7338C4.63467 15.068 9.40301 16.9921 10.4022 17.3463C11.4005 16.9905 16.1713 15.0555 16.1713 10.7338C16.1713 9.1238 16.1922 7.9613 16.208 7.1063C16.2397 5.3338 16.2338 5.0688 16.073 4.9088C15.5688 4.48797 11.1097 2.91797 10.403 2.91797ZM10.403 18.6313C10.3422 18.6313 10.2813 18.623 10.2222 18.6046C9.94301 18.5205 3.38467 16.4688 3.38467 10.7338C3.38467 9.1363 3.36384 7.98047 3.34884 7.13214C3.31051 5.01297 3.30217 4.5713 3.84967 4.02464C4.50384 3.3688 9.45801 1.66797 10.403 1.66797C11.3472 1.66797 16.3013 3.3688 16.9572 4.02464C17.5038 4.5713 17.4955 5.01297 17.4572 7.12964C17.4422 7.97797 17.4213 9.1338 17.4213 10.7338C17.4213 16.4688 10.863 18.5205 10.5838 18.6046C10.5247 18.623 10.4638 18.6313 10.403 18.6313Z'
          fill='#1376F8'
        />
      </g>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.81423 12.1014C9.6484 12.1014 9.48923 12.0355 9.37173 11.918L7.79507 10.3397C7.55173 10.0955 7.55173 9.69885 7.7959 9.45552C8.03923 9.21135 8.4359 9.21135 8.68007 9.45552L9.81423 10.5914L12.6209 7.78469C12.8651 7.54052 13.2601 7.54052 13.5042 7.78469C13.7484 8.02885 13.7484 8.42469 13.5042 8.66885L10.2559 11.918C10.1392 12.0355 9.98007 12.1014 9.81423 12.1014Z'
        fill='#1376F8'
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      {...props}
    >
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      ></circle>
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      />
    </svg>
  )
}
