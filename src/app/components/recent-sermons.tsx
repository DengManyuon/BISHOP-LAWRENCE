import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Download, ChevronRight } from "lucide-react";

export default function RecentSermons() {
  return (
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
              <CardDescription>December 10, 2024 • 35 minutes</CardDescription>
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
                How we can demonstrate Christ's love through our daily actions.
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
              <CardDescription>November 26, 2024 • 38 minutes</CardDescription>
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
  );
}
