import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import emailjs from "emailjs-com";
import { toast, Bounce } from "react-toastify";

const ContactMeModal = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_u0vm6i9",
        "template_fihx809",
        {
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "I5wZ21WqlQwF6OOqu"
      );

      toast.success("Email sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        transition: Bounce,
      });

      setFormData({ email: "", subject: "", message: "" });
      props.onHide();
    } catch (error) {
      toast.error("Error sending email!", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p className="fs-5 pt-3 text-success">
            Thanks for reaching out, I will get back soon!
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Your message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Modal.Footer>
            <Button onClick={props.onHide} variant="danger">
              Cancel
            </Button>
            <Button type="submit" variant="success">
              Send
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactMeModal;
