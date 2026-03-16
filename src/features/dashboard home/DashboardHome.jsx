'use client';

import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { TrendingUp, Calendar, Award, Flame } from 'lucide-react';

export default function DashboardHome() {
  const { user } = useAuth();

  const stats = [
    {
      label: 'Problems Solved',
      value: '24',
      icon: Award,
      change: '+3 this week',
    },
    { label: 'Current Streak', value: '12', icon: Flame, change: 'days' },
    {
      label: 'Contests Entered',
      value: '5',
      icon: Calendar,
      change: 'all-time',
    },
    { label: 'Rank', value: '#2,541', icon: TrendingUp, change: 'global' },
  ];

  const recentProblems = [
    { id: 1, title: 'Two Sum', difficulty: 'Easy', status: 'Solved' },
    {
      id: 2,
      title: 'Merge Sorted Arrays',
      difficulty: 'Medium',
      status: 'Attempted',
    },
    {
      id: 3,
      title: 'Longest Substring',
      difficulty: 'Medium',
      status: 'Attempted',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome section */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-foreground">
          Welcome back, {user?.username}!
        </h1>
        <p className="text-lg text-muted-foreground">
          Keep pushing your limits and improve your coding skills
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon, change }) => (
          <Card
            key={label}
            className="p-6 border-border bg-card hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {label}
                </p>
                <p className="text-3xl font-bold text-foreground mt-2">
                  {value}
                </p>
                <p className="text-xs text-muted-foreground mt-2">{change}</p>
              </div>
              <Icon className="w-5 h-5 text-primary" />
            </div>
          </Card>
        ))}
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent activity */}
        <Card className="lg:col-span-2 p-6 border-border bg-card">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">
                Recent Problems
              </h2>
              <Link to="/dashboard/problems">
                <Button
                  variant="ghost"
                  className="text-primary hover:text-accent"
                >
                  View all
                </Button>
              </Link>
            </div>

            <div className="space-y-2">
              {recentProblems.map((problem) => (
                <div
                  key={problem.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {problem.difficulty}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded text-xs font-medium ${
                      problem.status === 'Solved'
                        ? 'bg-accent/20 text-accent'
                        : 'bg-primary/20 text-primary'
                    }`}
                  >
                    {problem.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Quick actions */}
        <Card className="p-6 border-border bg-card h-fit">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Quick Actions
            </h2>
            <Link to="/dashboard/problems" className="block">
              <Button className="w-full bg-primary hover:bg-primary/90">
                Solve Problems
              </Button>
            </Link>
            <Link to="/dashboard/contests" className="block">
              <Button
                variant="outline"
                className="w-full border-border hover:bg-card bg-transparent"
              >
                Join Contest
              </Button>
            </Link>
            <Link to="/dashboard/leaderboard" className="block">
              <Button
                variant="outline"
                className="w-full border-border hover:bg-card bg-transparent"
              >
                View Leaderboard
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      {/* Upcoming section */}
      <Card className="p-6 border-border bg-linear-to-r from-primary/10 to-accent/10">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">Next Contest</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold text-foreground">
                Weekly Challenge #42
              </p>
              <p className="text-sm text-muted-foreground">
                Starts in 2 days • 2 hours duration
              </p>
            </div>
            <Link to="/dashboard/contests">
              <Button className="bg-primary hover:bg-primary/90">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
