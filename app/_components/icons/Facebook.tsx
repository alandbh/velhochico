function Facebook({ color = "#fff" }: { color?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill={color}
                fillRule="evenodd"
                d="M13.846 22.212v-9.199h3.139l.449-3.592h-3.588V7.172c0-1.01.337-1.795 1.796-1.795h1.908V2.118c-.45 0-1.567-.108-2.806-.108a4.33 4.33 0 00-4.605 4.714v2.693H7v3.592h3.139v9.199l3.707.004z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export default Facebook;
