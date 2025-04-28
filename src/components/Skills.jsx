export default function Skills() {

  /*
  Expert (90-100)
  Advanced (80-90)
  Proficient (60-80)
  Intermediate (40-60)
  Familiar (20-40)
  */

  const languages = [
    { name: "React", level: 90, rating: "Advanced", description: "Learned at JPMorgan and became the SME on my team" },
    { name: "Javascript", level: 80, rating: "Proficient", description: "Learned at JPMorgan while learning react" },
    { name: "JAVA", level: 80, rating: "Advanced", description: "Learned as a kid but developed a mastery while at JPMorgan" },
    { name: "Springboot", level: 80, rating: "Advanced", description: "Learned at JPMorgan" },
    { name: "Python", level: 80, rating: "Proficient", description: "Used while at Ligero Technical and for various script at JPMorgan" },
    { name: "Terraform", level: 65, rating: "Proficient", description: "Use in homelab and at JPMorgan" },
    { name: "Electron", level: 65, rating: "Proficient", description: "Side project at work (RECCE) and at home" },
    { name: "SQL", level: 60, rating: "Intermediate", description: "Learned at JPMorgan" },
    { name: "C++", level: 40, rating: "Familiar", description: "Used extensively in college" },
    { name: "C", level: 40, rating: "Familiar", description: "Used extensively in college" },
    { name: "GO", level: 40, rating: "Familiar", description: "Personal intereset and side projects" },
  ];

  const tools = [
    { name: "Kubernetes", level: 85, rating: "Advanced", description: "Use extensively at JPMorgan" },
    { name: "Docker", level: 80, rating: "Advanced", description: "Primarily homelab usage but also at JPMorgan" },
    { name: "Nix", level: 50, rating: "Intermediate", description: "Personal laptop and homelab services" },
    { name: "Kafka", level: 40, rating: "Familiar", description: "Learned at JPMorgan" },
    { name: "Linux", level: 50, rating: "Intermediate", description: "Homelab and personal devices" },
    { name: "Git", level: 85, rating: "Advanced", description: "Learned in highschool and built a tool around git (RECCE)" },
    { name: "AWS", level: 85, rating: "Advanced", description: "Use on a daily basis at JPMorgan and have 3 certificates" },
  ];

  return (
    <div className="mx-auto rounded-lg min-w-md">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary-white">
        Languages
      </h2>

      <div className="space-y-4">
        {languages.map((language, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between py-1">
              <div className="flex flex-row">
                {(() => {
                  switch (language.name) {
                    case "JAVA":
                      return (
                        <img className="size-8" src="/svgs/java.svg" />
                      );
                    case "Springboot":
                      return (
                        <img className="size-8" src="/svgs/spring.svg" />
                      );
                    case "Javascript":
                      return (
                        <img className="size-8" src="/svgs/js.svg" />
                      );
                    case "React":
                      return (
                        <img className="size-8" src="/svgs/react.svg" />
                      );
                    case "Python":
                      return (
                        <img className="size-8" src="/svgs/python.svg" />
                      );
                    case "Terraform":
                      return (
                        <img className="size-8" src="/svgs/terraform.svg" />
                      );
                    case "Electron":
                      return (
                        <img className="size-8" src="/svgs/electron.svg" />
                      );
                    case "SQL":
                      return (
                        <img className="size-8" src="/svgs/sql.svg" />
                      );
                    case "C++":
                      return (
                        <div className="rounded-full bg-border px-1 content-center my-2">C++</div>
                      );
                    case "C":
                      return (
                        <div className="rounded-full bg-border px-2 content-center my-2">C</div>
                      );
                    case "GO":
                      return (
                        <img className="size-8" src="/svgs/go.svg" />
                      );
                  }
                })()}
              </div>
              <div className="flex flex-col">
              <span className="text-sm font-medium text-right content-center">{language.rating}</span>
              <span className="text-sm font-medium text-right content-center pb-1">{language.description}</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-secondary-grey h-2.5 rounded-full border-2 border-white"
                style={{ width: `${language.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary-white pt-4">
        Tools
      </h2>

      <div className="space-y-4">
        {tools.map((tool, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between mb-1">
              <div className="flex flex-row">
                {(() => {
                  switch (tool.name) {
                    case "Kubernetes":
                      return (
                        <img className="size-8" src="/svgs/kubernetes.svg" />
                      );
                    case "Docker":
                      return (
                        <img className="size-8" src="/svgs/docker.svg" />
                      );
                    case "Nix":
                      return (
                        <img className="size-8" src="/svgs/nix.svg" />
                      );
                    case "Kafka":
                      return (
                        <img className="size-8 bg-border rounded-xl px-1" src="/svgs/kafka.svg" />
                      );
                    case "Linux":
                      return (
                        <img className="size-8" src="/svgs/linux.svg" />
                      );
                    case "Git":
                      return (
                        <img className="size-8" src="/svgs/git.svg" />
                      );
                    case "AWS":
                      return (
                        <img className="size-8 bg-border rounded-xl px-1" src="/svgs/aws.svg" />
                      );
                  }
                })()}
              </div>
              <div className="flex flex-col">
              <span className="text-sm font-medium text-right content-center">{tool.rating}</span>
              <span className="text-sm font-medium text-right content-center pb-1">{tool.description}</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-secondary-grey h-2.5 rounded-full border-2 border-white" style={{ width: `${tool.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}