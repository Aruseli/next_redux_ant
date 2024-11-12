'use client';
import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { AntdRegistry } from '@ant-design/nextjs-registry';

import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import { NavCart, SubmenuCart } from "./components/NavCart";
import store from "@/lib/store";
import { lato } from "./fonts";
import AntThemeCustomizationProvider from "@/lib/theme-provider";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <AntThemeCustomizationProvider>
            <AntdRegistry>
              <>
                <NavCart />
                <SubmenuCart />
                <main style={{padding: '3.75rem 5rem'}} className={lato.className}>
                  {children}
                </main>
              </>
            </AntdRegistry>
          </AntThemeCustomizationProvider>
        </body>
      </html>
    </Provider>
  );
}
