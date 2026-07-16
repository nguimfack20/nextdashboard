import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
     
      <p>DASBOARD Welcome</p>



        <Link
            href="/dashboard/customers"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>CLIENTS</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>

    

      
        <Link
            href="/dashboard/invoices"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>FACTURES</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
     
    </main>
  );
}
