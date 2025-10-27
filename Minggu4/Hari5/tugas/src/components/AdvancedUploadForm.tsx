import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// ✅ Zod schema
const formSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  email: z.string().email("Email tidak valid"),
  description: z.string().min(10, "Deskripsi minimal 10 karakter"),
  file: z
    .any()
    .refine((file) => file instanceof FileList && file.length > 0, "Wajib upload file")
    .refine(
      (file) => file instanceof FileList && file[0]?.size <= 2 * 1024 * 1024,
      "Ukuran file maksimal 2MB"
    )
    .refine(
      (file) =>
        file instanceof FileList &&
        ["image/jpeg", "image/png", "image/jpg"].includes(file[0]?.type),
      "Hanya boleh file JPG/PNG"
    ),
});

type FormSchema = z.infer<typeof formSchema>;

export default function AdvancedUploadForm() {
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onChange", // ✅ Real-time validation
  });

  // 🔁 Watch file input untuk preview otomatis
  const watchFile = watch("file");
  React.useEffect(() => {
    if (watchFile && watchFile.length > 0) {
      const file = watchFile[0];
      const url = URL.createObjectURL(file);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [watchFile]);

  const onSubmit = async (data: FormSchema) => {
    console.log("Form submitted:", data);
    alert("✅ Form berhasil dikirim!");
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto mt-10 p-8 bg-gradient-to-b from-gray-50 to-white/70 border rounded-2xl shadow-xl space-y-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-800">📤 Upload File Form</h1>
        <p className="text-sm text-gray-500">
          Isi data di bawah dan upload file dengan preview real-time
        </p>
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
        <Input {...register("name")} placeholder="Nama lengkap kamu" />
        {errors.name && (
          <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <Input {...register("email")} type="email" placeholder="email@contoh.com" />
        {errors.email && (
          <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Deskripsi
        </label>
        <textarea
          {...register("description")}
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          rows={3}
          placeholder="Tulis deskripsi singkat..."
        />
        {errors.description && (
          <p className="text-sm text-red-600 mt-1">{errors.description.message}</p>
        )}
      </div>

      {/* File upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Upload Gambar
        </label>
        <Input type="file" accept="image/*" {...register("file")} />
        {typeof errors.name?.message === "string" && (
        <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Preview */}
<AnimatePresence>
  {preview && (
    <motion.div
      key="preview"
      className="mt-4 flex flex-col items-center space-y-3"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={preview}
        alt="Preview"
        className="rounded-lg shadow-md max-h-48 object-contain border"
      />
      <Button
        type="button"
        variant="outline"
        className="text-red-600 border-red-400 hover:bg-red-50 transition-all duration-200"
        onClick={() => {
          setPreview(null);
          const fileInput = document.querySelector(
            'input[type="file"]'
          ) as HTMLInputElement;
          if (fileInput) fileInput.value = "";
        }}
      >
        🗑️ Hapus Foto
      </Button>
    </motion.div>
  )}
</AnimatePresence>


      {/* Submit */}
      <div className="pt-4 flex justify-end">
        <Button
          type="submit"
          className={`px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow-md hover:opacity-90 transition ${
            !isValid ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? "Mengirim..." : "🚀 Kirim Form"}
        </Button>
      </div>
    </motion.form>
  );
}
