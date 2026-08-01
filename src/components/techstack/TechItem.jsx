import PropTypes from "prop-types";

const TechItem = ({ name, icon, capabilities }) => (
  <div className="rounded-lg border border-white/10 bg-white/5 p-4 transition-colors motion-reduce:transition-none duration-300 hover:border-cyan-400/40 hover:bg-white/10">
    <div className="flex items-center gap-2.5">
      <span aria-hidden="true" className="shrink-0 text-lg text-cyan-400">
        {icon}
      </span>
      <span className="font-medium text-white">{name}</span>
    </div>
    <ul className="mt-2 space-y-0.5 text-xs text-gray-400">
      {capabilities.map((capability) => (
        <li key={capability} className="flex items-start gap-1.5">
          <span aria-hidden="true" className="text-cyan-400/70">
            •
          </span>
          {capability}
        </li>
      ))}
    </ul>
  </div>
);

TechItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  capabilities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TechItem;
