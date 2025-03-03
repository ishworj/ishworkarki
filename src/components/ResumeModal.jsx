import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ResumeModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <div className="d-flex justify-content-between w-100">
          <div>
            <Modal.Title id="contained-modal-title-vcenter">
              Ishwor Karki Resume
            </Modal.Title>
          </div>

          <div>
            <Button variant="dark"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/18sknvGjF1Y95dGxi53ABg46IyhAgnk26/view",
                  "_blank"
                );
              }}
            >
              View in Drive
            </Button>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <iframe
          src="https://drive.google.com/file/d/18sknvGjF1Y95dGxi53ABg46IyhAgnk26/preview"
          width="100%"
          height="100%"
          style={{ minHeight: "85vh" }}
          allow="autoplay"
        ></iframe>
      </Modal.Body>
    </Modal>
  );
};

export default ResumeModal;
