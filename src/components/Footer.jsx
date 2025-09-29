const Footer = () => {
  return (
    <div className="mt-20 py-4 flex md:flex-row flex-col justify-between items-center">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">portofolio</h1>
        <div className="flex gap-7 mb-3 md:mb-0" >
            <a href="#home">Home</a>
            <a href="#resume">Resume</a>
            <a href="#project">Project</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="https://github.com/FrandySoe">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="https://www.instagram.com/frandysoesanto/">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/frandy-soesanto-828878331/">
                <i className="ri-linkedin-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer