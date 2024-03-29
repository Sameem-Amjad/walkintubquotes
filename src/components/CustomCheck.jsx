const CustomCheck = ({ height, width }) => {
  return (
    <div className={`flex h-${height} w-${width} border-0 bg-[#39a2ae] rounded-xl items-center justify-center`}>
      <img className={`h-${height - 2} w-${width - 2}`} src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E" alt="SVG Image" />
    </div>
  );
};
export default CustomCheck;