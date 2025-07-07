import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Users, Heart } from "lucide-react";

import RecentSermons from "./recent-sermons";
export default function MainContent() {
  return (
    <>
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

      {/* <RecentSermons /> */}
    </>
  );
}
