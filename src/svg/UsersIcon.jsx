const UsersIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="currentColor"
    {...props}
  >
    <g clipPath="url(#a)">
      <mask
        id="b"
        width={25}
        height={25}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M24.002 0h-24v24h24V0Z" />
      </mask>
      <g fillRule="evenodd" clipRule="evenodd" mask="url(#b)">
        <path d="M7.002 10.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Zm0-2a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM20.752 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Zm-2 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM15.46 14.177a6.78 6.78 0 0 1 1.542-.176c1.982 0 3.762.851 5 2.215v1.785h-6c0 .728-.195 1.412-.535 2h6.535a2 2 0 0 0 2-2v-1.833c0-.434-.135-.86-.42-1.186A8.73 8.73 0 0 0 17.001 12a8.732 8.732 0 0 0-3.052.547c.405.343.784.716 1.134 1.115a3.6 3.6 0 0 1 .377.514ZM12.002 20a2 2 0 0 0 2-2v-1.832c0-.434-.135-.86-.42-1.186a8.798 8.798 0 0 0-1.58-1.413 8.71 8.71 0 0 0-5-1.568 8.73 8.73 0 0 0-6.58 2.98c-.285.327-.42.753-.42 1.187V18a2 2 0 0 0 2 2h10Zm-5-6c1.982 0 3.762.852 5 2.216v1.785h-10v-1.785a6.728 6.728 0 0 1 5-2.215Zm-5 2.163Z" />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.002 0h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
);
export default UsersIcon;
