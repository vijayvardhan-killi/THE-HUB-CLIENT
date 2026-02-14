import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Zap, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeatureSection from '@/components/common/landing/FeatureSection';

const Landing = () => {


  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold text-foreground text-balance leading-tight">
              Master Competitive Coding Through{' '}
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                Real Challenges
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl text-balance">
              Join developers solving problems, competing in contests, and
              building expertise through THE HUB's comprehensive platform.
            </p>
            <div className="flex gap-4">
              <Link href="/signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Coding Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-card bg-transparent"
              >
                Explore Problems
              </Button>
            </div>
          </div>

          {/* Hero visual */}
          <div className="mt-16 p-8 rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm font-mono text-muted-foreground">
                  // Start your journey
                </span>
              </div>
              <pre className="text-foreground font-mono text-sm overflow-x-auto">
                {`function solveChallenge(problem) {
  // Write your solution here
  return masterCode();
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <FeatureSection />

      <Footer />
    </>
  );
};

export default Landing;
