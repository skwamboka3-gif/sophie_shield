'use client';

import PackageDetailPage from '../../pages/PackageDetailPage';

export default function Page({ params }: { params: { packageId: string } }) {
  return <PackageDetailPage packageId={params.packageId} />;
}
