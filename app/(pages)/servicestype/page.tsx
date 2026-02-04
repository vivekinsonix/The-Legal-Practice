'use client';

import { get_case_studies_paginated } from '@/app/services/homePageService';
import Link from 'next/link';
import { useEffect, useState } from 'react';
type CaseStudy = {
  documentId: string;
  main?: {
    title?: string;
    sub_title?: string;
    description?: string;
  };
  slug: string;
  view1: Array<{ image: { url: string } }>;
  cover_image?: string;
};
function ServiceCardSkeleton() {
  return (
    <div className="animate-pulse w-full h-[350px] relative overflow-hidden rounded-lg bg-gray-700">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-600" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 space-y-4">
        <div className="h-6 w-2/3 bg-gray-500 rounded" />
        <div className="h-4 w-3/4 bg-gray-500 rounded" />

        <div className="mt-3">
          <div className="h-10 w-44 bg-gray-500 rounded-full" />
        </div>
      </div>
    </div>
  );
}

let cachedCaseStudies: CaseStudy[] | null = null;

export default function ServicesType() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<CaseStudy[]>([]);
  useEffect(() => {
    if (cachedCaseStudies) {
      setData(cachedCaseStudies);
      return;
    }

    const fetchCaseStudies = async () => {
      try {
        setLoading(true);
        const response = await get_case_studies_paginated();
        const caseStudies = response || [];
        setData(caseStudies);
        cachedCaseStudies = caseStudies;
      } catch (error) {
        console.error('Error fetching case studies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  if (loading) {
    return (
      <div className="p-5">
        <div className="flex flex-col items-center text-center space-y-3 animate-pulse">
          <div className="h-6 w-50 bg-gray-500 rounded" />
          <div className="h-4 w-80 bg-gray-500 rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
          {Array.from({ length: 2 }).map((_, idx) => (
            <ServiceCardSkeleton key={idx} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <>
      {!loading && data?.length > 0 && (
        <section id="services" className="py-16 md:px-0 px-4 md:py-24 dark:bg-primary-900 bg-primary-900">
          <div className="container mx-auto text-center">
            <p className="text-sm font-medium text-white mb-2 uppercase tracking-wider"> What We Do</p>
            <h1 className="text-3xl md:text-5xl text-white dark:text-white font-extrabold leading-tight">Our Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-10">
              {data.map((item: CaseStudy | any, idx: number) => {
                const caseStudyUrl = `/services/${item.slug}`;
                const caseStudyTitle = item?.main?.title || 'Case Study';
                const caseStudyDescription = item?.main?.sub_title || 'Case Study';
                const caseStudyImage = item?.main?.cover_image?.url || '/tech.jpg';
                return (
                  <Link key={idx} href={caseStudyUrl} title={caseStudyTitle} className="group w-[100%] h-[350px] relative overflow-hidden shadow-lg cursor-pointer block">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-cover bg-center transition-transform blur-none group-hover:blur-none duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${caseStudyImage})` }}></div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-b from-primary/0 to-black  dark:to-black/90 group-hover:bg-black/20 transition-all duration-500" />

                    {/* Content */}
                    <div className="relative text-left  h-full flex flex-col items-center justify-end text-white group-hover:text-white  p-6 ">
                      <div></div>
                      <div>
                        <h1 className="font-bold  hover:text-white dark:text-white">{caseStudyTitle}</h1>
                        <p className="text-lg mb-3">{caseStudyDescription}</p>
                      </div>

                      <div className="w-full flex justify-start mb-3">
                        <span className="inline-block  bg-secondary rounded-full border-gray-500  px-5 py-2 text-white dark:text-white hover:border-primary-100 hover:shadow-[0_8px_30px_rgba(33,84,255,0.25),_0_0_20px_rgba(75,201,255,0.22)] transition-all duration-250 ease  translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-sm font-semibold uppercase text-pr">Explore Service →</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {data?.length > 2 && (
            <Link href="/services/list" className="mt-10 mx-auto text-center w-full inline-block text-white hover:underline">
              View All Services →
            </Link>
          )}
        </section>
      )}
    </>
  );
}
