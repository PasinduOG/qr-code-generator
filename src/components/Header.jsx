import PropTypes from '../utils/PropTypes';

const Header = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10">      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          {title.split(' ')[0]}
        </span>{' '}
        {title.split(' ').slice(1).join(' ')}
      </h1>
      {subtitle && (
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default Header;
