import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, imgWidth, imgHeight }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} style={{ width: "75%", height: "75%" }}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}