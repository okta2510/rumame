// import Image from "next/image";
import Layout from '@layout/Base';
import ReelsList from '@components/ReelsList'

import { redirect } from 'next/navigation'
export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto p-4">

        <ReelsList/>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-2">Column 1</h2>
            <p class="text-gray-700">This is some content for column 1.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-2">Column 2</h2>
            <p class="text-gray-700">This is some content for column 2.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-2">Column 3</h2>
            <p class="text-gray-700">This is some content for column 3.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-2">Column 4</h2>
            <p class="text-gray-700">This is some content for column 4.</p>
          </div>

        </div>
        
        <div class="flex flex-wrap">

          <div class="w-full md:w-2/5 p-2">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h2 class="text-lg font-semibold mb-2">Column 1</h2>
              <p class="text-gray-700">This is some content for column 1. It takes 40% of the width on medium screens and above.</p>
            </div>
          </div>

          <div class="w-full md:w-3/5 p-2">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h2 class="text-lg font-semibold mb-2">Column 2</h2>
              <p class="text-gray-700">This is some content for column 2. It takes 60% of the width on medium screens and above.</p>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
