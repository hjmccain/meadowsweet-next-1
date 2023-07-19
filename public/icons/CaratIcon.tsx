const CloseIcon = ({ width, color }: { width: string; color?: string }) => {
  return (
    <div className="hover:brightness-95" style={{ width }}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 500 500"
        enable-background="new 0 0 500 500"
        xmlSpace="preserve">
        <line
          fill="none"
          stroke={color ?? "#000000"}
          stroke-width="40"
          stroke-miterlimit="10"
          x1="232.9"
          y1="482.1"
          x2="483.9"
          y2="231"
        />
        <line
          fill="none"
          stroke={color ?? "#000000"}
          stroke-width="40"
          stroke-miterlimit="10"
          x1="268"
          y1="482.1"
          x2="17.2"
          y2="231.2"
        />
      </svg>
    </div>
  );
};
export default CloseIcon;
