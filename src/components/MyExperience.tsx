import { GraduationCap, Briefcase } from "lucide-react";
import ExperienceCard, { type Experience } from "./ExperienceCard";

interface ExperienceProps {
  experiences: {
    education: Experience[];
    work: Experience[];
  };
}

export default function MyExperience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">
          Experience & Education
        </h2>

        {/* Education Section */}
        {experiences.education.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="text-blue-400" />
              Education
            </h3>
            <div className="space-y-6">
              {experiences.education.map((experience, idx) => (
                <ExperienceCard
                  key={idx}
                  experience={experience}
                  icon={GraduationCap}
                  iconColor="text-blue-400"
                />
              ))}
            </div>
          </div>
        )}

        {/* Work Experience Section */}
        {experiences.work.length > 0 && (
          <div>
            <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
              <Briefcase className="text-green-400" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.work.map((experience, idx) => (
                <ExperienceCard
                  key={idx}
                  experience={experience}
                  icon={Briefcase}
                  iconColor="text-green-400"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
