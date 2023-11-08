import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span>
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="w-4 ml-1 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="w-4 ml-1 text-white" />
        </>
      ) : null}
    </span>
  );
}
