import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { AUTH_COOKIE_NAME, getSessionSecret, getSiteLogin, getSitePassword } from "@/lib/auth";

type LoginPageProps = {
  searchParams: Promise<{
    next?: string;
    error?: string;
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;

  async function login(formData: FormData) {
    "use server";

    const loginValue = String(formData.get("login") || "");
    const passwordValue = String(formData.get("password") || "");
    const nextPath = String(formData.get("next") || "/");

    if (loginValue !== getSiteLogin() || passwordValue !== getSitePassword()) {
      redirect(`/login?error=1${nextPath && nextPath !== "/" ? `&next=${encodeURIComponent(nextPath)}` : ""}`);
    }

    const cookieStore = await cookies();
    cookieStore.set(AUTH_COOKIE_NAME, getSessionSecret(), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    redirect(nextPath || "/");
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 gap-6 px-6 py-6 xl:grid-cols-[320px_1fr]">
        <aside className="flex h-[calc(100vh-3rem)] flex-col rounded-[28px] bg-slate-950 p-8 text-white shadow-sidebar">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">MindOS</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight">Thinking OS</h1>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Личная система, которая помогает думать глубже, замечать bottleneck и превращать
              рефлексию в рост.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Приватный доступ</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Внутрь продукта можно попасть только после входа по логину и паролю.
            </p>
          </div>

          <div className="mt-auto rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Фокус системы</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Контент, решения, weekly review и карта роста собираются в одну личную operating system.
            </p>
          </div>
        </aside>

        <section className="flex items-center justify-center rounded-[32px] border border-slate-200 bg-white p-8 shadow-panel xl:p-12">
          <div className="w-full max-w-[560px]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Добро пожаловать</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
                Вход в приватную зону
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Введи логин и пароль, чтобы открыть Thinking OS и продолжить работу с системой мышления.
              </p>
            </div>

            <form action={login} className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <input name="next" type="hidden" value={params.next || "/"} />

              <div className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-slate-900" htmlFor="login">
                    Логин
                  </label>
                  <input
                    autoComplete="username"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400"
                    id="login"
                    name="login"
                    placeholder="Введите логин"
                    type="text"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-900" htmlFor="password">
                    Пароль
                  </label>
                  <input
                    autoComplete="current-password"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400"
                    id="password"
                    name="password"
                    placeholder="Введите пароль"
                    type="password"
                  />
                </div>

                {params.error ? (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    Неверный логин или пароль. Попробуй ещё раз.
                  </div>
                ) : null}

                <button
                  className="w-full rounded-2xl border border-slate-950 bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                  type="submit"
                >
                  Войти в Thinking OS
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
