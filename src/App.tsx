import { Topbar } from "./components/topbar";
import './assets/home.css'
import SocialMediaIcons from "./components/social-icons";
function App() {
  return (
    <div className="min-h-screen flex justify-center p-5 items-center">
      <Topbar />
      <div className="headliner space-y-5 text-left gap-5">
        <h1 className="lg:text-4xl text-2xl  font-bold">
          Welcome!<br/>
        </h1>
        <h1 className="lg:text-5xl text-2xl font-bold">I'm Cajsa Lindekrans</h1>
        <p className="max-w-lg text-sm leading-6">
        Graduated 2024 with a Degree of Bachelor of Science with a major in Information Architecture specialization <strong>Frontend Web Developer</strong>, 
        I'm now poised to bring innovative solutions to the digital landscape.
        </p>

<div className="icons-list">
  <SocialMediaIcons/>
</div>
      </div>
    </div>
  );
}

export default App;
