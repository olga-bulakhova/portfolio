import { motion } from 'framer-motion';

type LogoProps = {
  onClick: () => void;
};

export const Logo = ({ onClick }: LogoProps) => (
  <motion.a
    href="#hero"
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className="cursor-pointer text-lg font-bold tracking-tight text-glass-text"
    whileHover={{ scale: 1.02 }}
  >
    Portfolio
  </motion.a>
);
