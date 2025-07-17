import './globals.css'
import type { Metadata } from 'next'

import { ConfigProvider } from 'antd'
import type { ThemeConfig } from 'antd';

import QueryProvider from '@/components/general/QueryProvider';

export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#602FD0',
    colorPrimary2: '#9E7DEA',
    colorPrimary3: '#AD3B91',
    colorSecondary: '#B3B3B3',
    colorSuccess: '#35B37E',
    colorWarning: '#FFAB00',
    colorError: '#DB4336',
    colorInfo: '#0165FF',
  } as any,
};

export const metadata: Metadata = {
  title: 'Mobile App',
  description: 'Responsive app layout with sidebar',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white flex justify-center relative">
        <QueryProvider>
          <ConfigProvider theme={theme}>
            {children}
          </ConfigProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
