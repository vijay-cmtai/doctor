import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Doctor {
  id: string
  name: string
  specialty: string
  address: {
    street: string
    subarea: string
    city: string
    state: string
    zip: string
  }
  phone: string
  email: string
  image: string // Keeping this for data consistency, though not displayed
}

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold">{doctor.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
      </CardHeader>
      <CardContent className="grid gap-1 text-sm">
        <p>
          <span className="font-medium">Location:</span> {`${doctor.address.city}, ${doctor.address.state}`}
        </p>
        <p>
          <span className="font-medium">Address:</span> {`${doctor.address.street}, ${doctor.address.subarea}`}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {doctor.phone}
        </p>
        <p>
          <span className="font-medium">Email:</span> {doctor.email}
        </p>
      </CardContent>
    </Card>
  )
}
