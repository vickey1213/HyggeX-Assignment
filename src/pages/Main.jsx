const Main = () => {
  return (
    <div className="relative bg-whitesmoke w-full overflow-hidden flex flex-col items-center justify-start pt-[2.7rem] px-[2rem] pb-[30.7rem] box-border gap-[6.4rem] tracking-[normal] mq450:gap-[1.6rem] mq675:gap-[3.2rem]">
      <header className="w-[123.3rem] flex flex-row items-center justify-between gap-[2rem] max-w-full text-left text-[1.8rem] text-darkslategray-100 font-med mq750:w-[70.8rem]">
        <img
          className="relative w-[19.1rem] h-[3.9rem] object-cover"
          loading="eager"
          alt=""
          src="/component-40@2x.png"
        />
        <div className="flex flex-row items-center justify-start gap-[4rem] max-w-full mq675:gap-[2rem] mq750:hidden">
          <div className="w-[28.2rem] flex flex-row items-start justify-between gap-[2rem]">
            <div className="relative">Home</div>
            <div className="relative">Flashcard</div>
            <div className="relative">Contact</div>
          </div>
          <div className="relative">FAQ</div>
          <button className="cursor-pointer [border:none] p-[1.3rem] bg-[transparent] rounded-[32px] [background:linear-gradient(180deg,_#06286e,_#164ec0)] w-[12.8rem] flex flex-row items-center justify-center box-border">
            <div className="relative text-[1.8rem] font-medium font-med text-white text-left">
              Login
            </div>
          </button>
        </div>
      </header>
      <main className="w-[123.6rem] flex flex-col items-start justify-start py-[0rem] pr-[0.4rem] pl-[0rem] box-border gap-[6.4rem] max-w-full text-center text-[1.8rem] text-dimgray font-med mq450:gap-[1.6rem] mq675:gap-[3.2rem]">
        <div className="flex flex-row items-center justify-start [row-gap:20px] max-w-full mq675:flex-wrap">
          <div className="flex flex-row items-center justify-start">
            <img
              className="relative w-[3rem] h-[3rem] overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/frame.svg"
            />
            <img
              className="relative w-[2.4rem] h-[2.4rem] overflow-hidden shrink-0"
              alt=""
              src="/frame-1.svg"
            />
            <div className="relative font-medium">Flashcard</div>
          </div>
          <div className="flex flex-row items-center justify-center [row-gap:20px] max-w-full mq450:flex-wrap">
            <img
              className="relative w-[2.4rem] h-[2.4rem] overflow-hidden shrink-0 min-h-[2.4rem]"
              alt=""
              src="/frame-2.svg"
            />
            <div className="relative font-medium">Mathematics</div>
            <div className="flex flex-row items-center justify-start text-darkslateblue">
              <img
                className="relative w-[2.4rem] h-[2.4rem] overflow-hidden shrink-0 min-h-[2.4rem]"
                alt=""
                src="/frame-2.svg"
              />
              <div className="relative font-semibold">
                Relation and Function
              </div>
            </div>
          </div>
        </div>
        <section className="w-[97.1rem] flex flex-col items-start justify-start gap-[5.6rem] max-w-full text-center text-[3.2rem] text-dimgray font-montserrat mq675:gap-[2.8rem]">
          <h2 className="m-0 relative text-inherit font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#06286e,_#164ec0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full mq450:text-[1.9rem] mq750:text-[2.6rem]">
            Relations and Functions ( Mathematics )
          </h2>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-[2rem] font-med">
            <div className="w-[71.2rem] flex flex-col items-center justify-start gap-[3.2rem] max-w-full mq750:gap-[1.6rem]">
              <div className="w-[55.4rem] flex flex-row items-start justify-start py-[0rem] pr-[0.8rem] pl-[0rem] box-border max-w-full shrink-0">
                <div className="flex-1 flex flex-row items-start justify-between gap-[2rem] max-w-full mq675:flex-wrap">
                  <div className="h-[2.9rem] flex flex-col items-center justify-start gap-[1.4rem] text-darkslateblue">
                    <b className="relative mq450:text-[1.6rem]">Study</b>
                    <div className="relative box-border w-[8.4rem] h-[0.2rem] border-t-[2px] border-solid border-darkslateblue" />
                  </div>
                  <div className="h-[2.9rem] flex flex-col items-center justify-start gap-[1.4rem]">
                    <div className="relative font-medium mq450:text-[1.6rem]">
                      Quiz
                    </div>
                    <div className="relative box-border w-[7rem] h-[0.2rem] border-t-[2px] border-solid border-whitesmoke" />
                  </div>
                  <div className="h-[2.9rem] flex flex-col items-center justify-start gap-[1.4rem]">
                    <div className="relative font-medium mq450:text-[1.6rem]">
                      Test
                    </div>
                    <div className="relative box-border w-[6.8rem] h-[0.2rem] border-t-[2px] border-solid border-whitesmoke" />
                  </div>
                  <div className="h-[2.9rem] flex flex-col items-center justify-start gap-[1.4rem]">
                    <div className="relative font-medium mq450:text-[1.6rem]">
                      Game
                    </div>
                    <div className="relative box-border w-[8.2rem] h-[0.2rem] border-t-[2px] border-solid border-whitesmoke" />
                  </div>
                  <div className="h-[2.9rem] flex flex-col items-center justify-start gap-[1.4rem]">
                    <div className="relative font-medium mq450:text-[1.6rem]">
                      Others
                    </div>
                    <div className="relative box-border w-[9.2rem] h-[0.2rem] border-t-[2px] border-solid border-whitesmoke" />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start relative shrink-0 text-center text-[3.83rem] text-white font-lato">
                <div className="w-[0rem] flex flex-col items-start justify-end py-[0rem] px-[0rem] box-border">
                  <div className="w-[36.4rem] overflow-hidden flex flex-row items-center justify-end max-w-[Infinity%] shrink-0">
                    <div className="w-[0rem] flex flex-col items-start justify-start py-[0rem] px-[0rem] box-border">
                      <div className="w-[71.2rem] flex flex-row items-center justify-center relative [transform:_rotate(180deg)] max-w-[Infinity%] shrink-0">
                        <div className="absolute my-0 mx-[!important] h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[42.51px] bg-silver" />
                        <div className="flex-1 rounded-[42.51px] [background:linear-gradient(222.94deg,_#071844,_#071844_3.95%,_#2d87b6_82.51%,_#2d87b6)] overflow-hidden flex flex-row items-start justify-between pt-[3.4rem] px-[3.4rem] pb-[17.2rem] box-border gap-[2rem] max-w-full mq450:flex-wrap mq450:pt-[2.2rem] mq450:pb-[11.2rem] mq450:box-border">
                          <img
                            className="relative w-[3.4rem] h-[3.4rem] overflow-hidden shrink-0 [transform:_rotate(-180deg)]"
                            alt=""
                          />
                          <div className="w-[13.2rem] h-[18.7rem] flex flex-col items-start justify-start pt-[14.1rem] px-[0rem] pb-[0rem] box-border">
                            <b className="self-stretch flex-1 relative tracking-[0.02em] mq450:text-[2.3rem] mq750:text-[3.1rem]">
                              5x + 12
                            </b>
                          </div>
                          <img
                            className="relative w-[3.4rem] h-[3.4rem] overflow-hidden shrink-0 [transform:_rotate(-180deg)]"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="absolute my-0 mx-[!important] h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/mask-group.svg"
                />
              </div>
              <div className="w-[61.2rem] flex flex-row items-center justify-between gap-[2rem] max-w-full shrink-0 text-[2.4rem] text-darkslategray-200 mq450:flex-wrap mq450:justify-center">
                <img
                  className="relative w-[3rem] h-[3rem]"
                  loading="eager"
                  alt=""
                  src="/vector.svg"
                />
                <div className="w-[27.2rem] flex flex-row items-center justify-start gap-[4.3rem] mq450:gap-[2.1rem]">
                  <img
                    className="relative w-[6rem] h-[6rem] object-contain min-h-[6rem]"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className="relative mq450:text-[1.9rem]">01/10</b>
                  <img
                    className="relative w-[6rem] h-[6rem] min-h-[6rem]"
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
                <img
                  className="relative w-[3rem] h-[3rem]"
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-center justify-between min-h-[17.1rem] gap-[2rem] text-left text-[1.24rem] text-dimgray font-med mq675:flex-wrap">
          <div className="w-[21.7rem] flex flex-row items-start justify-start py-[2rem] px-[0rem] box-border gap-[2.1rem]">
            <div className="relative w-[8.06rem] h-[8.06rem] flex items-center justify-center">
              <img
                className="w-full h-full object-contain absolute left-[0rem] top-[0rem] [transform:scale(1.769)]"
                loading="eager"
                alt=""
                src="/group-1@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[1rem]">
              <b className="relative">Published by</b>
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[3.45rem] shrink-0 object-cover"
                alt=""
                src="/component-40-1@2x.png"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start py-[2rem] px-[0rem] gap-[0.8rem] text-[2.8rem]">
            <img
              className="relative w-[6rem] h-[6rem] overflow-hidden shrink-0"
              alt=""
              src="/frame-6.svg"
            />
            <h3 className="m-0 relative text-inherit font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#06286e,_#164ec0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-[2.2rem]">
              Create Flashcard
            </h3>
          </div>
        </section>
        <section className="w-[84.8rem] flex flex-col items-start justify-start gap-[4.8rem] max-w-full text-left text-[4.8rem] text-gray font-med mq450:gap-[2.4rem]">
          <h1 className="m-0 relative text-inherit tracking-[0.01em] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#06286e,_#164ec0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-[2.9rem] mq750:text-[3.8rem]">
            FAQ
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-[3.2rem] max-w-full text-[1.6rem] mq450:gap-[1.6rem]">
            <div className="self-stretch rounded-xl box-border overflow-hidden flex flex-row items-center justify-between py-[1.7rem] pr-[2.5rem] pl-[2.4rem] gap-[2rem] max-w-full border-[1px] border-solid border-dodgerblue">
              <input
                className="w-[calc(100%_-_73px)] [border:none] [outline:none] font-semibold font-med text-[1.6rem] bg-[transparent] relative leading-[2.6rem] text-gray text-left inline-block max-w-[calc(100%_-_44px)]"
                placeholder="Can education flashcards be used for all age groups?"
                type="text"
              />
              <img
                className="relative w-[2.4rem] h-[2.4rem] overflow-hidden shrink-0"
                alt=""
                src="/frame-7.svg"
              />
            </div>
            <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-between py-[1.7rem] pr-[2.5rem] pl-[2.4rem] gap-[2rem] border-[1px] border-solid border-dodgerblue">
              <div className="relative leading-[2.6rem] font-semibold">
                How do education flashcards work?
              </div>
              <img
                className="relative w-[2.4rem] h-[2.4rem] overflow-hidden shrink-0"
                alt=""
                src="/frame-7.svg"
              />
            </div>
            <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-between py-[1.7rem] pr-[2.5rem] pl-[2.4rem] gap-[2rem] border-[1px] border-solid border-dodgerblue">
              <div className="relative leading-[2.6rem] font-semibold">
                Can education flashcards be used for test preparation?
              </div>
              <img
                className="relative w-[2.4rem] h-[2.4rem] overflow-hidden shrink-0"
                alt=""
                src="/frame-7.svg"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
