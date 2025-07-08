'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from '@/components/MainLayout';

export function Providers({ children }) {

    const [isMounted, setIsMounted] = useState(false);

    const { i18n } = useTranslation()
    const queryClient = new QueryClient()

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange={true}
        >
            <QueryClientProvider client={queryClient}>
                <div className={`${i18n.language === 'fa' ? `rtl yekan_font` : ''}`}>
                    <MainLayout>
                        {children}
                    </MainLayout>
                </div>
            </QueryClientProvider>
        </ThemeProvider>
    );
}