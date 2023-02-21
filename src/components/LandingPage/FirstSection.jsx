import Image from "next/image";

export default function FirstSection() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-red-500 pt-20 pb-28 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            What 1ovmany Do?
          </h2>
          <p className="mt-6 text-lg tracking-tight text-red-100">
            1ovmany helps organisations to redefine a brighter future.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0">
          <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
            <div
              className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal"
              role="tablist"
              aria-orientation="vertical"
            >
              <div className="group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10">
                <h3>
                  <button
                    className="font-display text-lg [&amp;:not(:focus-visible)]:focus:outline-none text-red-500 lg:text-white"
                    id="headlessui-tabs-tab-:R2ba9m:"
                    role="tab"
                    type="button"
                    aria-selected="true"
                    tabindex="0"
                    data-headlessui-state="selected"
                    aria-controls="headlessui-tabs-panel-:Rda9m:"
                  >
                    <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl"></span>
                    Agile Transformation
                  </button>
                </h3>
                <p className="mt-2 hidden text-sm lg:block text-white">
                  Helping your organisation execute Agile Transformation, with
                  support from our highly experienced practitioners.
                </p>
              </div>
              <div className="group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 hover:bg-white/10 lg:hover:bg-white/5">
                <h3>
                  <button
                    className="font-display text-lg [&amp;:not(:focus-visible)]:focus:outline-none text-blue-100 hover:text-white lg:text-white"
                    id="headlessui-tabs-tab-:R2ja9m:"
                    role="tab"
                    type="button"
                    aria-selected="false"
                    tabindex="-1"
                    data-headlessui-state=""
                    aria-controls="headlessui-tabs-panel-:Rla9m:"
                  >
                    <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl"></span>
                    Business Transformation
                  </button>
                </h3>
                <p className="mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white">
                  Understand your business holistically through our systems
                  thinking and strategic alignment process.
                </p>
              </div>
              <div className="group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 hover:bg-white/10 lg:hover:bg-white/5">
                <h3>
                  <button
                    className="font-display text-lg [&amp;:not(:focus-visible)]:focus:outline-none text-blue-100 hover:text-white lg:text-white"
                    id="headlessui-tabs-tab-:R2ra9m:"
                    role="tab"
                    type="button"
                    aria-selected="false"
                    tabindex="-1"
                    data-headlessui-state=""
                    aria-controls="headlessui-tabs-panel-:Rta9m:"
                  >
                    <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl"></span>
                    Organisational Coaching
                  </button>
                </h3>
                <p className="mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white">
                  Professional coaching services, developing every employee the
                  way organisations traditionally developed their leadership.
                </p>
              </div>
              <div className="group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 hover:bg-white/10 lg:hover:bg-white/5">
                <h3>
                  <button
                    className="font-display text-lg [&amp;:not(:focus-visible)]:focus:outline-none text-blue-100 hover:text-white lg:text-white"
                    id="headlessui-tabs-tab-:R33a9m:"
                    role="tab"
                    type="button"
                    aria-selected="false"
                    tabindex="-1"
                    data-headlessui-state=""
                    aria-controls="headlessui-tabs-panel-:R15a9m:"
                  >
                    <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl"></span>
                    Objectives and Key Results
                  </button>
                </h3>
                <p className="mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white">
                  Get the benefits you deserve from using OKRs. Contact us to
                  learn more about how to do it right.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div
              id="headlessui-tabs-panel-:Rda9m:"
              role="tabpanel"
              tabindex="0"
              data-headlessui-state="selected"
              aria-labelledby="headlessui-tabs-tab-:R2ba9m:"
            >
              <div className="relative sm:px-6 lg:hidden">
                <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl"></div>
                <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                  Keep track of everyone's salaries and whether or not they've
                  been paid. Direct deposit not supported.
                </p>
              </div>
              <div className="mt-10 overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 ">
                <Image
                  alt=""
                  sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                  //   src="https://www.1ovmany.com/wp-content/uploads/2022/02/couple-having-a-laugh-with-a-consultant.jpg"
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                  width="2174"
                  height="1464"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
