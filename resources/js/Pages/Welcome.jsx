import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex gap-3 justify-between px-7 py-2.5 w-full text-lg bg-white text-slate-400 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/07eea6d2376f996466e0c28536adea298711d3d531b33509389458cb766da492?apiKey=90a9c03b416f455b930ae3c8e113d732&"
          className="shrink-0 my-auto max-w-full aspect-[2.44] w-[146px]"
        />
        <div className="flex gap-5 justify-between items-center p-5 max-md:flex-wrap max-md:pl-5">
          <div className="self-stretch my-auto text-center text-indigo-500">
            Flights
          </div>
          <div className="self-stretch my-auto text-center">Hotels</div>
          <div className="self-stretch my-auto text-center">Packages</div>
          <div className="self-stretch my-auto text-center">Sign in</div>
          <div className="justify-center self-stretch px-6 py-3.5 bg-indigo-500 rounded text-neutral-50 max-md:px-5">
            Sign up
          </div>
        </div>
      </div>
      <div className="self-center mt-16 w-full max-w-[1390px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl font-bold text-indigo-500 max-md:max-w-full">
                Passenger information
              </div>
              <div className="mt-7 text-xl text-slate-400 max-md:max-w-full">
                Enter the required information for each traveler and be sure
                that it exactly matches the government-issued ID presented at
                the airport.
              </div>
              <div className="mt-12 text-xl font-semibold text-slate-500 max-md:mt-10 max-md:max-w-full">
                Passenger 1 (Adult)
              </div>
              <div className="flex gap-5 mt-8 text-xl whitespace-nowrap max-md:flex-wrap max-md:pr-5">
                <div className="justify-center px-3.5 py-2.5 text-black bg-white rounded border border-solid border-slate-400">
                  Sophia
                </div>
                <div className="justify-center px-3.5 py-2.5 bg-white rounded border border-solid border-slate-400 text-slate-400">
                  Middle
                </div>
                <div className="justify-center px-3.5 py-2.5 text-gray-700 bg-white rounded border border-solid border-slate-400">
                  Knowles
                </div>
              </div>
              <div className="flex gap-5 justify-between self-start mt-7 whitespace-nowrap max-md:flex-wrap">
                <div className="justify-center self-start px-3.5 py-2.5 text-xl bg-white rounded border border-solid border-slate-400 text-slate-400">
                  Suffix
                </div>
                <div className="flex flex-col py-px">
                  <div className="justify-center px-3.5 py-2.5 text-xl text-gray-700 bg-white rounded border border-solid border-slate-400">
                    11/11/1989
                  </div>
                  <div className="mt-2 text-sm text-slate-400">MM/DD/YY</div>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-7 text-xl text-gray-700 whitespace-nowrap max-md:flex-wrap">
                <div className="justify-center px-3.5 py-2.5 bg-white rounded border border-solid border-slate-400">
                  sophiaknowles89@tripma.com
                </div>
                <div className="justify-center px-3.5 py-2.5 bg-white rounded border border-solid border-slate-400">
                  123-456-7890
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-7 text-xl max-md:flex-wrap">
                <div className="justify-center px-3.5 py-2.5 bg-white rounded border border-solid border-slate-400 text-slate-400">
                  Redress number
                </div>
                <div className="justify-center px-3.5 py-2.5 text-gray-700 whitespace-nowrap bg-white rounded border border-solid border-slate-400">
                  123456789
                </div>
              </div>
              <div className="mt-16 text-xl font-semibold text-slate-500 max-md:mt-10 max-md:max-w-full">
                Emergency contact information
              </div>
              <div className="flex gap-2.5 justify-between self-start py-1 mt-8 text-lg text-slate-500">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b0c713e55920615b02d3ce04b4d2980935925fadfe5b3f5e573f61d6758d150?apiKey=90a9c03b416f455b930ae3c8e113d732&"
                  className="shrink-0 my-auto aspect-square w-[17px]"
                />
                <div>Same as Passenger 1</div>
              </div>
              <div className="flex gap-5 justify-between mt-7 text-xl text-gray-700 whitespace-nowrap max-md:flex-wrap">
                <div className="justify-center px-3.5 py-2.5 bg-white rounded border border-solid border-slate-400">
                  Sophia
                </div>
                <div className="justify-center px-3.5 py-2.5 bg-white rounded border border-solid border-slate-400">
                  Knowles
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-7 text-xl text-gray-700 max-md:flex-wrap">
                <div className="justify-center px-3.5 py-2.5 underline bg-white rounded border border-solid border-slate-400">
                  Email address*
                </div>
                <div className="justify-center px-3.5 py-2.5 whitespace-nowrap bg-white rounded border border-solid border-slate-400">
                  123-456-7890
                </div>
              </div>
              <div className="mt-14 text-xl font-semibold text-slate-500 max-md:mt-10 max-md:max-w-full">
                Bag information
              </div>
              <div className="mt-6 text-xl text-indigo-500 max-md:max-w-full">
                Each passenger is allowed one free carry-on bag and one personal
                item. First checked bag for each passenger is also free. Second
                bag check fees are waived for loyalty program members. See the
                <span className="text-indigo-500"> full bag policy</span>.
              </div>
              <div className="flex gap-5 mt-12 max-w-full text-xl w-[515px] max-md:flex-wrap max-md:mt-10">
                <div className="flex flex-col flex-1 self-start font-semibold">
                  <div className="text-slate-400">Passenger 1</div>
                  <div className="mt-7 text-slate-500">Sophia Knowles</div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="font-semibold text-slate-400">
                    Checked bags
                  </div>
                  <div className="flex gap-5 justify-between mt-3.5 text-center whitespace-nowrap text-slate-500">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff671e54293b20d3e47603af1c11c74d6762ea4aa3f9a34675357ca2f05f13ab?apiKey=90a9c03b416f455b930ae3c8e113d732&"
                      className="shrink-0 w-9 aspect-square"
                    />
                    <div className="my-auto">1</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/130109fe0a0e92dfcb166b788e6efeda108a699ac8743b32a080aa3fd3e7d37a?apiKey=90a9c03b416f455b930ae3c8e113d732&"
                      className="shrink-0 w-9 aspect-square"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-between self-start mt-20 text-lg max-md:mt-10">
                <div className="justify-center px-6 py-3.5 text-indigo-500 rounded border border-indigo-500 border-solid max-md:px-5">
                  Save and close
                </div>
                <div className="justify-center px-6 py-3.5 bg-indigo-500 rounded text-neutral-50 max-md:px-5">
                  Select seats
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-48 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col px-4 py-5 bg-white rounded-xl border border-violet-100 border-solid max-md:max-w-full">
                <div className="flex gap-2 items-start p-2.5 text-lg">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/420efe780e6de1aba219cbbf830ba88fc43663aa7427d901fbc343a3ebc3fac8?apiKey=90a9c03b416f455b930ae3c8e113d732&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/420efe780e6de1aba219cbbf830ba88fc43663aa7427d901fbc343a3ebc3fac8?apiKey=90a9c03b416f455b930ae3c8e113d732&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/420efe780e6de1aba219cbbf830ba88fc43663aa7427d901fbc343a3ebc3fac8?apiKey=90a9c03b416f455b930ae3c8e113d732&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/420efe780e6de1aba219cbbf830ba88fc43663aa7427d901fbc343a3ebc3fac8?apiKey=90a9c03b416f455b930ae3c8e113d732&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/420efe780e6de1aba219cbbf830ba88fc43663aa7427d901fbc343a3ebc3fac8?apiKey=90a9c03b416f455b930ae3c8e113d732&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/420efe780e6de1aba219cbbf830ba88fc43663aa7427d901fbc343a3ebc3fac8?apiKey=90a9c03b416f455b930ae3c8e113d732&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/420efe780e6de1aba219cbbf830ba88fc43663aa7427d901fbc343a3ebc3fac8?apiKey=90a9c03b416f455b930ae3c8e113d732&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/420efe780e6de1aba219cbbf830ba88fc43663aa7427d901fbc343a3ebc3fac8?apiKey=90a9c03b416f455b930ae3c8e113d732&"
                    className="shrink-0 aspect-square w-[45px]"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="text-slate-800">Hawaiian Airlines</div>
                    <div className="mt-1.5 text-slate-400">FIG4312</div>
                  </div>
                  <div className="flex flex-col flex-1 self-stretch text-right text-slate-800">
                    <div>16h 45m (+1d)</div>
                    <div className="mt-1.5">7:00 AM - 4:15 PM</div>
                    <div className="mt-1 text-slate-400">2h 45m in HNL</div>
                  </div>
                </div>
                <div className="flex flex-col justify-center py-1 mt-2.5 bg-white">
                  <div className="shrink-0 h-0.5 bg-violet-100" />
                </div>
                <div className="flex gap-2 items-start p-2.5 mt-2.5 text-lg">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cf1e5027fc947d13f52306ad7a2f81e655294d72606172dd12c6f36f8e4ad8b1?apiKey=90a9c03b416f455b930ae3c8e113d732&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf1e5027fc947d13f52306ad7a2f81e655294d72606172dd12c6f36f8e4ad8b1?apiKey=90a9c03b416f455b930ae3c8e113d732&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf1e5027fc947d13f52306ad7a2f81e655294d72606172dd12c6f36f8e4ad8b1?apiKey=90a9c03b416f455b930ae3c8e113d732&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf1e5027fc947d13f52306ad7a2f81e655294d72606172dd12c6f36f8e4ad8b1?apiKey=90a9c03b416f455b930ae3c8e113d732&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf1e5027fc947d13f52306ad7a2f81e655294d72606172dd12c6f36f8e4ad8b1?apiKey=90a9c03b416f455b930ae3c8e113d732&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf1e5027fc947d13f52306ad7a2f81e655294d72606172dd12c6f36f8e4ad8b1?apiKey=90a9c03b416f455b930ae3c8e113d732&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf1e5027fc947d13f52306ad7a2f81e655294d72606172dd12c6f36f8e4ad8b1?apiKey=90a9c03b416f455b930ae3c8e113d732&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf1e5027fc947d13f52306ad7a2f81e655294d72606172dd12c6f36f8e4ad8b1?apiKey=90a9c03b416f455b930ae3c8e113d732&"
                    className="shrink-0 aspect-[1.02] w-[45px]"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="text-slate-800">Hawaiian Airlines</div>
                    <div className="mt-1 text-slate-400">FIG4312</div>
                  </div>
                  <div className="flex flex-col flex-1 self-stretch text-right text-slate-800">
                    <div>16h 45m (+1d)</div>
                    <div className="mt-1">7:00 AM - 4:15 PM</div>
                    <div className="mt-1.5 text-slate-400">2h 45m in HNL</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-between self-end p-5 text-lg font-semibold text-right text-slate-800 max-md:pr-5">
                <div className="flex flex-col">
                  <div>Subtotal</div>
                  <div className="mt-2.5">Taxes and Fees</div>
                  <div className="mt-2.5">Total</div>
                </div>
                <div className="flex flex-col whitespace-nowrap">
                  <div>$503</div>
                  <div className="mt-2.5">$121</div>
                  <div className="mt-2.5">$624</div>
                </div>
              </div>
              <div className="justify-center self-end px-6 py-3.5 mt-10 text-lg bg-indigo-500 rounded text-neutral-50 max-md:px-5">
                Select seats
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba73cd8d5f45c4e5e9504fa745cc7728a421c4db7881436b3b08ec4897cfe027?apiKey=90a9c03b416f455b930ae3c8e113d732&"
                className="self-start mt-28 ml-5 w-full aspect-[0.74] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-4 mt-16 w-full bg-white max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col justify-between items-center px-16 pt-16 pb-7 w-full text-lg text-slate-400 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-start px-0.5 w-full max-w-[1334px] max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4e15524f42d286933d490e9ea75df1f58e09c7901e36e0f1019c5a4d9deae1c?apiKey=90a9c03b416f455b930ae3c8e113d732&"
              className="shrink-0 max-w-full aspect-[2.44] w-[145px]"
            />
            <div className="flex flex-col py-5 pr-5 pl-1.5 max-md:pr-5">
              <div className="text-xl font-bold text-slate-500">About</div>
              <div className="mt-4">About Tripma</div>
              <div className="mt-5">How it works</div>
              <div className="mt-5">Careers</div>
              <div className="mt-5">Press</div>
              <div className="mt-4">Blog</div>
              <div className="mt-5">Forum</div>
            </div>
            <div className="flex flex-col self-stretch py-5 pr-5 pl-1.5 max-md:pr-5">
              <div className="text-xl font-bold text-slate-500">
                Partner with us
              </div>
              <div className="mt-4">Partnership programs</div>
              <div className="mt-5">Affiliate program</div>
              <div className="mt-5">Connectivity partners</div>
              <div className="mt-5">Promotions and events</div>
              <div className="mt-4">Integrations</div>
              <div className="mt-5">Community</div>
              <div className="mt-5">Loyalty program</div>
            </div>
            <div className="flex flex-col py-5 pr-5 pl-1.5 max-md:pr-5">
              <div className="text-xl font-bold text-slate-500">Support</div>
              <div className="mt-4">Help Center</div>
              <div className="mt-5">Contact us</div>
              <div className="mt-5">Privacy policy</div>
              <div className="mt-5">Terms of service</div>
              <div className="mt-4">Trust and safety</div>
              <div className="mt-5">Accessibility</div>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex flex-col self-stretch py-5 pl-1.5">
                <div className="text-xl font-bold text-slate-500">
                  Get the app
                </div>
                <div className="mt-4">Tripma for Android</div>
                <div className="mt-5">Tripma for iOS</div>
                <div className="mt-5">Mobile site</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dc346b87cffcbeee510eb45081bb01a17bbb4b5663c21c52ff87edf2695291c?apiKey=90a9c03b416f455b930ae3c8e113d732&"
                className="mt-3.5 max-w-full border border-solid aspect-[3.33] border-neutral-400 w-[150px]"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/615934163f8eaf847ad9feb0143a39921fd020e916e2caa2ff8367733f997ab1?apiKey=90a9c03b416f455b930ae3c8e113d732&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/615934163f8eaf847ad9feb0143a39921fd020e916e2caa2ff8367733f997ab1?apiKey=90a9c03b416f455b930ae3c8e113d732&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/615934163f8eaf847ad9feb0143a39921fd020e916e2caa2ff8367733f997ab1?apiKey=90a9c03b416f455b930ae3c8e113d732&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/615934163f8eaf847ad9feb0143a39921fd020e916e2caa2ff8367733f997ab1?apiKey=90a9c03b416f455b930ae3c8e113d732&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/615934163f8eaf847ad9feb0143a39921fd020e916e2caa2ff8367733f997ab1?apiKey=90a9c03b416f455b930ae3c8e113d732&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/615934163f8eaf847ad9feb0143a39921fd020e916e2caa2ff8367733f997ab1?apiKey=90a9c03b416f455b930ae3c8e113d732&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/615934163f8eaf847ad9feb0143a39921fd020e916e2caa2ff8367733f997ab1?apiKey=90a9c03b416f455b930ae3c8e113d732&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/615934163f8eaf847ad9feb0143a39921fd020e916e2caa2ff8367733f997ab1?apiKey=90a9c03b416f455b930ae3c8e113d732&"
                className="mt-3.5 max-w-full aspect-[3.33] w-[150px]"
              />
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ceba056b8e72423e9220d5af2163d2082eb0ebb8e86f99589a3a2a3b1e900585?apiKey=90a9c03b416f455b930ae3c8e113d732&"
          className="mt-5 w-full border border-solid border-slate-300 stroke-[1.11px] stroke-slate-300 max-md:max-w-full"
        />
        <div className="flex justify-center items-center px-16 py-3.5 mt-5 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-w-[1334px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 justify-between p-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eea5168dc736ae4bff1b04c9a0071384d9da38d0b073e54db0a178c4ba6b99e?apiKey=90a9c03b416f455b930ae3c8e113d732&"
                className="shrink-0 aspect-square w-[26px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aae01423fba5b0234a4780851a55a9a6eb004f63d173321de686738d9b8fb1c7?apiKey=90a9c03b416f455b930ae3c8e113d732&"
                className="shrink-0 aspect-[1.04] w-[27px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d6f2195386cd5fd4dce3d210d3c649778510b451ba8e49e93bc5067e6ab5bbb?apiKey=90a9c03b416f455b930ae3c8e113d732&"
                className="shrink-0 aspect-[1.04] w-[27px]"
              />
            </div>
            <div className="my-auto text-xl text-right text-slate-400">
              © 2020 Tripma incorporated
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


