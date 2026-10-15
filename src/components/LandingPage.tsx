import Image from "next/image";
import Link from "next/link";
import { audiences, PRODUCT_URL, type Audience } from "@/lib/landing-content";

const primary = "inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-700 px-6 py-3 text-lg font-semibold text-white hover:bg-blue-800";
const secondary = "inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-lg font-semibold text-slate-800 hover:bg-slate-50";

export default function LandingPage({ audience }: { audience: Audience }) {
  const data = audiences[audience];
  const actionHref = audience === "paciente" ? `${PRODUCT_URL}/signup` : `https://wa.me/17879444563?text=${encodeURIComponent(data.message)}`;
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:block focus:p-4">Saltar al contenido</a>
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href={data.href} className="flex min-h-12 items-center gap-2 font-semibold text-blue-700">
            <Image src="/enlace-salud-icon-transparent.png" alt="" width={40} height={40} priority />
            <span className="text-lg sm:text-xl">Enlace Salud</span>
          </Link>
          <a className="inline-flex min-h-12 items-center rounded-xl border border-blue-700 px-4 font-semibold text-blue-700 hover:bg-blue-50" href={`${PRODUCT_URL}/`}>Entrar</a>
        </div>
      </header>
      <main id="contenido">
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            {audience === "clinicas330" && <Image src="/asppr-logo.png" alt="Asociación de Salud Primaria de Puerto Rico" width={150} height={50} className="mx-auto mb-6 h-auto w-32 sm:w-36" />}
            <p className="text-sm font-bold tracking-widest text-blue-700">{data.eyebrow}</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">{data.title}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">{data.intro}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a className={primary} href={actionHref}>{data.action}</a>
              <a className={secondary} href="#how">Ver cómo funciona</a>
            </div>
            {audience !== "paciente" && <p className="mt-4 text-base text-slate-600">La solicitud de demostración se abre en WhatsApp.</p>}
            <ul className="mt-8 flex flex-wrap justify-center gap-3 text-base text-slate-700">
              {["Acceso por autorización", "Ayuda para comenzar", "Celular o computadora"].map(text => <li key={text} className="rounded-full border border-slate-200 bg-white px-4 py-2">{text}</li>)}
            </ul>
          </div>
        </section>
        <section id="how" aria-labelledby="how-title" className="scroll-mt-6 bg-slate-50 px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-sm font-bold tracking-widest text-blue-700">CÓMO FUNCIONA</p>
            <h2 id="how-title" className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold leading-tight sm:text-4xl">{data.how}</h2>
            <ol className="mt-10 grid gap-5 md:grid-cols-3">
              {data.steps.map(([title, text], index) => <li key={title} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><span aria-hidden="true" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-800">{index + 1}</span><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 text-lg leading-relaxed text-slate-600">{text}</p></li>)}
            </ol>
          </div>
        </section>
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold sm:text-4xl">{data.featureTitle}</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">{data.features.map(([title, text]) => <article key={title} className="rounded-2xl border border-slate-200 p-6 sm:p-8"><h3 className="text-xl font-semibold text-blue-800">{title}</h3><p className="mt-3 text-lg leading-relaxed text-slate-600">{text}</p></article>)}</div>
            <aside className="mt-8 rounded-2xl bg-blue-50 p-6 sm:p-8"><h3 className="text-2xl font-semibold">{data.supportTitle}</h3><p className="mt-3 max-w-4xl text-lg leading-relaxed text-slate-700">{data.support}</p></aside>
          </div>
        </section>
        <section className="bg-slate-50 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold sm:text-4xl">Compartir información requiere control</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                ["Permisos del paciente", "El acceso del doctor depende de la autorización del paciente y de las condiciones de acceso vigentes."],
                ["Representantes validados", "El administrador revisa y aprueba la relación de cada padre o tutor con el paciente."],
                ["Actividad registrada", "Las acciones de acceso y gestión cuentan con registros para su revisión administrativa."],
              ].map(([title, text]) => <article key={title}><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 text-lg leading-relaxed text-slate-600">{text}</p></article>)}
            </div>
          </div>
        </section>
        <section className="bg-blue-800 px-4 py-16 text-center text-white sm:px-6">
          <div className="mx-auto max-w-3xl"><h2 className="text-3xl font-bold sm:text-4xl">{data.closing}</h2><a className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 text-lg font-semibold text-blue-800 hover:bg-blue-50" href={actionHref}>{data.action}</a><p className="mt-5 text-base text-blue-100">¿Ya tienes cuenta? <a className="inline-flex min-h-12 items-center font-semibold underline underline-offset-4" href={`${PRODUCT_URL}/`}>Entra aquí</a></p></div>
        </section>
      </main>
      <footer className="px-4 py-8 text-center text-base text-slate-600"><p>Enlace Salud · MAGALVI</p><p className="mx-auto mt-2 max-w-2xl">Esta plataforma ayuda a organizar y compartir documentos. No sustituye la evaluación de un profesional de salud.</p></footer>
    </>
  );
}
