import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, BookOpen } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold py-5 tracking-tight">
                KING'S COVENANT CATHEDRAL
              </h1>
              <h1 className="text-lg lg:text-2xl font-bold tracking-tight">
                VOICE OF GENERATIONAL FREEDOM
                {/* <span className="text-primary block">Faith Community</span> */}
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Serving God's people with love, compassion, and dedication for
                over 15 years. Join us in our journey of faith, hope, and
                spiritual growth.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">
                <Calendar className="w-4 h-4 mr-2" />
                Join Our Service
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base bg-transparent"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Read Latest Sermon
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-blue-500 p-8">
              <Image
                src="/p.png"
                alt="Pastor John Smith"
                width={400}
                height={400}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
