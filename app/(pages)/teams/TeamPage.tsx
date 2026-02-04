'use client';

import { getTeams } from '@/app/services/teamService';
import { TeamSection } from '@/app/utils/Interfaces';
import SeoHead from '@/app/components/seo/seoHead';
import { Avatar, Card } from 'flowbite-react';
import { LinkedinIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

/**
 * In-memory cache (lives as long as this JS bundle is alive)
 */
let cachedTeams: TeamSection | null = null;

function TeamCardSkeleton() {
  return (
    <div className="p-8 rounded-2xl bg-primary-50 shadow-lg flex flex-col items-center animate-pulse">
      <div className="w-24 h-24 rounded-full bg-gray-300 mb-4" />
      <div className="w-10 h-10 bg-gray-300 rounded-sm mb-4" />
      <div className="h-5 w-40 bg-gray-300 rounded mb-3" />
      <div className="h-4 w-48 bg-gray-200 rounded mb-4" />
      <div className="h-4 w-24 bg-gray-300 rounded" />
    </div>
  );
}

export default function TeamPage() {
  const [teams, setTeams] = useState<TeamSection | null>(cachedTeams);
  const [loading, setLoading] = useState(!cachedTeams);

  useEffect(() => {
    // If cache exists, skip API call
    if (cachedTeams) {
      setTeams(cachedTeams);
      setLoading(false);
      return;
    }

    const fetchTeams = async () => {
      try {
        const response = await getTeams();
        const data = response?.data || null;

        cachedTeams = data; // ✅ store in memory
        setTeams(data);
      } catch (error) {
        console.error('Failed to fetch teams:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (!loading && teams?.card?.length === 0) {
    return <p className="text-center py-20">No team members found.</p>;
  }

  return (
    <>
      <SeoHead title="Meet Our Team - Dolcera" description="Meet the talented professionals at Dolcera. Our team of patent experts and IP specialists are dedicated to delivering innovative solutions." keywords="Dolcera team, team members, patent experts, IP professionals, leadership" url={`${typeof window !== 'undefined' ? window.location.origin : ''}/teams`} />
      <section className="min-h-screen w-full dark:bg-foreground">
        <main className="container mx-auto max-w-7xl px-4 py-10">
          <header className="my-10 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl mt-5">Meet Our Team</h1>
            <p className="mt-2 text-gray-400">The people who make everything possible</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 md:mt-16">
            {loading
              ? Array.from({ length: 9 }).map((_, idx) => <TeamCardSkeleton key={idx} />)
              : teams?.card?.map((member, idx) => (
                  <Card key={idx} className="p-8 rounded-2xl bg-primary-50 shadow-lg text-center flex flex-col items-center transition-transform duration-300 hover:scale-[1.03]">
                    <Avatar img={member?.image?.url} rounded size="xl" className="mb-4" />

                    {member?.linkdin_link && (
                      <Link href={member.linkdin_link} className="flex justify-center">
                        <LinkedinIcon className="hover:text-white hover:bg-primary rounded-sm cursor-pointer w-10 h-10 p-2" />
                      </Link>
                    )}

                    <h2 className="text-xl md:text-2xl font-bold mb-3 leading-snug">{member?.name}</h2>

                    <p className="text-gray-600 mb-4 leading-relaxed">{member?.designation}</p>

                    <Link href="#" className="text-blue-500 hover:text-blue-700 hover:underline">
                      Learn More →
                    </Link>
                  </Card>
                ))}
          </div>
        </main>
      </section>
    </>
  );
}
