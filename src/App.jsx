import DataImage from "./data";
import { listProject } from "./data";

function App() {
  return (
    <>
      <div className="profile grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-4 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div
            class
            className="flex items-center gap-5 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl"
          >
            <img
              src={DataImage.Profile}
              alt="Hero Image"
              className="w-10 rounded-md"
            />
            <q>Quotes ini nanti diapus. 😘</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hello, I’m Frandy Soesanto 👋  
          </h1>
          <p className=" text-base/loose mb-6 opacity-55">
            I’m a Computer Science student at BINUS University with a strong passion for Web, Mobile, and Database Development.  
            I have hands-on experience with Laravel, Java, SQL, MongoDB, React, and React Native to build functional, user-friendly applications.  
            Through campus organizations, I’ve developed skills in communication, teamwork, and leadership, which complement my technical expertise.  
            I believe in continuous learning and enjoy exploring new technologies to create impactful digital solutions. 🚀

          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="bg-pink-600 p-4 rounded-2xl hover:bg-pink-500"
            >
              Download CV <i className="ri-download-fill ri-lg"></i>
            </a>

            <a
              href="#project"
              className="bg-pink-600 p-4 rounded-2xl hover:bg-pink-500"
            >
              Lihat Proyek
            </a>
          </div>
        </div>
        <img
          src={DataImage.Profile}
          alt="Hero Image"
          className="w-[500px] rounded-2xl md:ml-auto flex items-center animate__animated animate__fadeInUp animate__delay-3s"
        ></img>
      </div>

      {/* {Resume} */}
      <div className="about mt-32 py-10" id="resume">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-center text-4xl font-bold mb-18">Resume</h1>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 px-1">
            {/* Contact Card */}
            <div className="bg-zinc-800 p-6 rounded-2xl shadow-md"data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <i className="ri-contacts-fill text-pink-600"></i> Contact
              </h2>
              <ul className="space-y-2 text-base/loose">
                <li>
                  <i class="ri-phone-line"></i> +628584652201
                </li>
                <li>
                  <i class="ri-mail-line"></i> frandysoesanto2@gmail.com
                </li>
                <li>
                  <i class="ri-map-pin-5-line"></i> Jakarta,Indonesia
                </li>
              </ul>
            </div>

            {/* Education Card */}
            <div className="bg-zinc-800 p-6 rounded-2xl shadow-md"data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <i className="ri-graduation-cap-fill text-pink-600"></i>{" "}
                Education
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">
                    Computer Science – BINUS University
                  </p>
                  <p className="text-sm opacity-70">2023 – 2027</p>
                </div>
                <div>
                  <p className="font-semibold">SMA Kristen Ketapang 1</p>
                  <p className="text-sm opacity-70">2020 – 2023</p>
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className="bg-zinc-800 p-6 rounded-2xl shadow-md"data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <i className="ri-briefcase-fill text-pink-600"></i> Internship
                Experience
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">
                    Data Entry Intern – PT Agusindo
                  </p>
                  <p className="text-sm opacity-70">
                    Input and monitored monthly iuran data per ruko block (paid
                    vs unpaid).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 p-6 rounded-2xl shadow-md"data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <i className="ri-code-s-slash-line text-pink-600"></i> Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Laravel",
                  "Java",
                  "C",
                  "SQL",
                  "MySQL",
                  "MongoDB",
                  "React",
                  "React Native",
                  "Git",
                  "Figma",
                  "and more",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-zinc-700 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Organizational Experience */}
            <div className="bg-zinc-800 p-6 rounded-2xl shadow-md"data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <i className="ri-team-fill text-pink-600"></i> Organizational
                Experience
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">
                    Activist – HIMTI Publication & Marketing
                  </p>
                  <p className="text-sm opacity-70">Mar 2024 – Present</p>
                </div>
                <div>
                  <p className="font-semibold">Staff – HISHOT 2024 (HIMTI)</p>
                  <p className="text-sm opacity-70">Jun 2024 – Present</p>
                </div>
                <div>
                  <p className="font-semibold">
                    Member – Week of Welcoming (WOW) 2024
                  </p>
                  <p className="text-sm opacity-70">Aug 26 – 31, 2024</p>
                </div>
                <div>
                  <p className="font-semibold">
                    Manager of Sponsorship – Kemanggisan Super League
                  </p>
                  <p className="text-sm opacity-70">Sep 2024</p>
                </div>
                <div>
                  <p className="font-semibold">
                    Activist – Internal Division (Binus Futsal)
                  </p>
                  <p className="text-sm opacity-70">Mar 2024 – Present</p>
                </div>
                <div>
                  <p className="font-semibold">
                    Security Coordinator – RIFARE SPEAK 13 EDUFAIR
                  </p>
                  <p className="text-sm opacity-70">Sep 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {PROJECT} */}
      <div className="Project mt-32 py-10" id="project">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Project
        </h1>
        {/* <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="true"
        >
          Berikut ini beberapa project yang telah saya buat
        </p> */}

        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProject.map((project, index) => (
            <div
              key={project.id}
              className="p-4 bg-zinc-800 rounded-2xl"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay={index * 200}
              data-aos-once="true"
            >
              <img src={project.gambar} alt="Project Image" className="rounded-md" />
              <div>
                <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
                <p className="text-base/loose mb-4">{project.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <p
                      key={i}
                      className="px-3 border border-zinc-500 bg-zinc-500 rounded-md"
                    >
                      {tool}
                    </p>
                ))}
              </div>
                <div className="mt-8 text-center">
                  <a
                    href={project.link}
                    className="bg-pink-600 p-3 rounded-lg block border border-red-700 hover:bg-pink-500 transition"
                    target="_blank" >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>    
      </div>

      {/* {Contact} */}
      <div className="contact mt-32 sm:p-10 p-0" id="contact">
        <h1 className="text-center text-4xl mb-2 font-bold" data-aos="fade-up" data-aos-duration="1000">Contact</h1>
        <p className="text-center text-base/loose opacity-50 mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true"></p>
        <form
          action="https://formsubmit.co/frandysoesanto2@gmail.com"
          method="POST"
          className=" bg-zinc-800 p-10 sm:w-fit mx-auto rounded-2xl w-full"
          autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="border border-zinc-500 p-2 rounded-2xl"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="border border-zinc-500 p-2 rounded-2xl"
                required
              />
            </div>
            <div className="flex-col flex gap-2">
              <label htmlFor="message" className="font-semibold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="40"
                rows="5"
                placeholder="......"
                className="border border-zinc-500 p-2 rounded-2xl"
              ></textarea>
            </div>
            <div className="flex justify-center w-full">
              <button
                type="submit"
                className="p-2 rounded-2xl bg-pink-600 block w-full font-bold"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
