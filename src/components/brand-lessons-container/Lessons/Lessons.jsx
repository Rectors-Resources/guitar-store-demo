import "./lessons.css";

export default function Lessons() {
  return (
    <section className="lesson-container">
      <h2>Check out our lessons</h2>
      <div>
        <img
          src="https://images.unsplash.com/photo-1619378780562-981c8a307a96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="student playing guitar"
          className="lesson-img"
        />
      </div>
      <div>
        <p>
          We offer lessons for students of any age in guitar, bass, and drums.
        </p>
        <p>
          Call us at (111)-111-1111 or click <a href="">here</a> for any
          questions or to schedule a lesson.
        </p>
      </div>
    </section>
  );
}
