"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [apiError, setApiError] = useState("");

  const validate = ({ email, password, mobile }) => {
    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    } else if (!email.includes("@") || !email.includes(".")) {
      errors.email = "Please enter a valid email address";
    }
    if (!password) {
      errors.password = "Password is required";
    } else {
      if (password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      } else {
        let hasNumber = false;
        let hasSpecial = false;

        for (let char of password) {
          if (char >= "0" && char <= "9") hasNumber = true;
          if (!/[a-zA-Z0-9]/.test(char)) hasSpecial = true;
        }

        if (!hasNumber) {
          errors.password = "Password must contain at least one number";
        } else if (!hasSpecial) {
          errors.password =
            "Password must contain at least one special character";
        }
      }
    }
    if (!mobile) {
      errors.mobile = "Mobile number is required";
    } else if (mobile.length !== 10) {
      errors.mobile = "Mobile number must be exactly 10 digits";
    } else {
      for (let char of mobile) {
        if (char < "0" || char > "9") {
          errors.mobile = "Mobile number must contain only digits";
          break;
        }
      }
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const payload = {
      email: formData.get("email"),
      password: formData.get("password"),
      mobile: formData.get("mobile"),
    };

    const errors = validate(payload);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    setLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.token) {
        toast.error(data.message || "Login failed");
        return;
      }

      Cookies.set("token", data.token, { expires: 1 });
      Cookies.set("userName", data.userName, { expires: 1 });
      toast.success("Login successful!");
      setFormErrors({});
      setLoading(false);
      router.push("/productlist");
    } catch (err) {
        toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm bg-background border border-border rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-1">Login</h1>
      <p className="text-sm text-muted mb-6">
        Please enter your details to continue
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full border px-3 py-2 rounded mt-2"
          />
          {formErrors.email && (
            <p className="text-sm text-red-500 mt-1">{formErrors.email}</p>
          )}
        </div>
        <div>
          <label className="text-sm">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="w-full border px-3 py-2 rounded mt-2"
          />
          {formErrors.password && (
            <p className="text-sm text-red-500 mt-1">
              {formErrors.password}
            </p>
          )}
        </div>
        <div>
          <label className="text-sm">Mobile</label>
          <input
            placeholder="Enter your number"
            name="mobile"
            className="w-full border px-3 py-2 rounded mt-2"
          />
          {formErrors.mobile && (
            <p className="text-sm text-red-500 mt-1">{formErrors.mobile}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-background py-2 rounded disabled:opacity-70"
        >
          {loading ? (
            <span className="flex justify-center gap-2">
              Logging in <Loader2 className="animate-spin" />
            </span>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
}
