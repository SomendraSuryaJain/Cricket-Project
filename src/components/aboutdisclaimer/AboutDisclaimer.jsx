import React from 'react';
import { AlertTriangle, ShieldAlert, Shirt, UserX, HeartPulse } from 'lucide-react';

const AboutDisclaimer = () => {
  const rules = [
    {
      icon: <HeartPulse className="text-red-500" size={24} />,
      text: "The Academy and Coaches are not responsible for any injuries. In case of injury, we will provide basic first aid only."
    },
    {
      icon: <ShieldAlert className="text-amber-500" size={24} />,
      text: "The Academy is not responsible for the loss of equipment, mobile phones, gadgets, or money."
    },
    {
      icon: <UserX className="text-red-600" size={24} />,
      text: "Violence and abusive language are strictly prohibited. The Academy reserves the right to suspend players found violating this rule."
    },
    {
      icon: <Shirt className="text-blue-500" size={24} />,
      text: "All players must wear the proper uniform for practice; a white T-shirt is compulsory."
    },
    {
      icon: <AlertTriangle className="text-orange-500" size={24} />,
      text: "Any loss or damage to property must be compensated by the player found responsible."
    },
    {
      icon: <AlertTriangle className="text-gray-500" size={24} />,
      text: "The Academy reserves the right to terminate a player if their performance (batting or bowling average) consistently declines without improvement."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-grey-300 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 uppercase tracking-wider mb-2">
          Disclaimer
        </h2>
        {/* <div className="h-1 w-20 bg-red-600 mx-auto rounded-full"></div> */}
      </div>

      {/* Rules List */}
      <div className="bg-green-200 rounded-2xl p-6 md:p-10 shadow-sm border-4 border-blue-200">
        <ul className="space-y-4">
          {rules.map((rule, index) => (
            <li key={index} className="flex items-start gap-4 transition-transform duration-200 hover:translate-x-1">
              <span className="mt-1 shrink-0 bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                {rule.icon}
              </span>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-1">
                {rule.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutDisclaimer;