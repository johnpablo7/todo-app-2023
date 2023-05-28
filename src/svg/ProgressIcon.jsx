const ProgressIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path
      // fill="#9CA8BA"
      fillRule="evenodd"
      d="M3.002 5a4 4 0 0 1 4-4h8.343a4 4 0 0 1 2.829 1.172L19.83 3.83a4 4 0 0 1 1.172 2.829V19a4 4 0 0 1-4 4h-10a4 4 0 0 1-4-4V5Zm16 3v11a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7v2a3 3 0 0 0 3 3h2Zm-.111-2a2 2 0 0 0-.475-.757L16.76 3.587a2 2 0 0 0-.757-.475V5a1 1 0 0 0 1 1h1.889Z"
      clipRule="evenodd"
    />
    <path
      // fill="#9CA8BA"
      d="M11.002 12a1 1 0 1 1 2 0v5a1 1 0 0 1-2 0v-5ZM7.002 15a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2ZM16.002 13a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1Z"
    />
  </svg>
);
export default ProgressIcon;
