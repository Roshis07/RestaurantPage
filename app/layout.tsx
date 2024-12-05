"use client";

import "./globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body
        style={{
          margin: 0,
          padding: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
