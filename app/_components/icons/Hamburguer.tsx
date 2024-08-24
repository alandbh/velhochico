function Hamburguer({
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
                d="M38.844 6.875H5.156a.345.345 0 00-.343.344v2.75c0 .189.154.344.343.344h33.688a.345.345 0 00.343-.344v-2.75a.345.345 0 00-.343-.344zm0 26.813H5.156a.345.345 0 00-.343.343v2.75c0 .19.154.344.343.344h33.688a.345.345 0 00.343-.344v-2.75a.345.345 0 00-.343-.343zm0-13.407H5.156a.345.345 0 00-.343.344v2.75c0 .19.154.344.343.344h33.688a.345.345 0 00.343-.344v-2.75a.345.345 0 00-.343-.344z"
            ></path>
        </svg>
    );
}

export default Hamburguer;
