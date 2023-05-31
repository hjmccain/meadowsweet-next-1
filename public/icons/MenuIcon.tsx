const MenuIcon = ({ width, color }: { width: string; color?: string }) => {
  return (
    <div style={{ width }}>
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
          strokeWidth="50"
          strokeMiterlimit="10"
          x1="-0.26"
          y1="67.79"
          x2="500.26"
          y2="67.79"
        />
        <line
          fill="none"
          stroke={color ?? "#000000"}
          strokeWidth="50"
          strokeMiterlimit="10"
          x1="-0.26"
          y1="250"
          x2="500.26"
          y2="250"
        />
        <line
          fill="none"
          stroke={color ?? "#000000"}
          strokeWidth="50"
          strokeMiterlimit="10"
          x1="-0.26"
          y1="432.21"
          x2="500.26"
          y2="432.21"
        />
      </svg>
    </div>
  );
};
export default MenuIcon;
