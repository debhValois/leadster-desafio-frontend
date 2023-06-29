import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/logo.png' alt='logo leadster' width={194} height={42} />
    </Link>
  );
};

export default Logo;