import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-2">
      {children}
    </div>
  );
};

export default AuthLayout;
