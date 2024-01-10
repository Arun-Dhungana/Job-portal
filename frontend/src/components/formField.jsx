export const FormField = ({ title, label, children }) => {
  return (
    <div>
      <label htmlFor={title} className="form-label">
        {label}
      </label>
      {children}
    </div>
  );
};
