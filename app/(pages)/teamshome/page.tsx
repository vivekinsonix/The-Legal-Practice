'use client';

import { getTeams } from '@/app/services/teamService';
import { TeamSection } from '@/app/utils/Interfaces';
import SeoHead from '@/app/components/seo/seoHead';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

/**
 * In-memory cache
 */
let cachedTeams: TeamSection | null = null;

const TextSkeleton = ({ width = 'w-full' }) => <div className={`h-4 ${width} rounded bg-gray-200 animate-pulse`} />;

const ImageSkeleton = () => <div className="aspect-square rounded-2xl bg-gray-200 animate-pulse" />;

export default function PartnerAdvisoryCouncil() {
  const [teams, setTeams] = useState<TeamSection | null>(cachedTeams);
  const [loading, setLoading] = useState(!cachedTeams);

  const advisors = useMemo(() => {
    if (!teams?.card) return [];

    return teams.card
      .filter((card: any) => card.image?.url)
      .map((card: any) => card.image.url)
      .slice(0, 6);
  }, [teams]);

  useEffect(() => {
    // ✅ Use cache if available
    if (cachedTeams) {
      setTeams(cachedTeams);
      setLoading(false);
      return;
    }

    const fetchTeams = async () => {
      try {
        const response = await getTeams();
        const data = response?.data || null;

        cachedTeams = data; // store in memory
        setTeams(data);
      } catch (error) {
        console.error('Failed to fetch teams:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  return (
    <>
      <SeoHead title="Our Team & Advisors - Dolcera" description="Meet Dolcera's expert team and advisory council. Leading professionals in patent analytics, intellectual property management, and technology innovation." keywords="Dolcera team, advisors, patent experts, leadership, IP professionals" url={`${typeof window !== 'undefined' ? window.location.origin : ''}/teamshome`} />
      <section id="teams" className="relative overflow-hidden">
        <div className="relative text-center mx-auto  py-24 px-4">
          {!loading && Array.isArray(teams?.card) && teams?.card?.length > 0 && (
            <div className="absolute inset-0 -z-20">
              <Image src="/bg-teams.png" alt="Background" fill className="object-cover dark:brightness-110 dark:contrast-110" priority />
            </div>
          )}

          <div
            className="
    absolute inset-0 -z-10
    bg-gradient-to-r
    from-white/90 via-white/75 to-white/60
    dark:from-black/70 dark:via-black/50 dark:to-black/30
  "
          />

          {loading ? (
            <>
              <div className="mx-auto mb-2 w-40 h-4 bg-gray-200 rounded animate-pulse" />
              <div className="mx-auto mb-16 w-96 h-10 bg-gray-200 rounded animate-pulse" />
            </>
          ) : teams ? (
            <>
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-400">{teams.description}</p>
              <h1 className="mb-16 text-3xl font-extrabold md:text-5xl">{teams.label}</h1>
            </>
          ) : null}
          <div className="container mx-auto">
            <div className="grid grid-cols-1 items-center text-left gap-20 lg:grid-cols-2 ">
              {/* LEFT CONTENT */}
              <div>
                {loading ? (
                  <>
                    <div className="h-8 w-72 bg-gray-200 rounded animate-pulse" />
                    <div className="mt-6 space-y-3">
                      <TextSkeleton />
                      <TextSkeleton width="w-5/6" />
                      <TextSkeleton width="w-2/3" />
                    </div>
                    <div className="mt-8 w-40 h-5 bg-gray-200 rounded animate-pulse" />
                  </>
                ) : teams ? (
                  <>
                    <h2 className="md:text-2xl text-xl font-semibold tracking-tight">{teams.h1}</h2>
                    <p className="mt-6 max-w-xl text-md leading-relaxed">{teams.p1}</p>

                    {teams.link && (
                      <Link href={teams.link} className="mt-8 inline-flex items-center gap-2 text-base font-medium text-primary hover:text-primary-900">
                        Meet the Advisors <span className="text-xl">›</span>
                      </Link>
                    )}
                  </>
                ) : null}
              </div>

              {/* RIGHT GRID */}
              <div className="grid grid-cols-3 gap-6">
                {loading
                  ? Array.from({ length: 6 }).map((_, i) => <ImageSkeleton key={i} />)
                  : advisors.map((src, i) => (
                      <div
                        key={i}
                        className="relative aspect-square overflow-hidden rounded-2xl
                    bg-linear-to-br from-indigo-100 via-white to-pink-100"
                      >
                        <Image src={src} alt="Advisor" fill className="object-cover" />
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
