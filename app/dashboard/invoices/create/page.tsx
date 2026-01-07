import Form from '@/app/_utils/ui/invoices/create-form';
import Breadcrumbs from '@/app/_utils/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/_utils/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Invoices',
};

export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}