import { User, Link } from "@nextui-org/react";
import "./globals.css";

function App() {
  return (
    <section className="text-white-400 body-font min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-black via-black to-indigo-900">
      <div className="container px-5 py-24 mx-auto h-screen">
        <div className="flex flex-wrap w-full mb-36">
          <User
            name="(Wei) Qingwei Liu"
            description={
              <Link
                href="https://www.linkedin.com/in/qingwei-liu-461012215/"
                size="sm"
                isExternal
              >
                View linkedin
              </Link>
            }
            avatarProps={{
              src: "./myFace.png",
            }}
          />
        </div>

        <div className="flex flex-wrap w-full mb-52">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              C:\Users\Qingwei Liu{">"}: Full-Stack Developer & Lab Automation
              Software Engineer
            </h1>
            <div className="h-1 w-20 bg-green-600 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
            🌟 Hey Rockstars of Innovation! 🚀 Wei in the spotlight {"-"} your
            coding maestro and lab automation virtuoso. 💻✨ Shaping code into
            pure brilliance, I&apos;m all about the perfect fusion of creativity and
            precision. Whether crafting seamless web experiences or
            orchestrating the symphony of lab automation, let&apos;s jam together and
            create something extraordinary! 🤖✨ #CodeRockstar
            #AutomationMaestro
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-700 bg-gray-950 border-opacity-75 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
              </div>
              <h2 className="text-lg text-white font-medium title-font mb-2">
                Proficient in programming
              </h2>
              <p className="leading-relaxed text-base">
                Skilled in multiple programming languages and can adapt to new
                ones quickly.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-700 bg-gray-950 border-opacity-75 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
              </div>
              <h2 className="text-lg text-white font-medium title-font mb-2">
                Team player
              </h2>
              <p className="leading-relaxed text-base">
                Collaborative team player with strong communication skills and
                active collaboration.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-700 bg-gray-950 border-opacity-75 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
              <h2 className="text-lg text-white font-medium title-font mb-2">
                Critical thinking
              </h2>
              <p className="leading-relaxed text-base">
                Adept at analyzing complex situations and formulating effective,
                strategic solutions.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-700 bg-gray-950 border-opacity-75 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
              <h2 className="text-lg text-white font-medium title-font mb-2">
                Passionate
              </h2>
              <p className="leading-relaxed text-base">
                Passionate about programming with a drive for continuous
                learning and innovation.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-700 bg-gray-950 border-opacity-75 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
              </div>
              <h2 className="text-lg text-white font-medium title-font mb-2">
                Adapts quickly
              </h2>
              <p className="leading-relaxed text-base">
                Fast learner adept at quickly mastering new concepts and
                technologies
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-700 bg-gray-950 border-opacity-75 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.867 19.125h.008v.008h-.008v-.008Z"
                  />
                </svg>
              </div>
              <h2 className="text-lg text-white font-medium title-font mb-2">
                Problem solving
              </h2>
              <p className="leading-relaxed text-base">
                Skilled in analyzing issues, devising innovative solutions, and
                making informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
