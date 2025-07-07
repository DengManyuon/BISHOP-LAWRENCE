"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  Users,
  BookOpen,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Play,
  Download,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4">
                  Senior Pastor
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  Welcome to Our
                  <span className="text-primary block">Faith Community</span>
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
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-8">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Pastor John Smith"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">About Pastor John</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pastor John Smith has been faithfully serving the Lord for over
              two decades. With a Master of Divinity from Seminary College and a
              heart for community outreach, he leads with wisdom, compassion,
              and an unwavering commitment to God's word.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Biblical Teaching</h3>
                <p className="text-sm text-muted-foreground">
                  Committed to expository preaching and sound biblical doctrine
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Community Care</h3>
                <p className="text-sm text-muted-foreground">
                  Passionate about pastoral care and building strong
                  relationships
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Servant Leadership</h3>
                <p className="text-sm text-muted-foreground">
                  Leading by example with humility and genuine love for people
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Areas */}
      <section id="ministry" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Ministry Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our ministry encompasses various aspects of spiritual growth and
              community service
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Preaching & Teaching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Weekly sermons, Bible studies, and theological education for
                  all ages
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Pastoral Care
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Counseling, hospital visits, and spiritual guidance for
                  congregation members
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Community Outreach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Food drives, community events, and local mission work
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Sermons */}
      <section id="sermons" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Recent Sermons</h2>
              <p className="text-muted-foreground">
                Listen to our latest messages and teachings
              </p>
            </div>
            <Button variant="outline">
              View All Sermons
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Walking in Faith</CardTitle>
                <CardDescription>
                  December 10, 2024 • 35 minutes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Exploring what it means to trust God completely in uncertain
                  times.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Play className="w-3 h-3 mr-1" />
                    Listen
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Download className="w-3 h-3 mr-1" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Love in Action</CardTitle>
                <CardDescription>December 3, 2024 • 42 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  How we can demonstrate Christ's love through our daily
                  actions.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Play className="w-3 h-3 mr-1" />
                    Listen
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Download className="w-3 h-3 mr-1" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Hope for Tomorrow</CardTitle>
                <CardDescription>
                  November 26, 2024 • 38 minutes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Finding hope and purpose in God's promises for our future.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Play className="w-3 h-3 mr-1" />
                    Listen
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Download className="w-3 h-3 mr-1" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
              <span className="text-lg font-semibold">Pastor John Smith</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Pastor John Smith. Serving with love and dedication.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
