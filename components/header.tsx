import Link from "next/link"
import { Stethoscope, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-[#00796B] text-white">
      <Link href="/" className="flex items-center justify-center">
        <Stethoscope className="h-6 w-6" />
        <span className="ml-2 text-lg font-semibold">Doctor Directory</span>
      </Link>
      {/* Mobile menu trigger on the right */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden text-white ml-auto">
            {" "}
            {/* Added ml-auto here */}
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-white text-gray-900">
          <Link href="/" className="flex items-center justify-center py-4">
            <Stethoscope className="h-6 w-6 text-[#00796B]" />
            <span className="ml-2 text-lg font-semibold text-[#00796B]">Doctor Directory</span>
          </Link>
          <nav className="grid gap-4 py-6">
            <Link href="/" className="flex w-full items-center py-2 text-lg font-semibold hover:text-[#00796B]">
              Home
            </Link>
            <Link href="/about" className="flex w-full items-center py-2 text-lg font-semibold hover:text-[#00796B]">
              About
            </Link>
            <Link href="/contact" className="flex w-full items-center py-2 text-lg font-semibold hover:text-[#00796B]">
              Contact
            </Link>
            <Link
              href="/privacy-policy"
              className="flex w-full items-center py-2 text-lg font-semibold hover:text-[#00796B]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="flex w-full items-center py-2 text-lg font-semibold hover:text-[#00796B]"
            >
              Terms & Conditions
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      {/* Desktop navigation links */}
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
        <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
          Home
        </Link>
        <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
          About
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
          Contact
        </Link>
        <Link href="/privacy-policy" className="text-sm font-medium hover:underline underline-offset-4">
          Privacy Policy
        </Link>
        <Link href="/terms-conditions" className="text-sm font-medium hover:underline underline-offset-4">
          Terms & Conditions
        </Link>
      </nav>
    </header>
  )
}
