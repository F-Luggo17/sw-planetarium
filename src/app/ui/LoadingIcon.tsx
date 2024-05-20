type LoadingProps = {
    height: string;
    width: string;
};

export const LoadingIcon = ({ height, width }: LoadingProps) => (
    <div className={`flex flex-grow justify-center items-center flex-col gap-3`}>
        <div className="animate-pulse text-3xl">Loading data...</div>
        <svg
            version="1.1"
            id="L1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 100 100"
            xmlSpace="preserve"
            width={width} // Ajusta el tamaño según tus necesidades
            height={height} // Ajusta el tamaño según tus necesidades
        >
            <circle fill="none" stroke="#00bcd4" strokeWidth="4" cx="50" cy="50" r="44" className="opacity-50" />
            <circle fill="#00bcd4" stroke="#00bcd4" strokeWidth="3" cx="8" cy="54" r="6">
                <animateTransform
                    attributeName="transform"
                    dur="2s"
                    type="rotate"
                    from="0 50 48"
                    to="360 50 52"
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
    </div>

);

export default LoadingIcon;
