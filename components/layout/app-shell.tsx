import { Sidebar } from "@/components/layout/sidebar";
import { PageHeader } from "@/components/layout/page-header";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 gap-6 px-6 py-6 xl:grid-cols-[288px_1fr]">
        <Sidebar />
        <div className="flex min-h-[calc(100vh-3rem)] flex-col rounded-[32px] border border-slate-200 bg-white p-8 shadow-panel xl:p-10">
          <PageHeader />
          <main className="mt-10 flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
