import { technologiesContent } from '../../data/content'

function TechList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className={
        hidden
          ? 'flex shrink-0 gap-3 pr-3 motion-reduce:hidden'
          : 'flex shrink-0 gap-3 pr-3 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:pr-0'
      }
    >
      {technologiesContent.items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line bg-surface/60 px-5 py-2.5 text-base font-semibold whitespace-nowrap text-ink-soft"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export function Technologies() {
  return (
    <section aria-labelledby="technologies-title" className="border-y border-line py-14 sm:py-20">
      <div className="container-page">
        <h2 id="technologies-title" className="eyebrow text-center">
          {technologiesContent.title}
        </h2>
      </div>
      <div className="group mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] motion-reduce:[mask-image:none]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:px-4">
          <TechList />
          <TechList hidden />
        </div>
      </div>
    </section>
  )
}
