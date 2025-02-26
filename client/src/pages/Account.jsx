// Importing Card component
import Card from "../components/Card";

export default function Account() {
  return (
    <main>
      <div className="container cus-hc-grid">
        <div className="row">
          <h1 className="left teal-text">Account</h1>
        </div>
        <div className="row">
          <div className="col s12 l4">
            <Card
              icon="local_fire_department"
              cardHeading="Streak"
              cardText="You have a streak of 5 days!"
            />
          </div>
          <div className="col s12 l4">
            <Card
              icon="view_list"
              cardHeading="Platinum Quizzes"
              cardText="golang - intermediate | Javascript - beginner | AWS - beginner"
            />
          </div>
          <div className="col s12 l4">
            <Card
              icon="person"
              cardHeading="lrnr Level: 2"
              cardText="150/200px"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
