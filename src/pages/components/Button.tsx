import React from "react";

interface Props {
    children?: React.ReactNode;
    onClick: () => void;
}

const Button: React.FC<Props> = ({
    children,
    onClick,
}) => {
    return (
      <button
        onClick={onClick}
        style={{
          backgroundColor: "#4DA67A",
          border: "none",
          borderRadius: "10px",
          height: "46px",
          width: "inline-flex",
          color:"white",
          fontFamily: "Arial",
        }}
      >
        {children}
      </button>
    );
}

export default Button;