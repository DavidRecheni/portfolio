interface IBadge {
  title: string,
  disabled?: boolean
}

const Badge: React.FC<IBadge> = ({ title, disabled }) => (
  <img src={`https://img.shields.io/badge/-${title}-${disabled ? 'lightgray' : 'blue'}?style=for-the-badge&labelColor=0d1117`} alt="blockchain" />
);

export default Badge;
