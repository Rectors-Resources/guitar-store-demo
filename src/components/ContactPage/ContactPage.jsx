import "./contact-page.css";

export default function ContactPage() {
  return (
    <>
      <div>
        <form action="" className="contact-form">
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" name="name" />
          <br />
          <label htmlFor="email">E-Mail:</label>
          <br />
          <input type="text" />
          <br />
          <label htmlFor="comment">Comment:</label>
          <br />
          <textarea name="comment" />
        </form>
      </div>
    </>
  );
}
