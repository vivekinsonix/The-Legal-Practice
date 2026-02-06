'use client';

import { useDrawer } from '@/app/context/DrawerContext';
import { Spinner } from 'flowbite-react';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Links from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { get_what_we_builds } from '../../services/homePageService';
import { DropdownKey } from './header';

interface Props {
  openDropdown: DropdownKey;
  setOpenDropdown: (key: DropdownKey) => void;
  setIsMenuOpen: () => void;
}

interface LinkItem {
  id: string;
  label: string;
  slug: string;
}

const CACHE_KEY = 'who_we_serve_data';

const WhoWeServe: React.FC<Props> = React.memo(({ openDropdown, setOpenDropdown, setIsMenuOpen }) => {
  const { closeDrawer } = useDrawer();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isOpen = openDropdown === 'who';
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [loading, setLoading] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener (only matters on home page)
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Text color logic
  const navTextColor = isHomePage ? (scrolled ? 'text-black' : 'text-white') : 'text-black';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen, setOpenDropdown]);

  useEffect(() => {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      setLinks(JSON.parse(cached));
      return;
    }

    setLoading(true);
    get_what_we_builds()
      .then((res) => {
        const mapped =
          res?.data?.map((item: any) => ({
            id: item.documentId,
            label: item.main?.title ?? '',
            slug: item?.slug,
          })) ?? [];
        setLinks(mapped);
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(mapped));
      })
      .finally(() => setLoading(false));
  }, []);

  const toggle = useCallback(() => {
    setOpenDropdown(isOpen ? null : 'who');
  }, [isOpen, setOpenDropdown]);

  const selectedLink = useCallback(() => {
    setOpenDropdown(null);
    closeDrawer();
    setIsMenuOpen();
  }, [closeDrawer, setOpenDropdown]);

  return (
    <div ref={wrapperRef} className="relative md:py-0 pb-4">
      <button onClick={toggle} className={` ${navTextColor} hover:text-primary flex items-center gap-1`}>
        Client Info
        <ChevronDown size={16} className={isOpen ? 'rotate-180' : ''} />
      </button>

      {isOpen && (
        <div className="absolute mt-2 md:w-64 w-full text-primary bg-white dark:bg-white dark:text-primary shadow-lg rounded z-50">
          {loading ? (
            <div className="p-4 flex justify-center">
              <Spinner />
            </div>
          ) : (
            <>
              <Links href="/clientform" className="block px-4 py-2 text-left text-black hover:text-white hover:bg-primary" onClick={selectedLink}>
                Fee
              </Links>
              <Links href="#" className="block px-4 py-2 text-left text-black hover:text-white hover:bg-primary" onClick={selectedLink}>
                Form
              </Links>
            </>
          )}
        </div>
      )}
    </div>
  );
});

export default WhoWeServe;
