import { BookOpen, Zap, Users, Trophy } from 'lucide-react';
import Feature from './Feature';

const FeatureSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Curated Problems',
      description:
        'Solve hundreds of coding challenges across all difficulty levels',
    },
    {
      icon: Zap,
      title: 'Real-Time Contests',
      description:
        'Compete with programmers worldwide in live coding competitions',
    },
    {
      icon: Users,
      title: 'Community Learning',
      description: 'Learn from solutions, discussions, and expert walkthroughs',
    },
    {
      icon: Trophy,
      title: 'Track Progress',
      description: 'Build your portfolio and climb the global leaderboard',
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-foreground">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete platform for learning and mastering competitive coding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map(({ icon: Icon, title, description }, i) => (
            <Feature
              key={i}
              Icon={Icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
