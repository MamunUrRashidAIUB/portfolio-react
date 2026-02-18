const Skillbar = () => {
  return (
    <div className="bg-black text-white p-6 space-y-4">
      <SkillBar skill="Front-end" percentage="80%" color="bg-cyan-400" />
      <SkillBar skill="Back-end" percentage="65%" color="bg-yellow-400" />
      <SkillBar skill="ReactJS" percentage="85%" color="bg-red-500" />
      <SkillBar skill="NodeJS" percentage="70%" color="bg-teal-400" />
      <SkillBar skill="MongoDB" percentage="40%" color="bg-teal-400" />
      
    </div>
  );
};

const SkillBar = ({ skill, percentage, color }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{skill}</span>
        <span>{percentage}</span>
      </div>
      <div className="w-[400px] bg-gray-700 rounded-full max-h-0.5">
        <div
          className={`${color} min-h-0.5 rounded-full transition-all duration-700`}
          style={{ width: percentage }}
          role="progressbar"
          aria-label={`${skill} skill level`}
          aria-valuenow={parseInt(percentage, 10)}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default Skillbar;
