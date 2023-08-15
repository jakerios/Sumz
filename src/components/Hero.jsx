import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button 
          type="button" 
          onClick={() => window.open('https://github.com/jakerios')}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="blue_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Make learning easier than ever with Sumz, an open-source
        project that utilizes the latest and greatest AI technology to
        summarize any web articles. Simply plug in the URL and read away
      </h2>
    </header>
  )
}

export default Hero