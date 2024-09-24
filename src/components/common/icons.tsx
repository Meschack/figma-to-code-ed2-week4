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
      height='48'
      viewBox='0 0 200 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M0.25 47.1248V0H15.8349C19.0887 0 22.1406 0.617112 24.9905 1.85133C27.8405 3.06312 30.3426 4.75737 32.4968 6.93408C34.6511 9.08836 36.3342 11.5905 37.5459 14.4404C38.7802 17.2679 39.3973 20.3086 39.3973 23.5624C39.3973 26.8163 38.7802 29.8682 37.5459 32.7181C36.3342 35.5456 34.6511 38.0477 32.4968 40.2244C30.3426 42.3787 27.8405 44.0729 24.9905 45.3072C22.1406 46.5189 19.0887 47.1248 15.8349 47.1248H0.25ZM5.90498 41.4698H15.8349C18.3033 41.4698 20.6147 41.0098 22.7689 40.0898C24.9457 39.1473 26.8531 37.8569 28.4912 36.2188C30.1294 34.5806 31.4085 32.6844 32.3285 30.5302C33.271 28.3534 33.7423 26.0309 33.7423 23.5624C33.7423 21.094 33.271 18.7826 32.3285 16.6283C31.4085 14.4516 30.1182 12.5442 28.4576 10.906C26.8194 9.26788 24.9232 7.98878 22.7689 7.06872C20.6147 6.12623 18.3033 5.65498 15.8349 5.65498H5.90498V41.4698Z'
        fill='#192252'
      />
      <path
        d='M59.7004 48C56.6036 48 53.7761 47.2034 51.2179 45.6101C48.6822 44.0168 46.6513 41.885 45.1253 39.2146C43.6218 36.5217 42.8701 33.5484 42.8701 30.2945C42.8701 27.8261 43.3077 25.5259 44.1829 23.3941C45.058 21.2398 46.2586 19.3548 47.7845 17.7391C49.3329 16.101 51.1282 14.8219 53.1702 13.9018C55.2123 12.9818 57.389 12.5217 59.7004 12.5217C62.7972 12.5217 65.6134 13.3184 68.1492 14.9116C70.7074 16.5049 72.7383 18.648 74.2418 21.3408C75.7677 24.0337 76.5307 27.0182 76.5307 30.2945C76.5307 32.7405 76.0931 35.0295 75.2179 37.1613C74.3427 39.2931 73.131 41.1781 71.5826 42.8163C70.0566 44.432 68.2726 45.6999 66.2305 46.6199C64.2109 47.54 62.0342 48 59.7004 48ZM59.7004 42.345C61.8098 42.345 63.706 41.7952 65.389 40.6957C67.0945 39.5736 68.4297 38.1038 69.3946 36.2861C70.382 34.446 70.8757 32.4488 70.8757 30.2945C70.8757 28.0954 70.3708 26.0757 69.361 24.2356C68.3736 22.3955 67.0384 20.9257 65.3554 19.8261C63.6723 18.7265 61.7873 18.1767 59.7004 18.1767C57.591 18.1767 55.6948 18.7377 54.0117 19.8597C52.3287 20.9593 50.9935 22.4292 50.0061 24.2693C49.0188 26.1094 48.5251 28.1178 48.5251 30.2945C48.5251 32.5386 49.03 34.5806 50.0398 36.4208C51.0496 38.2384 52.4073 39.6858 54.1127 40.763C55.8182 41.8177 57.6807 42.345 59.7004 42.345Z'
        fill='#192252'
      />
      <path
        d='M105.095 38.2384L110.144 40.9649C108.619 43.0968 106.677 44.8022 104.321 46.0813C101.987 47.3604 99.4516 48 96.7139 48C93.6171 48 90.7896 47.2034 88.2314 45.6101C85.6956 44.0168 83.6648 41.885 82.1388 39.2146C80.6353 36.5217 79.8836 33.5484 79.8836 30.2945C79.8836 27.8261 80.3212 25.5259 81.1963 23.3941C82.0715 21.2398 83.2721 19.3548 84.798 17.7391C86.3464 16.101 88.1417 14.8219 90.1837 13.9018C92.2258 12.9818 94.4025 12.5217 96.7139 12.5217C99.4516 12.5217 101.987 13.1613 104.321 14.4404C106.677 15.7195 108.619 17.4362 110.144 19.5905L105.095 22.317C104.018 20.993 102.739 19.972 101.258 19.2539C99.777 18.5358 98.2623 18.1767 96.7139 18.1767C94.6269 18.1767 92.7307 18.7377 91.0252 19.8597C89.3422 20.9593 88.007 22.4292 87.0196 24.2693C86.0323 26.1094 85.5386 28.1178 85.5386 30.2945C85.5386 32.4712 86.0323 34.4797 87.0196 36.3198C88.0295 38.1374 89.3759 39.5961 91.0589 40.6957C92.7644 41.7952 94.6494 42.345 96.7139 42.345C98.3745 42.345 99.9341 41.9635 101.393 41.2006C102.851 40.4376 104.086 39.4502 105.095 38.2384Z'
        fill='#192252'
      />
      <path
        d='M132.782 15.4839H123.559L123.492 47.1248H121.472L121.54 15.4839H114.606V13.4642H121.54L121.472 2.89481H123.492L123.559 13.4642H132.782V15.4839Z'
        fill='#192252'
      />
      <path
        d='M138.771 47.1248V13.4642H140.791V19.3548C142.025 17.2903 143.708 15.641 145.84 14.4067C147.972 13.1501 150.317 12.5217 152.875 12.5217C154.199 12.5217 155.467 12.69 156.679 13.0267L155.803 14.9116C154.816 14.6648 153.84 14.5414 152.875 14.5414C150.653 14.5414 148.623 15.0912 146.782 16.1907C144.965 17.2679 143.506 18.7153 142.407 20.533C141.329 22.3506 140.791 24.3815 140.791 26.6255V47.1248H138.771Z'
        fill='#192252'
      />
      <path
        d='M161.387 13.4642H163.407V47.1248H161.387V13.4642ZM162.43 6.39551C162.004 6.39551 161.634 6.26087 161.32 5.99159C161.028 5.69986 160.882 5.34082 160.882 4.91445C160.882 4.46564 161.028 4.10659 161.32 3.83731C161.634 3.56802 162.004 3.43338 162.43 3.43338C162.834 3.43338 163.182 3.56802 163.474 3.83731C163.766 4.10659 163.911 4.45442 163.911 4.88078C163.911 5.32959 163.766 5.69986 163.474 5.99159C163.182 6.26087 162.834 6.39551 162.43 6.39551Z'
        fill='#192252'
      />
      <path
        d='M199.719 26.6255V47.1248H197.699V26.6255C197.699 24.3815 197.15 22.3506 196.05 20.533C194.973 18.7153 193.514 17.2679 191.674 16.1907C189.856 15.0912 187.837 14.5414 185.615 14.5414C183.394 14.5414 181.363 15.0912 179.523 16.1907C177.705 17.2679 176.246 18.7153 175.147 20.533C174.07 22.3506 173.531 24.3815 173.531 26.6255V47.1248H171.511V13.4642H173.531V19.3548C174.765 17.2903 176.448 15.641 178.58 14.4067C180.712 13.1501 183.057 12.5217 185.615 12.5217C188.218 12.5217 190.586 13.1613 192.718 14.4404C194.849 15.6971 196.544 17.3913 197.8 19.5231C199.079 21.655 199.719 24.0224 199.719 26.6255Z'
        fill='#192252'
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
      width='24'
      height='24'
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
  settings: (props: IconProps) => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g id='Iconly/Light/Setting'>
        <g id='Setting'>
          <path
            id='Path_33946'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M20.8067 7.62355L20.1842 6.54346C19.6577 5.62954 18.4907 5.31426 17.5755 5.83866V5.83866C17.1399 6.09528 16.6201 6.16809 16.1307 6.04103C15.6413 5.91396 15.2226 5.59746 14.9668 5.16131C14.8023 4.88409 14.7139 4.56833 14.7105 4.24598V4.24598C14.7254 3.72916 14.5304 3.22834 14.17 2.85761C13.8096 2.48688 13.3145 2.2778 12.7975 2.27802H11.5435C11.037 2.27801 10.5513 2.47985 10.194 2.83888C9.83669 3.19791 9.63717 3.68453 9.63961 4.19106V4.19106C9.6246 5.23686 8.77248 6.07675 7.72657 6.07664C7.40421 6.07329 7.08846 5.98488 6.81123 5.82035V5.82035C5.89606 5.29595 4.72911 5.61123 4.20254 6.52516L3.53435 7.62355C3.00841 8.53633 3.3194 9.70255 4.23 10.2322V10.2322C4.8219 10.574 5.18653 11.2055 5.18653 11.889C5.18653 12.5725 4.8219 13.204 4.23 13.5457V13.5457C3.32056 14.0719 3.00923 15.2353 3.53435 16.1453V16.1453L4.16593 17.2345C4.41265 17.6797 4.8266 18.0082 5.31619 18.1474C5.80578 18.2865 6.33064 18.2248 6.77462 17.976V17.976C7.21108 17.7213 7.73119 17.6515 8.21934 17.7821C8.70749 17.9128 9.12324 18.233 9.37416 18.6716C9.5387 18.9488 9.62711 19.2646 9.63046 19.5869V19.5869C9.63046 20.6435 10.487 21.5 11.5435 21.5H12.7975C13.8505 21.5 14.7055 20.6491 14.7105 19.5961V19.5961C14.7081 19.088 14.9089 18.6 15.2682 18.2407C15.6275 17.8814 16.1155 17.6806 16.6236 17.6831C16.9452 17.6917 17.2596 17.7797 17.5389 17.9393V17.9393C18.4517 18.4653 19.6179 18.1543 20.1476 17.2437V17.2437L20.8067 16.1453C21.0618 15.7074 21.1318 15.1859 21.0012 14.6963C20.8706 14.2067 20.5502 13.7893 20.111 13.5366V13.5366C19.6718 13.2839 19.3514 12.8665 19.2208 12.3769C19.0902 11.8872 19.1603 11.3658 19.4154 10.9279C19.5812 10.6383 19.8214 10.3981 20.111 10.2322V10.2322C21.0161 9.70283 21.3264 8.54343 20.8067 7.63271V7.63271V7.62355Z'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <circle
            id='Ellipse_737'
            cx='12.1751'
            cy='11.889'
            r='2.63616'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>
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
