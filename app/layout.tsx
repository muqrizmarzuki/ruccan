import './globals.css'
import type { Metadata } from 'next'

import { ConfigProvider } from 'antd'
import type { ThemeConfig } from 'antd';

import QueryProvider from '@/components/general/QueryProvider';

const theme: ThemeConfig = {
  // your theme config
};

export const metadata: Metadata = {
  title: 'Mobile App',
  description: 'Responsive app layout with sidebar',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white flex justify-center relative">
        <QueryProvider> {/* ✅ now inside client wrapper */}
          <ConfigProvider theme={theme}>
            {children}
          </ConfigProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
