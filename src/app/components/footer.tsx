import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

export default function ContactFooter() {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Get in Touch</h2>
              <p className="text-muted-foreground">
                We'd love to hear from you. Reach out for pastoral care, prayer
                requests, or any questions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Feel free to reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        pastor.john@faithchurch.org
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        (555) 123-4567
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Church Address</p>
                      <p className="text-sm text-muted-foreground">
                        123 Faith Street
                        <br />
                        Hometown, ST 12345
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Service Times</CardTitle>
                  <CardDescription>
                    Join us for worship and fellowship
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium">Sunday Worship</p>
                    <p className="text-sm text-muted-foreground">
                      9:00 AM & 11:00 AM
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <p className="font-medium">Wednesday Bible Study</p>
                    <p className="text-sm text-muted-foreground">7:00 PM</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="font-medium">Prayer Meeting</p>
                    <p className="text-sm text-muted-foreground">
                      Friday 6:30 PM
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold">
                BISHOP FAVOUR LAWRENCE
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 BISHOP FAVOUR LAWRENCE. Serving with love and dedication.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
