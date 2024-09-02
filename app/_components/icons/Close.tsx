function Close({
    color = "#fff",
    height = 44,
    width = 44,
}: {
    color?: string;
    height?: number;
    width?: number;
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox={`0 0 44 44`}
        >
            <path
                fill={color}
                d="M38.844 6.875l-33.688 27a.345.345 0 00-.343.344v2.75c0 .189.154.343.343.343l33.688-27a.345.345 0 00.343-.343v-2.75a.345.345 0 00-.343-.344zm0 26.813l-33.688-27c-.189 0-.343.072-.343.343s-.034 2.642 0 2.75c.033.108.181.268.343.344.162.076 33.688 27 33.688 27a.345.345 0 00.343-.344v-2.75a.345.345 0 00-.343-.343z"
            ></path>
        </svg>
    );
}

export default Close;
