import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const teamMembers = [
  { name: "Samiksha Bajoria", role: "Team Member" },
  { name: "Saptaparna Das", role: "Team Member" },
  { name: "Kousiki Baral", role: "Team Member" },
  { name: "Oindrila Hazra", role: "Team Member" },
];

const Team = () => {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Team Bitbees</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Meet the <span className="gradient-text">Innovators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate team dedicated to solving educational challenges through technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="card-hover border-none shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-none shadow-xl animate-fade-in">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">EDUC-A-THON 2.0</h3>
              <p className="text-muted-foreground mb-4">
                Problem Statement No. 01 | Team Bitbees | 4 Members
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  React.js
                </span>
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  AI/ML
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  PostgreSQL
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;
