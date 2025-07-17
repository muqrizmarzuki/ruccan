// hooks/useThemeToken.ts
'use client';
import { theme as antdTheme } from 'antd';

export const useThemeToken = () => {
    const { token } = antdTheme.useToken();
    return token;
};
