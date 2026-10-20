import { Component, useEffect, type ReactNode } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";

import { LangProvider } from "@/lib/i18n";
import { Header, Footer } from "@/components/site";

import IndexPage from "@/routes/index";
import LeistungenPage from "@/routes/leistungen";
import ProjektePage from "@/routes/projekte";
import UeberUnsPage from "@/routes/ueber-uns";
import KarrierePage from "@/routes/karriere";
import KontaktPage from "@/routes/kontakt";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <LangProvider>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </LangProvider>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Seite nicht gefunden / Page not found
        </h2>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground"
          >
            Start
          </a>
        </div>
      </div>
    </div>
  );
}

class ErrorBoundary extends Component<{ children: ReactNode }, { error: unknown }> {
  override state = { error: null as unknown };

  static getDerivedStateFromError(error: unknown) {
    return { error };
  }

  override componentDidCatch(error: unknown) {
    console.error(error);
  }

  override render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4">
          <div className="max-w-md text-center">
            <h1 className="text-xl font-semibold text-foreground">This page didn&apos;t load</h1>
            <button
              onClick={() => this.setState({ error: null })}
              className="mt-6 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="leistungen" element={<LeistungenPage />} />
          <Route path="projekte" element={<ProjektePage />} />
          <Route path="ueber-uns" element={<UeberUnsPage />} />
          <Route path="karriere" element={<KarrierePage />} />
          <Route path="kontakt" element={<KontaktPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}
