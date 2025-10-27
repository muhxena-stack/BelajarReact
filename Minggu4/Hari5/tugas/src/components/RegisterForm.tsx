import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface RegisterFormData {
  name: string
  email: string
  password: string
}

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>()

  const onSubmit = async (data: RegisterFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Data form:", data)
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-4 max-w-md mx-auto p-6 border rounded-2xl shadow-lg bg-white/70 backdrop-blur-sm"
    >
      <motion.h2
        className="text-2xl font-semibold text-center text-blue-700"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Create Your Account
      </motion.h2>

      {/* Name Field */}
      <div className="space-y-2">
        <Input
          {...register("name", { required: "Name is required" })}
          placeholder="Full Name"
          className={errors.name ? "border-red-500" : ""}
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p
              className="text-sm text-red-600"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
            >
              {errors.name.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          placeholder="Email Address"
          className={errors.email ? "border-red-500" : ""}
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p
              className="text-sm text-red-600"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
            >
              {errors.email.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <Input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          type="password"
          placeholder="Password"
          className={errors.password ? "border-red-500" : ""}
        />
        <AnimatePresence>
          {errors.password && (
            <motion.p
              className="text-sm text-red-600"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
            >
              {errors.password.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md"
        >
          {isSubmitting ? "Registering..." : "Register"}
        </Button>
      </motion.div>
    </motion.form>
  )
}
