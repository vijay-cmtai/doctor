import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1 py-8 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-4">
            If you have any questions, feedback, or need assistance, please feel free to reach out to us.
          </p>
          <div className="grid gap-4 text-lg text-gray-700">
            <p>
              <strong>Email:</strong> support@doctordirectory.com
            </p>
            <p>
              <strong>Phone:</strong> +91 12345 67890
            </p>
            <p>
              <strong>Address:</strong> 123 Health Lane, Wellness City, State, 123456
            </p>
          </div>
          <p className="text-lg text-gray-700 mt-6">We aim to respond to all inquiries within 24-48 hours.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
