import { useState, useEffect } from 'react';
import Link from 'next/link';

const logoSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="150" height="39,36" viewBox="0 0 1650 433">
    <defs>
      <style>
        .cls-1 {
          fill-rule: evenodd;
        }
      </style>
    </defs>
    <path id="M" class="cls-1" d="M947.625,0.312L869.5,226.571,791.375,0.312H557v431.95H752.313V233.976l78.125,198.286h78.125l78.125-198.9v198.9H1182V0.312H947.625Z"/>
    <path fill="white" id="a" class="cls-1" d="M312.453,288.279l98.828-123.415L384.328,288.279H312.453ZM612.063,0.312H377.688L1.516,432.262H196.828l33.2-41.138H362.063l-8.985,41.138H548.391Z"/>
    <path id="N" class="cls-1" d="M1492.63,432.262h156.25V0.312H1453.56V164.864L1336.38,0.312H1180.13v431.95h195.31V267.71Z"/>
  </svg>
`;

function Header() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full flex justify-center mt-5">
      <header className={isNavbarFixed ? 'navbar-fixed' : 'w-5/6 px-5 py-1 flex justify-center items-center backdrop-blur-lg bg-white/30 z-50 rounded-lg border border-gray-200'} style={{ zIndex: 1000, transition: 'top 0.3s ease-in-out' }}>
        <div className="container flex justify-between items-center py-4">
          <div className="h-6 w-6 text-blue-500" dangerouslySetInnerHTML={{ __html: logoSvg }} />
          <div className="flex items-center space-x-4">
            <Link href="/pages" className="hover:text-blue-500">Pages</Link>
            <Link href="/account" className="hover:text-blue-500">Account</Link>
            <Link href="/blocks" className="hover:text-blue-500">Blocks</Link>
            <Link href="/docs" className="hover:text-blue-500">Docs</Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
