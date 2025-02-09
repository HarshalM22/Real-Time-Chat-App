import { ReactElement } from "react";

interface FeatureCardProps {
    title : string
    icon : ReactElement
    variant : "default" | "highlighted"
}
export function FeatureCard ({title,icon,variant} : FeatureCardProps)  {
    const variants = {
      default: 'bg-white shadow-lg',
      highlighted: 'bg-blue-50 shadow-xl border-2 border-blue-200'
    };
  
    return (
      <div className={"rounded-xl p-6 " + variants[variant]}>
        <div className="w-12 h-12 bg-blue-600 rounded-full mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
      </div>
    );
  };