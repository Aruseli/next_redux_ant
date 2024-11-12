'use client'
import { ConfigProvider } from "antd";
import { StyleProvider } from '@ant-design/cssinjs'

function AntThemeCustomizationProvider({ children }: { children?: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        // cssVar: true,
        token: {
          colorPrimary: '#0069B4',
        },
        components: {
          Button: {
            defaultBg: '#F6F8FA',
            algorithm: true,
          },
        },
      }}
    >
      <StyleProvider hashPriority='high'>{children}</StyleProvider>
    </ConfigProvider>
  );
}

export default AntThemeCustomizationProvider;