const CloseIcon = ({ width, color }: { width: string; color?: string }) => {
  return (
    <div className="hover:brightness-95" style={{ width }}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 500 500"
        enableBackground="new 0 0 500 500"
        xmlSpace="preserve">
        <line
          fill="none"
          stroke={color ?? "#000000"}
          strokeWidth="40"
          strokeMiterlimit="10"
          x1="16.58"
          y1="483.42"
          x2="482.75"
          y2="17.25"
        />
        <line
          fill="none"
          stroke={color ?? "#000000"}
          strokeWidth="40"
          strokeMiterlimit="10"
          x1="483.08"
          y1="483.08"
          x2="16.92"
          y2="16.92"
        />
      </svg>
    </div>
  );
};
export default CloseIcon;
