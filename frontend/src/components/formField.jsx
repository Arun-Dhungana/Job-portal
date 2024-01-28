export const FormField = ({ title, label, children }) => {
  return (
    <div className="mx-auto mb-3">
      <label
        htmlFor={title}
        className=""
        style={{ fontSize: "20px", fontWeight: "bolder" }}
      >
        {label}
      </label>
      {children}
    </div>
  );
};
