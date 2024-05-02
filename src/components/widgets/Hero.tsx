import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";


export default component$(() => {
  return (

    <div>
        
    <section class="relative md:-mt-[76px] not-prose">
      
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>

      
      <div class="relative max-w-7xl mx-auto md:px-4">

        
        <div class="pt-0 md:pt-[76px] pointer-events-none"></div>
        {/* <video width="320" height="240"  controls src="./images/almonte1.mp4">
  Your browser does not support the video tag.
</video> */}

<div style={{ position: 'relative', height: '50vh' }}>
<Image
     class="object-cover w-full "
  src="/images/g1.jpg"
  alt="{name}"
  quality={50}
  width={0}
  height={0}
  style={{ width: 'full', height: '50vh', opacity: 0.75 }} // optional
  priority
/>
                        <h1
                            style={{
                                position: 'absolute',
                                top: '40%', // Position the h1 in the middle vertically
                                left: '20%', // Position the h1 in the middle horizontally
                                transform: 'translate(-20%, -50%)', // Center the h1
                                color: 'white', // Text color
                                fontSize: '2.4rem', // Font size
                                zIndex: 10, // Ensure it's above the image
                                lineHeight: '1', // Increase line height for better spacing between lines
                            }}
                        >
                            <span style={{ display: 'block' }}>CANADAS</span>
                            <span style={{ display: 'block' }}>CERTIFIED</span>
                            <span style={{ display: 'block' }}>PINSARIA</span>
                        </h1>
                        <div class="pt-6"
                            style={{
                                position: 'absolute',
                                top: '60%', // Position the buttons below the subtitle
                                left: '20%', // Position the buttons in the middle horizontally
                                transform: 'translateX(-20%)', // Center the buttons horizontally
                                zIndex: 10, // Ensure it's above the image
                            }}
                        >
                            <div class="pt-1" style={{ display: 'flex', alignItems: 'center' }}>
                                <a href="/menu">
                                    <button class="px-4 py-3 mr-2 text-xs font-bold text-white bg-black border-white rounded border-1">
                                        BROWSE MENU
                                    </button>
                                </a>
                                <div class="pt-2"></div>

                            </div>

                        </div>
                    </div>


                    <div class="border-black border-6"></div>



                    <div style={{ position: 'relative', height: '30vh' }}>
<Image
     class="object-cover w-full "
  src="/images/p1.jpg"
  alt="{name}"
  quality={50}
  width={440}
  height={0}
  style={{ width: 'full', height: '30vh', opacity: 0.75 }} // optional
  priority
/>
                        <h1
                            style={{
                                position: 'absolute',
                                top: '40%', // Position the h1 in the middle vertically
                                left: '20%', // Position the h1 in the middle horizontally
                                transform: 'translate(-20%, -50%)', // Center the h1
                                color: 'white', // Text color
                                fontSize: '2.4rem', // Font size
                                zIndex: 10, // Ensure it's above the image
                                lineHeight: '1', // Increase line height for better spacing between lines
                            }}
                        >
                            <span style={{ display: 'block' }}>CANADAS</span>
                            <span style={{ display: 'block' }}>CERTIFIED</span>
                            <span style={{ display: 'block' }}>PINSARIA</span>
                        </h1>
                        <div class="pt-6"
                            style={{
                                position: 'absolute',
                                top: '60%', // Position the buttons below the subtitle
                                left: '20%', // Position the buttons in the middle horizontally
                                transform: 'translateX(-20%)', // Center the buttons horizontally
                                zIndex: 10, // Ensure it's above the image
                            }}
                        >
                            <div class="pt-1" style={{ display: 'flex', alignItems: 'center' }}>
                                <a href="/menu">
                                    <button class="px-4 py-3 mr-2 text-xs font-bold text-white bg-black border-white rounded border-1">
                                        BROWSE PINSAS
                                    </button>
                                </a>
                                <div class="pt-2"></div>

                            </div>

                        </div>
                    </div>


                    <div class="border-8 border-black"></div>


        <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
          <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto">
            <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              Free template for <br class="hidden lg:block" />{" "}
              <span class="hidden lg:inline">create a website using </span> <span class="text-[#039de1]">Qwik</span> +{" "}
              <span class="sm:whitespace-nowrap text-[#039de1]">Tailwind CSS</span>
            </h1>
            <div class="max-w-3xl mx-auto lg:max-w-none">
              <p class="text-xl text-muted mb-6 dark:text-slate-300">
                <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2">
                  Qwind
                </span>{" "}
                is a production ready template to start your new website using <em>Qwik</em> + <em>Tailwind CSS</em>. It
                has been designed following Best Practices, SEO, Accessibility,{" "}
                <span class="inline md:hidden">...</span>
                <span class="hidden md:inline">
                  Dark Mode, Great Page Speed, image optimization, sitemap generation and more.
                </span>
              </p>

              <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl">
                <div class="flex w-full sm:w-auto">
                  <a
                    class="btn btn-primary sm:mb-0 w-full"
                    href="https://github.com/onwidget/qwind"
                    target="_blank"
                    rel="noopener"
                  >
                    Get template
                  </a>
                </div>
                <div class="flex w-full sm:w-auto">
                  <button class="btn w-full bg-gray-50 dark:bg-transparent">Learn more</button>
                </div>
              </div>
            </div>
          </div>
          <div class="basis-1/2">
            <Image
              src={"./images/a9.jpg"}
              layout="constrained"
              width={493}
              height={616}
              alt="Qwind Hero Image (Cool dog)"
              class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
              priority={true}
              breakpoints={[320, 480, 640, 768, 1024]}
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
});
