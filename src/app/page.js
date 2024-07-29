import Image from "next/image";
import Layout from '@layout/Base';

import { redirect } from 'next/navigation'
export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto">
        <img src="/coming-soon.jpg" alt="My Image" width={500} />
      </div>
    </Layout>
  );
}
