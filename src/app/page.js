import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <img src="/coming-soon.jpg" alt="My Image" width={500} />
    </main>
  );
}
