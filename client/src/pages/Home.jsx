// Importing Card components for Home page card below "Begin Journey" button
import Card from "../components/Card";

export default function Home() {
  return (
    <main>
      <h1>
        <img src="lrnr-logo.png" alt="lrnr website logo" className="cus-logo" />
      </h1>

      <h2 className="cus-home-tagline">Your guided path to programming enlightenment</h2>
      <button className="btn-large cus-home-btn">Begin Journey</button>

      {/* HomeCard Responsive Grid */}
      <div className="container cus-hc-grid">
        <div className="row">
          <div className="col s12 l4">
            <Card
              icon="flash_on"
              cardHeading="Personalized Quizzes"
              cardText="Greetings, young padawan. Are you ready to embark on a journey of personalized enlightenment through the art of coding? Our app can create custom quizzes that align with your coding skills and interests. Whether you are a novice or a master, our system can generate questions that will test your proficiency in programming languages, tools, and concepts."
            />
          </div>
          <div className="col s12 l4">
            <Card
              icon="payments"
              cardHeading="Rewarding"
              cardText="Our app is designed to be both challenging and rewarding, so you can learn new concepts while enjoying the process. With our personalized quiz app, you can track your progress, compete with your peers, and discover new areas of expertise. The journey of a thousand lines of code begins with a single keystroke."
            />
          </div>
          <div className="col s12 l4">
            <Card
              icon="person"
              cardHeading="Personal SME"
              cardText="Welcome to the path of knowledge. Our app is like having a personal subject matter expert at your side, guiding you on your journey towards wisdom."
            />
          </div>
        </div>
      </div>
    </main>
  );
}
