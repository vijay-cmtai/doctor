"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DoctorCard } from "@/components/doctor-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import doctorsData from "@/data/doctors.json"

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
  image: string
}

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedState, setSelectedState] = useState("All States")
  const [selectedCity, setSelectedCity] = useState("All Cities")
  const [selectedSubarea, setSelectedSubarea] = useState("All Subareas")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")

  const uniqueStates = useMemo(() => {
    const states = new Set<string>()
    doctorsData.forEach((doctor) => states.add(doctor.address.state))
    return Array.from(states).sort()
  }, [])

  const uniqueCities = useMemo(() => {
    const cities = new Set<string>()
    doctorsData.forEach((doctor) => {
      if (selectedState === "All States" || doctor.address.state === selectedState) {
        cities.add(doctor.address.city)
      }
    })
    return Array.from(cities).sort()
  }, [selectedState])

  const uniqueSubareas = useMemo(() => {
    const subareas = new Set<string>()
    doctorsData.forEach((doctor) => {
      if (
        (selectedState === "All States" || doctor.address.state === selectedState) &&
        (selectedCity === "All Cities" || doctor.address.city === selectedCity)
      ) {
        subareas.add(doctor.address.subarea)
      }
    })
    return Array.from(subareas).sort()
  }, [selectedState, selectedCity])

  const uniqueCategories = useMemo(() => {
    const categories = new Set<string>()
    doctorsData.forEach((doctor) => categories.add(doctor.specialty))
    return Array.from(categories).sort()
  }, [])

  const filteredDoctors = useMemo(() => {
    return doctorsData.filter((doctor) => {
      const matchesSearchTerm = doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesState = selectedState === "All States" ? true : doctor.address.state === selectedState
      const matchesCity = selectedCity === "All Cities" ? true : doctor.address.city === selectedCity
      const matchesSubarea = selectedSubarea === "All Subareas" ? true : doctor.address.subarea === selectedSubarea
      const matchesCategory = selectedCategory === "All Categories" ? true : doctor.specialty === selectedCategory

      return matchesSearchTerm && matchesState && matchesCity && matchesSubarea && matchesCategory
    })
  }, [searchTerm, selectedState, selectedCity, selectedSubarea, selectedCategory])

  // Reset city and subarea when state changes
  useEffect(() => {
    setSelectedCity("All Cities")
    setSelectedSubarea("All Subareas")
  }, [selectedState])

  // Reset subarea when city changes
  useEffect(() => {
    setSelectedSubarea("All Subareas")
  }, [selectedCity])

  const handleResetFilters = useCallback(() => {
    setSearchTerm("")
    setSelectedState("All States")
    setSelectedCity("All Cities")
    setSelectedSubarea("All Subareas")
    setSelectedCategory("All Categories")
  }, [])

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1 py-8 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Input
              placeholder="Doctor Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 min-w-[180px]"
            />
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger className="flex-1 min-w-[180px]">
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All States">All States</SelectItem>
                {uniqueStates.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="flex-1 min-w-[180px]">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Cities">All Cities</SelectItem>
                {uniqueCities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedSubarea} onValueChange={setSelectedSubarea}>
              <SelectTrigger className="flex-1 min-w-[180px]">
                <SelectValue placeholder="Select Subarea" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Subareas">All Subareas</SelectItem>
                {uniqueSubareas.map((subarea) => (
                  <SelectItem key={subarea} value={subarea}>
                    {subarea}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="flex-1 min-w-[180px]">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Categories">All Categories</SelectItem>
                {uniqueCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end mb-8">
            <Button onClick={handleResetFilters} variant="outline">
              Reset Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
            ) : (
              <p className="col-span-full text-center text-muted-foreground">
                No doctors found matching your criteria.
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
