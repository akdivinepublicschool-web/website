import { ArrowUpRight, Quote } from 'lucide-react'
import Container from '../layout/Container'

export default function DirectorMessage() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--color-bg-soft)] py-14 sm:py-16 lg:py-20"
      aria-labelledby="director-message-title"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border-[28px] border-[var(--color-accent)]/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 -left-20 size-64 rounded-full bg-[var(--color-primary)]/[0.04]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-7 text-center">
            <span className="section-eyebrow">A Message from Our Director</span>
            <h2 id="director-message-title" className="section-title mt-2">
              Words That Guide Us
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[var(--color-accent)]" />
          </div>

          <article
            data-reveal="card"
            className="relative overflow-hidden rounded-[26px] border border-[var(--color-primary)]/10 bg-white px-6 py-8 shadow-[0_18px_55px_rgba(6,46,84,0.08)] sm:px-10 sm:py-10 lg:px-14 lg:py-12"
          >
            <Quote
              size={54}
              strokeWidth={1.4}
              className="absolute right-6 top-5 text-[var(--color-accent)]/25 sm:right-10 sm:top-8"
              aria-hidden="true"
            />

            <div className="relative max-w-[820px]">
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Our Commitment to Every Child
              </p>

              <div className="space-y-4 text-[14px] leading-[1.9] text-slate-600 sm:text-[15px]">
                <p>
                  At A.K. Divine Public School, we believe that education is much more than academic
                  achievement. It is about discovering each child’s potential, nurturing curiosity,
                  building confidence and shaping strong values that last a lifetime.
                </p>
                <p>
                  Our endeavour is to create a learning environment where every student feels
                  encouraged to ask questions, explore new ideas and strive for excellence.
                  Together with our dedicated teachers and supportive parents, we aim to prepare
                  our children not only for examinations, but also for the opportunities and
                  responsibilities of tomorrow.
                </p>
                <p className="font-semibold text-[var(--color-primary)]">
                  Let us work together to give every child the knowledge, character and confidence
                  to build a bright future.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="grid size-[58px] shrink-0 place-items-center rounded-full border-2 border-[var(--color-accent)]/70 bg-[var(--color-primary)] text-lg font-extrabold tracking-wide text-white shadow-[0_5px_16px_rgba(6,46,84,0.16)]">
                  VT
                </div>
                <div>
                  <p className="m-0 text-lg font-extrabold leading-tight text-[var(--color-primary)]">
                    Vikash Tiwari
                  </p>
                  <p className="m-0 mt-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Director, A.K. Divine Public School
                  </p>
                </div>
                <div className="ml-auto hidden items-center gap-2 text-xs font-semibold text-[var(--color-primary)]/65 sm:flex">
                  शिक्षा जो बनाये उज्जवल भविष्य
                  <ArrowUpRight size={15} className="text-[var(--color-accent)]" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  )
}
