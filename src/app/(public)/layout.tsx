'use client'

import { Page, Content } from '@/styles/global';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Page>
      <Content>{children}</Content>
    </Page>
  );
}
