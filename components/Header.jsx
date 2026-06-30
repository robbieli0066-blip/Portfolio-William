import Image from "next/image";
import Link from "next/link";
import { RiGithubLine, RiMailLine, RiPhoneLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-8 xl:px-16 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="William Aaron Tindull logo"
              width={280}
              height={39}
              priority
            />
          </Link>

          {/* contact */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-x-6 text-sm">
            <Link
              href="tel:+16507610640"
              title="Call"
              className="flex items-center gap-x-2 hover:text-accent transition-all duration-300"
            >
              <RiPhoneLine className="text-lg text-accent" aria-hidden />
              <span>1 650 761 0640</span>
            </Link>
            <Link
              href="mailto:williamaarontindull@gmail.com"
              title="Email"
              className="flex items-center gap-x-2 hover:text-accent transition-all duration-300"
            >
              <RiMailLine className="text-lg text-accent" aria-hidden />
              <span>williamaarontindull@gmail.com</span>
            </Link>
            <Link
              href="https://github.com/crazycoder0066"
              title="GitHub"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-x-2 hover:text-accent transition-all duration-300"
            >
              <RiGithubLine className="text-lg text-accent" aria-hidden />
              <span>crazycoder0066</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
