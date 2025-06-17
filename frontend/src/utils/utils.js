export const generateBackgroundColor = () => {
  const x = Math.floor(Math.random() * 255);
  const y = Math.floor(Math.random() * 255);
  const z = Math.floor(Math.random() * 255);
  const colors = `rgba(${x},${y},${z},0.9)`;
  return colors;
};
