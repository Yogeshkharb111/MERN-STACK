import { Link, useNavigate } from "react-router-dom";

const SignPage = () => {
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const dataObj = { email, password };

        try {
            console.log("Backend URL:", import.meta.env.VITE_BACKEND_URL); // ✅ Debugging

            const resp = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/auth/signup`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dataObj),
                }
            );

            let result = {};
            if (resp.headers.get("content-type")?.includes("application/json")) {
                result = await resp.json();
            }

            if (resp.status === 201) {
                alert("Registration successful");
                navigate("/login");
            } else {
                alert(result?.message || "Registration Error");
            }
        } catch (error) {
            console.error("Signup error:", error);
            alert("Something went wrong");
        }
    };

    return (
        <div className="min-h-screen p-4 flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleRegister}
                className="p-6 flex flex-col gap-4 bg-white rounded-lg shadow-lg w-full max-w-sm"
            >
                <h1 className="text-2xl font-bold text-center text-gray-800">Sign Up</h1>

                {/* Email Field */}
                <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="border border-black rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        placeholder="••••••••"
                        className="border border-black rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-2 bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition"
                >
                    Create Account
                </button>

                {/* Login Redirect */}
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-emerald-600 hover:underline font-medium"
                        >
                            Login here
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export { SignPage };
