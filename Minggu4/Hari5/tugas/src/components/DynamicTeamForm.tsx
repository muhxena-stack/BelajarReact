import { useForm, useFieldArray } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// ✅ Validation schema pakai Zod
const teamMemberSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  email: z.string().email("Email tidak valid"),
  role: z.string().min(1, "Role wajib diisi"),
});

const formSchema = z.object({
  projectName: z.string().min(1, "Nama proyek wajib diisi"),
  teamMembers: z
    .array(teamMemberSchema)
    .min(1, "Minimal 1 anggota tim diperlukan"),
});

type FormSchema = z.infer<typeof formSchema>;

export default function DynamicTeamForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: "",
      teamMembers: [{ name: "", email: "", role: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "teamMembers",
    control,
  });

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Submitted:", data);
    alert(" Project berhasil dibuat!");
  };

  const e = errors as any;

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto mt-10 p-8 rounded-2xl shadow-xl bg-gradient-to-b from-gray-50 to-white/60 backdrop-blur-md border border-gray-200 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">🚧 Team Builder</h1>
        <p className="text-gray-500 text-sm">
          Tambahkan anggota tim dan atur proyekmu dengan mudah
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: `${(fields.length / 5) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Project name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nama Proyek
        </label>
        <Input
          {...register("projectName")}
          placeholder="Masukkan nama proyek"
          className={`${
            e.projectName ? "border-red-500" : "border-gray-300"
          } focus:ring-indigo-500`}
        />
        {e.projectName && (
          <p className="text-sm text-red-600 mt-1">{e.projectName.message}</p>
        )}
      </div>

      {/* Team members */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Anggota Tim</h2>
          <Button
            type="button"
            variant="outline"
            onClick={() => append({ name: "", email: "", role: "" })}
          >
            + Tambah Anggota
          </Button>
        </div>

        <AnimatePresence>
          {fields.map((field, index) => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="p-4 rounded-xl border bg-white/60 shadow-sm hover:shadow-md transition-all"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1 text-gray-600">
                    Nama
                  </label>
                  <Input
                    {...register(`teamMembers.${index}.name` as const)}
                    placeholder="Nama lengkap"
                    className={
                      e.teamMembers?.[index]?.name ? "border-red-500" : ""
                    }
                  />
                  {e.teamMembers?.[index]?.name && (
                    <p className="text-xs text-red-500 mt-1">
                      {e.teamMembers[index].name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1 text-gray-600">
                    Email
                  </label>
                  <Input
                    {...register(`teamMembers.${index}.email` as const)}
                    placeholder="email@contoh.com"
                    type="email"
                    className={
                      e.teamMembers?.[index]?.email ? "border-red-500" : ""
                    }
                  />
                  {e.teamMembers?.[index]?.email && (
                    <p className="text-xs text-red-500 mt-1">
                      {e.teamMembers[index].email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1 text-gray-600">
                    Role
                  </label>
                  <Input
                    {...register(`teamMembers.${index}.role` as const)}
                    placeholder="e.g. Frontend"
                    className={
                      e.teamMembers?.[index]?.role ? "border-red-500" : ""
                    }
                  />
                  {e.teamMembers?.[index]?.role && (
                    <p className="text-xs text-red-500 mt-1">
                      {e.teamMembers[index].role.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-end mt-3">
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => remove(index)}
                  disabled={fields.length === 1}
                >
                  Hapus
                </Button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Submit */}
      <div className="pt-4 flex justify-end">
        <Button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:opacity-90 transition-all"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Menyimpan..." : " Buat Proyek"}
        </Button>
      </div>
    </motion.form>
  );
}
