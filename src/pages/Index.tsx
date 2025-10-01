import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Code2, Briefcase, GraduationCap, Users } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Algorithmic Trading Strategy",
      period: "Jun 2025 – Aug 2025",
      description: "Designed and backtested a trading algorithm using ATR stop-losses, RSI oscillators, and MACD crossovers to manage risk. Leveraged OHLCV market data with NumPy to compute indicators, automate execution, and built dashboards in Pandas/Matplotlib to visualize outcomes.",
      tech: ["Python", "NumPy", "Pandas", "Matplotlib"]
    },
    {
      title: "Map Mates Web App",
      period: "Jul 2024 – Aug 2024",
      description: "Engineered a full-stack travel app integrating the Google Places API for trip planning. Tracked engagement with Google Analytics, optimized backend calls (30% faster), and built interactive UI components with React.",
      tech: ["React", "Google Places API", "Google Analytics"]
    },
    {
      title: "Eco Eats Android App",
      period: "Jun 2023 – Nov 2023",
      description: "Developed an Android app to reduce food waste by scanning ingredients and generating AI-driven recipes. Integrated the OpenAI API and fine-tuned a Hugging Face vision model, reaching 76% accuracy on real-world tests.",
      tech: ["Android Studio", "OpenAI API", "Hugging Face", "Python"]
    }
  ];

  const experiences = [
    {
      company: "GIS Guys",
      role: "Software Engineer Intern",
      period: "Jul 2024 – Sep 2024",
      description: "Engineered geospatial maps in QGIS, automated analysis with PyQGIS/Python, and created styled maps for urban planning insights."
    },
    {
      company: "iStartValley",
      role: "Software Engineer Intern",
      period: "Jan 2024 – May 2024",
      description: "Built React dashboards and Node.js APIs for a stock-tracking app, integrated Alpha Vantage API for real-time data, and designed SQL databases for trades and watchlists."
    },
    {
      company: "Science Gurus",
      role: "Software Engineer Intern",
      period: "Jun 2023 – Jul 2023",
      description: "Built frontend modules in React for a workout app, implemented Python backend APIs, and improved usability through refined UI/UX flows."
    }
  ];

  const skills = [
    "Python", "Java", "React", "JavaScript", "HTML/CSS", "SQL", "XML", 
    "Git", "Android Studio", "Figma", "Tableau", "Postman", 
    "Hugging Face", "OpenAI API", "Google Places API", "Google Analytics", 
    "QuantConnect", "AWS"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className={`container mx-auto px-6 text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient">
            Hi, I'm Aravind Pillarisetty
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Crafting scalable, data-driven, and intuitive software solutions.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Code2 className="w-12 h-12 mx-auto mb-4 text-primary animate-float" />
            <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">Innovative solutions built with cutting-edge technologies</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="p-8 bg-card border-border hover-lift cursor-pointer group"
              >
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{project.period}</p>
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Briefcase className="w-12 h-12 mx-auto mb-4 text-primary animate-float" />
            <h2 className="text-5xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground text-lg">Building impactful software across diverse industries</p>
          </div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
                <p className="text-primary font-semibold mb-1">{exp.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                <p className="text-foreground/90 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <GraduationCap className="w-12 h-12 mb-4 text-primary animate-float" />
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                I'm a Computer Science student at The University of Texas at Austin (GPA: 4.0, Class of 2028) 
                with a passion for full-stack development, data analysis, and machine learning. I enjoy building 
                apps that merge technical depth with real-world usability.
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">University:</span> UT Austin
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">GPA:</span> 4.0
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Graduation:</span> 2028
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-primary hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-3">Relevant Coursework</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Data Structures and Algorithms</li>
                  <li>• Discrete Math</li>
                  <li>• Multivariable Calculus</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary animate-float" />
            <h2 className="text-5xl font-bold mb-4">Leadership</h2>
          </div>
          <Card className="p-10 bg-card border-border hover-lift">
            <h3 className="text-3xl font-bold mb-2">The Sunlight Initiative</h3>
            <p className="text-primary font-semibold mb-2">Community Outreach Officer</p>
            <p className="text-sm text-muted-foreground mb-6">May 2023 – Jun 2025</p>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Pioneered a fundraising strategy raising $5K+, led book drives collecting 10,000+ books for schools, 
              and supported the national expansion of 15+ new chapters.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="text-3xl font-bold text-primary">$5K+</p>
                <p className="text-sm text-muted-foreground">Raised</p>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="text-3xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Books Collected</p>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">New Chapters</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Mail className="w-12 h-12 mx-auto mb-4 text-primary animate-float" />
            <h2 className="text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground text-lg">Let's build something amazing together</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-6 bg-card border-border hover-lift">
                <div className="flex items-center gap-4">
                  <Mail className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:aravindpillarisetty@gmail.com" className="text-lg hover:text-primary transition-colors">
                      aravindpillarisetty@gmail.com
                    </a>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-card border-border hover-lift">
                <div className="flex items-center gap-4">
                  <Phone className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:4695857037" className="text-lg hover:text-primary transition-colors">
                      (469) 585 7037
                    </a>
                  </div>
                </div>
              </Card>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="flex-1 border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="https://github.com/aravindp117" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="flex-1 border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/aravind-pillarisetty-aa6427227/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            <Card className="p-8 bg-card border-border">
              <form className="space-y-6">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Aravind Pillarisetty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
