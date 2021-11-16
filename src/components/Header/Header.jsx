import {
  MediaLink,
  Logo,
  Media,
  MediaWrapper,
  Navbar,
  StyledHeader,
  NavLink,
} from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <Media>
        <Logo
          width="150"
          height="25"
          viewBox="0 0 150 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H10.2079V24.1405H0V22.7226H0.712505C1.98937 22.7226 2.84297 21.9748 2.84297 20.5921V3.54842C2.84297 2.16573 1.98937 1.41796 0.712505 1.41796H0V0ZM17.9608 11.2872V11.2167C20.6556 10.1514 22.5392 8.44425 22.5392 5.32615C22.5392 2.37737 20.3734 0 13.8409 0H12.1549V1.80595C13.2484 1.93999 14.37 2.64544 14.37 6.21502C14.37 9.48831 13.0932 10.5042 12.1549 10.7934V12.6769H12.3101C13.5517 12.6769 15.9644 13.1778 15.9644 17.6504C15.9644 21.8055 13.8339 22.5815 12.8039 22.5815C12.5711 22.5815 12.3454 22.5392 12.1479 22.4545V24.1405H12.9803C19.4422 24.1405 24.1264 22.0806 24.1264 17.1495C24.1405 14.3418 21.9748 12.035 17.9608 11.2872ZM118.078 7.63298H119.637L117.867 0H109.796V1.77774H110.833C113.923 1.77774 115.948 3.61896 118.078 7.63298ZM113.888 14.9132V15.6257H115.482V8.20439H113.888V8.9169C113.888 10.0174 113.211 11.0474 111.758 11.0474H109.796V12.7898H111.758C113.218 12.7828 113.888 13.8127 113.888 14.9132ZM110.833 22.3698C110.417 22.3698 110.071 22.2922 109.796 22.1512V24.1405H118.579L120.71 15.4423H119.151C116.801 19.8443 113.923 22.3698 110.833 22.3698ZM97.6273 1.41796H98.3398C99.4403 1.41796 100.47 2.20101 100.47 3.54842V20.5921C100.47 21.9748 99.4403 22.7226 98.3398 22.7226H97.6273V24.1405H107.842V0H97.6273V1.41796ZM132.152 20.5921V13.8833H132.159V0H121.951V1.41796H122.664C123.764 1.41796 124.794 2.09519 124.794 3.54842V20.5921C124.794 22.1512 123.764 22.7226 122.664 22.7226H121.951V24.1405H134.995V22.7226H134.29C133.182 22.7226 132.152 22.1159 132.152 20.5921ZM148.899 22.5462C147.764 22.5462 146.416 22.0877 143.785 16.9026L141.549 12.5359C143.573 11.7528 146.021 9.37544 146.021 6.14448C146.021 2.80769 143.856 0 138.318 0H134.113V1.77774C135.341 1.80595 136.865 2.49024 136.865 6.85698C136.865 10.871 135.193 11.9362 134.417 11.9362C134.311 11.9362 134.212 11.9292 134.113 11.9221V15.9291L135.658 19.3928C137.506 23.5479 140.237 24.5074 144.215 24.5074C147.764 24.5074 150 23.7949 150 23.7949V22.3769C149.993 22.3698 149.499 22.5462 148.899 22.5462ZM36.2672 16.9731V3.54842C36.2672 2.09519 37.2972 1.41796 38.3977 1.41796H39.1102V0H25.0858V1.41796H25.7983C26.8988 1.41796 27.9288 2.13046 27.9288 3.54842V16.5075C27.9288 21.7632 32.0134 24.8883 37.269 24.8883C38.045 24.8883 38.7998 24.8248 39.5193 24.6978V21.2482C37.4665 20.8461 36.2672 19.0895 36.2672 16.9731ZM41.7697 1.41796H42.4822C43.5827 1.41796 44.6127 2.09519 44.6127 3.54842V16.9661C44.6127 19.0331 43.4346 20.7685 41.4664 21.2129V24.1687C44.5281 23.0259 46.5668 20.5145 46.5668 16.7827V3.54842C46.5668 2.13046 47.5968 1.41796 48.6973 1.41796H49.4098V0H41.7697V1.41796ZM65.3388 1.41796V0H51.3145V1.41796H52.027C53.1275 1.41796 54.1575 2.13046 54.1575 3.54842V20.5921C54.1575 22.0806 53.1275 22.7226 52.027 22.7226H51.3145V24.1405H62.4959V20.4157V20.2676V3.54842C62.4959 2.09519 63.5258 1.41796 64.6263 1.41796H65.3388ZM64.5276 22.3698C64.5064 22.3698 64.4853 22.3698 64.457 22.3698V24.1476H71.5539L73.6843 15.4494H72.1253C69.9948 19.4563 67.6104 22.3698 64.5276 22.3698ZM87.7792 22.3698C87.7581 22.3698 87.7369 22.3698 87.7157 22.3698V24.1476H94.8126L96.943 15.4494H95.384C93.2465 19.4563 90.8691 22.3698 87.7792 22.3698ZM88.5976 1.41796V0H74.5732V1.41796H75.2857C76.3862 1.41796 77.4162 2.13046 77.4162 3.54842V20.5921C77.4162 22.0806 76.3862 22.7226 75.2857 22.7226H74.5732V24.1405H85.7546V20.4157V20.3452V3.54842C85.7546 2.09519 86.7846 1.41796 87.8851 1.41796H88.5976Z"
            fill="white"
          />
        </Logo>
        <MediaWrapper>
          <MediaLink>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.9313 10.3612C23.2774 4.0711 17.2803 -0.676135 10.9429 0.0802833C2.55005 1.08216 -2.12421 9.94044 1.86099 17.3076C2.04708 17.6532 2.06553 17.9321 1.93811 18.2961C1.29095 20.1513 0.670625 22.0181 0 24.0001C0.234719 23.9367 0.37052 23.9066 0.504645 23.8649C2.33545 23.2855 4.16626 22.7127 5.99204 22.1166C6.35585 21.998 6.64757 22.0264 6.99127 22.1968C9.18924 23.2821 11.5197 23.6729 13.9406 23.2938C20.3384 22.2969 24.5969 16.7599 23.9313 10.3612ZM14.4184 21.2116C11.8734 21.7643 9.46923 21.3953 7.22766 20.0845C6.90073 19.8941 6.63416 19.8858 6.29885 19.9976C5.2577 20.3433 4.20817 20.6689 3.0547 21.0362C3.42522 19.9292 3.74712 18.934 4.09752 17.9471C4.21656 17.6115 4.21991 17.356 4.01034 17.0304C0.124066 10.9891 3.67838 3.18611 10.8138 2.07569C15.919 1.28087 20.8816 4.79078 21.8775 9.90036C22.87 14.9949 19.4951 20.1112 14.4184 21.2116Z"
                fill="white"
              />
              <path
                d="M17.9532 14.4774C17.2792 14.1501 16.6119 13.8028 15.9614 13.4304C15.4903 13.1599 15.155 13.2234 14.8549 13.6809C14.6856 13.9381 14.4341 14.1418 14.2446 14.3889C13.973 14.7429 13.6913 14.7913 13.2739 14.5926C11.822 13.8997 10.6568 12.8995 9.79669 11.5486C9.26355 10.712 9.24343 10.7003 9.91908 9.99734C10.3868 9.50976 10.5545 9.0322 10.2242 8.38599C9.961 7.87336 9.77993 7.31398 9.60724 6.76127C9.44294 6.23529 9.16798 5.9197 8.59292 6.03491C8.03798 5.92137 7.64231 6.14011 7.29191 6.51748C6.46704 7.40582 6.16861 8.43274 6.40836 9.61329C6.70176 11.0643 7.58698 12.2031 8.44035 13.352C10.0716 15.5477 12.2814 16.8869 14.9303 17.5164C16.4811 17.8855 18.0856 16.7984 18.3354 15.2873C18.3958 14.9149 18.3237 14.6577 17.9532 14.4774Z"
                fill="white"
              />
            </svg>
          </MediaLink>
          <MediaLink>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8245 2.10187C14.9818 2.10187 15.3558 2.11372 16.6026 2.16985C17.7555 2.22175 18.3816 2.41179 18.7983 2.57149C19.3502 2.78311 19.7441 3.03593 20.1579 3.44411C20.5716 3.85229 20.8279 4.24092 21.0424 4.78538C21.2043 5.19647 21.3969 5.81413 21.4496 6.95143C21.5064 8.18151 21.5185 8.55043 21.5185 11.6652C21.5185 14.7799 21.5064 15.1488 21.4496 16.3789C21.3969 17.5162 21.2043 18.1339 21.0424 18.545C20.8279 19.0894 20.5716 19.478 20.1579 19.8862C19.7441 20.2944 19.3502 20.5472 18.7983 20.7588C18.3816 20.9185 17.7555 21.1086 16.6026 21.1605C15.3559 21.2166 14.982 21.2285 11.8245 21.2285C8.66702 21.2285 8.29306 21.2166 7.0464 21.1605C5.89352 21.1086 5.26742 20.9185 4.85076 20.7588C4.29882 20.5472 3.90487 20.2944 3.49112 19.8862C3.07737 19.478 2.82109 19.0894 2.60663 18.545C2.44469 18.1339 2.25206 17.5162 2.19945 16.3789C2.14256 15.1488 2.13054 14.7799 2.13054 11.6652C2.13054 8.55043 2.14256 8.18151 2.19945 6.95147C2.25206 5.81413 2.44469 5.19647 2.60663 4.78538C2.82109 4.24092 3.07737 3.85229 3.49112 3.44411C3.90487 3.03593 4.29882 2.78311 4.85076 2.57149C5.26742 2.41179 5.89352 2.22175 7.04636 2.16985C8.29325 2.11372 8.6672 2.10187 11.8245 2.10187ZM11.8245 0C8.61313 0 8.2105 0.0134284 6.94929 0.0701982C5.69066 0.126875 4.83114 0.324041 4.07897 0.612428C3.3014 0.910539 2.64197 1.30941 1.98461 1.95791C1.32725 2.60641 0.922933 3.25695 0.620749 4.02403C0.328422 4.76607 0.128562 5.614 0.0711104 6.85567C0.0135649 8.09983 0 8.49708 0 11.6652C0 14.8333 0.0135649 15.2305 0.0711104 16.4747C0.128562 17.7163 0.328422 18.5643 0.620749 19.3063C0.922933 20.0733 1.32725 20.7239 1.98461 21.3724C2.64197 22.0209 3.3014 22.4198 4.07897 22.7179C4.83114 23.0063 5.69066 23.2035 6.94929 23.2601C8.2105 23.3169 8.61313 23.3303 11.8245 23.3303C15.0359 23.3303 15.4386 23.3169 16.6997 23.2601C17.9583 23.2035 18.8179 23.0063 19.57 22.7179C20.3476 22.4198 21.007 22.0209 21.6644 21.3724C22.3218 20.7239 22.7261 20.0734 23.0283 19.3063C23.3206 18.5643 23.5204 17.7163 23.5779 16.4747C23.6354 15.2305 23.6491 14.8333 23.6491 11.6652C23.6491 8.49708 23.6354 8.09983 23.5779 6.85567C23.5204 5.614 23.3206 4.76607 23.0283 4.02403C22.7261 3.25695 22.3218 2.60641 21.6644 1.95791C21.007 1.30941 20.3476 0.910539 19.57 0.612428C18.8179 0.324041 17.9583 0.126875 16.6997 0.0701982C15.4386 0.0134284 15.0359 0 11.8245 0ZM11.8245 5.67494C8.471 5.67494 5.75243 8.35687 5.75243 11.6652C5.75243 14.9735 8.471 17.6554 11.8245 17.6554C15.178 17.6554 17.8966 14.9735 17.8966 11.6652C17.8966 8.35687 15.178 5.67494 11.8245 5.67494ZM11.8245 15.5536C9.64768 15.5536 7.88297 13.8126 7.88297 11.6652C7.88297 9.51769 9.64768 7.77676 11.8245 7.77676C14.0013 7.77676 15.766 9.51769 15.766 11.6652C15.766 13.8126 14.0013 15.5536 11.8245 15.5536ZM19.5554 5.43827C19.5554 6.21138 18.9201 6.83812 18.1365 6.83812C17.3528 6.83812 16.7175 6.21138 16.7175 5.43827C16.7175 4.66517 17.3528 4.03848 18.1365 4.03848C18.9201 4.03848 19.5554 4.66517 19.5554 5.43827Z"
                fill="white"
              />
            </svg>
          </MediaLink>
          <MediaLink>
            <svg
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.4298 10.9384L10.9536 7.56567H7.6745V5.37738C7.6745 4.45545 8.13176 3.55488 9.60173 3.55488H11.0933V0.684069C11.0933 0.684069 9.73985 0.456055 8.44609 0.456055C5.74563 0.456055 3.9797 2.07027 3.9797 4.99517V7.56576H0.976562V10.9385H3.9797V19.0899C4.58162 19.1833 5.19854 19.2309 5.8271 19.2309C6.45566 19.2309 7.07258 19.1817 7.6745 19.0899V10.9385L10.4298 10.9384Z"
                fill="white"
              />
            </svg>
          </MediaLink>
        </MediaWrapper>
      </Media>
      <Navbar>
        <NavLink to="/">Cervezas</NavLink>
        <NavLink to="/">Carta online</NavLink>
        <MediaLink>
          <svg
            width="30"
            height="26"
            viewBox="0 0 30 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.8745 16.4865H24.0637C24.856 16.487 25.5721 16.0147 25.8838 15.2863L29.8405 6.05383C30.1021 5.44243 30.039 4.74052 29.6726 4.18557C29.3061 3.63062 28.6854 3.29689 28.0204 3.2973H6.25827C5.87786 3.3022 5.50694 3.41668 5.18994 3.62703L3.87102 0.593513C3.71415 0.234071 3.35975 0.00124872 2.96757 0H0.989189C0.442875 0 0 0.442875 0 0.989189C0 1.5355 0.442875 1.97838 0.989189 1.97838H2.30811L8.32897 15.7347C9.07459 17.9657 8.79958 20.4119 7.57719 22.4216C7.57561 23.7638 8.3877 24.9729 9.6307 25.4792C10.8737 25.9855 12.2995 25.6878 13.2362 24.7265C14.1728 23.7652 14.4332 22.3321 13.8948 21.1027H21.0499C20.4682 22.4359 20.8288 23.9928 21.9374 24.9345C23.0461 25.8762 24.6408 25.9801 25.8623 25.1903C27.0838 24.4006 27.6435 22.9037 27.2398 21.5062C26.8361 20.1088 25.5643 19.141 24.1098 19.1243H11.0328H10.9009C10.1724 19.1243 9.58194 18.5338 9.58194 17.8054C9.58194 17.077 10.1724 16.4865 10.9009 16.4865H10.8745ZM28.0204 5.27567L24.0637 14.5081H10.215L6.25827 5.27567H28.0204ZM12.1934 22.4216C12.1934 23.15 11.6029 23.7405 10.8745 23.7405C10.1461 23.7405 9.55556 23.15 9.55556 22.4216C9.55556 21.6932 10.1461 21.1027 10.8745 21.1027C11.6029 21.1027 12.1934 21.6932 12.1934 22.4216ZM25.3826 22.4216C25.3826 23.15 24.7921 23.7405 24.0637 23.7405C23.3352 23.7405 22.7447 23.15 22.7447 22.4216C22.7447 21.6932 23.3352 21.1027 24.0637 21.1027C24.7921 21.1027 25.3826 21.6932 25.3826 22.4216Z"
              fill="white"
            />
          </svg>
        </MediaLink>
      </Navbar>
    </StyledHeader>
  );
};

export default Header;
