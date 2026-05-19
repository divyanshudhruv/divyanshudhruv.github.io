const InlineElement = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        verticalAlign: "middle",
        margin: "0 4px", // Gives a little breathing room on the left/right
      }}
    >
      {children}
    </span>
  );
};

export default InlineElement;
