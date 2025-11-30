import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "Fire and Ice",
    date: "April 04, 2025",
    excerpt: "A poem by Robert Frost exploring the end of the world through fire and ice, desire and hate.",
    category: "Poetry"
  },
  {
    title: "A Letter to God",
    date: "April 04, 2025",
    excerpt: "A deeply moving story about faith, hope, and human kindness by Gregorio López y Fuentes.",
    category: "Literature"
  },
  {
    title: "A Photograph",
    date: "April 03, 2025",
    excerpt: "A touching poem by Shirley Toulson about memories, loss, and the passage of time.",
    category: "Poetry"
  },
  {
    title: "Dust of Snow",
    date: "March 26, 2025",
    excerpt: "Robert Frost's beautiful depiction of how a simple moment in nature can change one's mood.",
    category: "Poetry"
  },
  {
    title: "Prayer for Strength",
    date: "March 26, 2025",
    excerpt: "A spiritual poem by Rabindranath Tagore seeking divine strength and guidance.",
    category: "Poetry"
  },
  {
    title: "On Equality",
    date: "February 12, 2025",
    excerpt: "Understanding equality in Indian democracy and constitutional provisions for equal rights.",
    category: "Political Science"
  },
  {
    title: "Environment",
    date: "January 29, 2025",
    excerpt: "Comprehensive geography notes covering environment, its components, and life support systems.",
    category: "Geography"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-12">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            SWE INSTITUTE
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg md:text-xl text-foreground font-medium">
              SWE Institute empowers students for academic success. Conquer state boards, crack competitive entrances & Olympiads with our comprehensive resources and expert guidance.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              SWE Institute equips students with the tools they need to excel in their studies. Our extensive library of study materials includes notes, practice problems, and topic-specific guides tailored to various academic levels and goals.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="h-7 w-7 text-primary" />
            Recent Posts
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50 animate-in fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
    
