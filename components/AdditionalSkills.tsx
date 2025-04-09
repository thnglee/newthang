import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Video, 
  Share2,   
} from "lucide-react";

export default function AdditionalSkills() {
  const skills = [
    {
      category: "Thiết kế & Dựng",
      icon: <Video className="h-5 w-5" />,
      items: [
        "Adobe Premiere Pro",
        "Canva",
        "Basic Photoshop",
        "Capcut"
      ]
    },
    {
      category: "Social Media",
      icon: <Share2 className="h-5 w-5" />,
      items: [
        "Quản trị đa kênh",
        "Xây dựng group",
        "Sáng tạo nội dung",
        "Vận hành quảng cáo"
      ]
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Kỹ nghệ bên lề</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary"
                    className="text-sm font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 