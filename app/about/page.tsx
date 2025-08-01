import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1 py-8 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to Doctor Directory, your trusted platform for finding healthcare professionals. Our mission is to
            connect patients with qualified doctors across various specialties, states, cities, and subareas.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We strive to provide accurate and up-to-date information to help you make informed decisions about your
            health. Our comprehensive database allows you to easily search and filter doctors based on your specific
            needs.
          </p>
          <p className="text-lg text-gray-700">Thank you for choosing Doctor Directory for your healthcare needs.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
