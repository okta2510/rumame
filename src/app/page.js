import Image from "next/image";

import { redirect } from 'next/navigation'
export default function Home() {
  redirect('/search')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <img src="/coming-soon.jpg" alt="My Image" width={500} />
    </main>
  );
}
