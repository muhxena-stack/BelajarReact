import * as React from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Textarea } from "@/components/ui/textarea";

export default function ProfilePage() {
  const [name, setName] = React.useState<string>("")
  const [email, setEmail] = React.useState<string>("")
  const [bio, setBio] = React.useState<string>("")
  const [submitted, setSubmitted] = React.useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 p-4 relative">
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Profil Pengguna</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Nama Lengkap</label>
              <Input
                type="text"
                placeholder="Masukkan nama..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <Input
                type="email"
                placeholder="Masukkan email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Bio</label>
              <Textarea
                placeholder="Masukkan bio..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full">
              Simpan Profil
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex justify-center">
          {submitted && (
            <Alert className="w-full mt-2">
              <AlertTitle>Profil Disimpan!</AlertTitle>
              <AlertDescription>
                Nama: <strong>{name}</strong> <br />
                Email: <strong>{email}</strong> <br />
                Bio: <strong>{bio}</strong>
              </AlertDescription>
            </Alert>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
