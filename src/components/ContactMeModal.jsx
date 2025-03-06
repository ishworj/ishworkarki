import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast, Bounce } from "react-toastify";

const ContactMeModal = (props) => {
  const sendUrl = import.meta.env.VITE_URL + "/api/mail-to";
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData") || "{}");
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);
    localStorage.setItem("formData", JSON.stringify(updatedForm));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {


      const pendingRequest = axios.post(sendUrl, formData);
     toast.promise(pendingRequest,{
      pending:"please wait ..."
     })

      const response = await pendingRequest;
      if (response.data?.success) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
      localStorage.removeItem("formData");
      setFormData({ email: "", subject: "", message: "" });
      props.onHide();
    } catch (error) {
      !error?.response?.data?.success &&
        toast.error(error?.response?.data?.message || "Error sending mail", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
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
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              name="subject"
              placeholder="Req for Collaboration"
              value={formData.subject}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Your message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={3}
              placeholder="Dear Ishwor, ..."
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
