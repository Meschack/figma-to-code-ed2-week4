import Image from 'next/image';
import { Wrapper } from './common/wrapper';
import { Button } from './common/button';
import { Icons } from './common/icons';

export const HeroSection = () => {
  return (
    <Wrapper className="flex flex-col-reverse items-center lg:items-start justify-between lg:flex-row px-4 py-6 gap-6">
      <div className="space-y-4 lg:space-y-8 lg:w text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Get ready for your best ever Medicine Experience!
        </h1>
        <p className="font-medium text-sm sm:text-base md:text-lg">
          We use only the best quality materials on the market to provide the best products to our patients, So don’t worry about anything and book yourself.
        </p>
        <div className="flex flex-col sm:flex-row w-full items-center gap-4 max-w-max mx-auto lg:mx-0">
          <Button className="btn btn-primary h-12 sm:h-14 font-semibold">
            Book an appointment
          </Button>
          <div className="flex items-center gap-4 mx-auto sm:mx-0">
            <div className="grid place-content-center rounded-lg border-2 border-doctrin-blue p-3">
              <Icons.phone className="text-doctrin-blue" />
            </div>
            <div>
              <p className="text-doctrin-blue font-semibold">Medical 24H Emergency</p>
              <span className="text-xs md:text-sm">0900-78601</span>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/images/hero-section.svg"
        alt="Hero Section Image"
        className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
        layout="intrinsic"
        width={600}
        height={600}
      />
    </Wrapper>
  );
};
