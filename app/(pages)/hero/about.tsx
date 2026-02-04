'use client';

import Image from 'next/image';
import { memo } from 'react';
import SeoHead from '../../components/seo/seoHead';
import { RichTextViewer } from '@/app/components/richtext/RichTextViewer';

interface Props {
  ourLegacy?: any;
  coreDifferentiars: any;
  loading: boolean;
}

const Skeleton = memo(() => (
  <section className="dark:bg-primary py-16 md:py-24 animate-pulse" aria-busy="true" aria-label="Loading About Section">
    <div className="container mx-auto px-4 text-center">
      {/* Section Header */}
      <div className="mb-12">
        <div className="mx-auto mb-3 h-4 w-32 bg-gray-700 rounded"></div>
        <div className="mx-auto h-8 w-64 bg-gray-700 rounded"></div>
      </div>

      {/* Main Grid */}
      <div className="mt-12 grid grid-cols-1 items-center gap-12 md:mt-16 md:grid-cols-2">
        <div className="order-2 max-w-xl space-y-6 md:order-1">
          <div className="h-4 w-full bg-gray-700 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-700 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-700 rounded"></div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="h-72 w-full max-w-md bg-gray-700 rounded-xl"></div>
        </div>
      </div>

      {/* Differentiators */}
      <div className="mt-16 md:mt-24">
        <div className="mx-auto mb-8 h-6 w-60 bg-gray-700 rounded"></div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <article key={i} className="rounded-xl bg-gray-800 p-6 shadow-lg" aria-label="Metric placeholder">
              <div className="h-6 w-32 mx-auto bg-gray-600 rounded mb-3"></div>
              <div className="h-4 w-20 mx-auto bg-gray-600 rounded"></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
));
Skeleton.displayName = 'Skeleton';

export default function About({ ourLegacy, coreDifferentiars, loading }: Props) {
  if (loading) return <Skeleton />;

  const teamImageUrl = ourLegacy?.our_team?.url || '/team.svg';
  const teamAltText = ourLegacy?.our_team?.alternativeText || 'Dolcera Team';

  return (
    <>
      <SeoHead title={ourLegacy?.heading} description={ourLegacy?.paragraph_1} image={ourLegacy?.og_image?.url || undefined} url={ourLegacy?.url || undefined} />
      <main id="about" className=" py-16 dark:bg-foreground  md:pt-38 md:pb-24" aria-labelledby="about-heading">
        <div className="container mx-auto px-4 text-center">
          <header className="mb-12">
            <p className="mb-2 text-sm font-medium tracking-wider  text-gray-400 uppercase" aria-label="Section name">
              {ourLegacy?.section_name}
            </p>

            <h1 id="about-heading" className="text-3xl leading-tight font-extrabold md:text-5xl" aria-describedby="about-description">
              {ourLegacy?.heading}
            </h1>
          </header>

          <div className="mt-12 grid grid-cols-1 items-center gap-12 md:mt-16 md:grid-cols-2">
            <article className="order-2  space-y-6 text-left md:order-1 prose dark:prose-invert" id="about-description">
              <RichTextViewer content={ourLegacy?.paragraph_1} />
            </article>

            <figure className="order-1 flex justify-center md:order-2">
              <Image src={teamImageUrl} alt={teamAltText} width={600} height={400} className="w-full h-auto rounded-xl object-cover" priority={false} draggable={false} onDragStart={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} />
            </figure>
          </div>
        </div>
      </main>
    </>
  );
}
