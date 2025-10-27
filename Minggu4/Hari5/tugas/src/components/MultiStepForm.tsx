import { useState } from "react"
import { useForm} from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { Progress } from "@/components/ui/progress"

interface FormData {
  name: string
  email: string
  city: string
  address: string
}

export default function MultiStepForm() {
  const [step, setStep] = useState(1)
  const totalSteps = 3

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<FormData>()

  const nextStep = async () => {
    const valid = await trigger(
      step === 1 ? ["name", "email"] : step === 2 ? ["city", "address"] : []
    )
    if (valid) setStep((s) => s + 1)
  }

  const prevStep = () => setStep((s) => s - 1)

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await new Promise((res) => setTimeout(res, 1000))
    console.log("Form submitted:", data)
    alert("Success! 🎉")
  }

  const progress = (step / totalSteps) * 100

  return (
    <motion.div
      className="max-w-md mx-auto p-6 border rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Progress Indicator */}
      <div className="mb-6">
        <Progress value={progress} className="h-2" />
        <p className="text-sm text-center mt-2 text-gray-600">
          Step {step} of {totalSteps}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <AnimatePresence mode="wait">
          {/* STEP 1 */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-1 text-blue-700">
                Personal Info
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Masukkan nama lengkap dan alamat email aktif kamu.
              </p>

              <div className="space-y-3">
                <Input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Full Name"
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}

                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  placeholder="Email"
                  type="email"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-1 text-blue-700">
                Address Info
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Isi kota dan alamat lengkap agar pengiriman atau kontak lebih mudah.
              </p>

              <div className="space-y-3">
                <Input
                  {...register("city", { required: "City is required" })}
                  placeholder="City"
                />
                {errors.city && (
                  <p className="text-sm text-red-500">{errors.city.message}</p>
                )}

                <Input
                  {...register("address", { required: "Address is required" })}
                  placeholder="Full Address"
                />
                {errors.address && (
                  <p className="text-sm text-red-500">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-1 text-blue-700">
                Review & Submit
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Periksa kembali data kamu sebelum menekan tombol Submit.
              </p>

              <div className="space-y-2 text-gray-700 bg-gray-50 p-3 rounded-lg border">
                <p>
                  <strong>Name:</strong> {getValues("name")}
                </p>
                <p>
                  <strong>Email:</strong> {getValues("email")}
                </p>
                <p>
                  <strong>City:</strong> {getValues("city")}
                </p>
                <p>
                  <strong>Address:</strong> {getValues("address")}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <Button
              type="button"
              onClick={prevStep}
              variant="outline"
              className="rounded-xl"
            >
              Back
            </Button>
          )}

          {step < totalSteps ? (
            <Button type="button" onClick={nextStep} className="ml-auto">
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="ml-auto bg-blue-600 hover:bg-blue-700"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          )}
        </div>
      </form>
    </motion.div>
  )
}
