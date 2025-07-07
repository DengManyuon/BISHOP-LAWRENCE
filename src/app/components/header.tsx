import { Heart } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold">Pastor John Smith</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#ministry"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Ministry
            </Link>
            <Link
              href="#sermons"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Sermons
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
