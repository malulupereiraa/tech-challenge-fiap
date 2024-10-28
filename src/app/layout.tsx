import type { Metadata } from "next";
import { StyledRoot } from "./@theme/styledRoot";
import StyledComponentsRegistry from "./@core/lib/registry";

import { Container } from "react-bootstrap";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Bytebank",
  description: "Tech Challenge FIAP",
  icons: {
    icon: "icon.svg",
  },
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        <Container fluid>
          <AppRouterCacheProvider>
            <StyledComponentsRegistry>
              <StyledRoot>
                <Suspense fallback={<Loading />}>
                  {children}
                </Suspense>
              </StyledRoot>
            </StyledComponentsRegistry>
          </AppRouterCacheProvider>
        </Container>
      </body>
    </html>
  );
}
