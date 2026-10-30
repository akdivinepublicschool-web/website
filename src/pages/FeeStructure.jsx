import { ArrowRight, BookOpenCheck, CheckCircle2, WalletCards } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../components/layout/Container'

const feeTiers = [
  { classes: ['Nursery', 'LKG', 'UKG'], amount: 400, label: 'Pre-Primary', description: 'A joyful start to the learning journey.', featured: false },
  { classes: ['Class 1', 'Class 2', 'Class 3'], amount: 500, label: 'Primary', description: 'Building strong foundations for every learner.', featured: false },
  { classes: ['Class 4', 'Class 5', 'Class 6'], amount: 600, label: 'Upper Primary', description: 'Growing knowledge, confidence and curiosity.', featured: true },
  { classes: ['Class 7', 'Class 8'], amount: 800, label: 'Middle School', description: 'Preparing students for the next academic step.', featured: false },
]

export default function FeeStructure() {
  return (
    <main className="bg-white">
      <section className="relative isolate overflow-hidden bg-[var(--color-primary)] py-16 text-white sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full bg-[var(--color-accent)]/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-blue-400/15 blur-3xl" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/85">
              <WalletCards size={15} /> Transparent & Simple
            </span>
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">School Fee Structure</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Quality education with a clear monthly fee structure. Find the applicable monthly tuition fee for your child's class below.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-bg-soft)] py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="mx-auto mb-9 max-w-2xl text-center" data-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">Fee details by class</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[var(--color-primary)] sm:text-3xl">Monthly Tuition Fees</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Choose your child's class group to view the monthly fee.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {feeTiers.map((tier, index) => (
              <article
                key={tier.label}
                data-reveal
                style={{ '--reveal-delay': `${index * 70}ms` }}
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,42,0.11)] ${tier.featured ? 'border-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/30' : 'border-slate-200'}`}
              >
                {tier.featured && (
                  <span className="absolute right-4 top-4 rounded-full bg-[var(--color-accent)] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                    Popular
                  </span>
                )}
                <div className="grid size-12 place-items-center rounded-xl bg-[var(--color-bg-soft)] text-[var(--color-primary)]">
                  <BookOpenCheck size={23} strokeWidth={1.9} />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{tier.label}</p>
                <div className="mt-2 flex items-end gap-1.5">
                  <span className="text-4xl font-extrabold tracking-tight text-[var(--color-primary)]">₹{tier.amount}</span>
                  <span className="pb-1 text-sm font-medium text-slate-500">/ month</span>
                </div>
                <p className="mt-3 min-h-10 text-sm leading-5 text-slate-600">{tier.description}</p>
                <div className="my-5 h-px bg-slate-100" />
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Applicable classes</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {tier.classes.map((className) => (
                    <li key={className} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={13} className="text-[var(--color-accent)]" />
                      {className}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-white p-5 sm:p-6" data-reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <div className="grid size-10 shrink-0 place-items-center rounded-full bg-blue-50 text-[var(--color-primary)]">
                <WalletCards size={19} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[var(--color-primary)]">Fee information</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  The amounts displayed above are monthly fees, as applicable to each class group. For admission-related questions or confirmation of fee details, please contact the school office.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[var(--color-primary)] px-6 py-7 text-center text-white sm:flex-row sm:px-8 sm:text-left" data-reveal>
            <div>
              <h3 className="text-lg font-bold text-white sm:text-xl">Have questions about admission?</h3>
              <p className="mt-1 text-sm text-white/70">Our team is happy to guide you through the admission process.</p>
            </div>
            <Link to="/admissions" className="btn-accent inline-flex min-h-11 shrink-0 items-center gap-2 px-5">
              Admission Enquiry <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  )
}
