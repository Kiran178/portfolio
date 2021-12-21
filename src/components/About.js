import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import ProfilePic from "../Assets/profile.jpg";
import { sliderContainer, slider, fadeUp } from "../Animation";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <motion.div variants={sliderContainer} initial="hidden" animate="visible">
        <motion.div className="frame frame1" variants={slider} />
        <motion.div className="frame frame2" variants={slider} />
        <motion.div className="frame frame3" variants={slider} />
        <motion.div className="frame frame4" variants={slider} />
        <Container>
          <Row className="about-section d-flex align-items-center ">
            <Col>
              <motion.h2 variants={fadeUp}>About Me</motion.h2>
              <motion.p variants={fadeUp}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit,
                consequat vehicula venenatis ridiculus placerat dignissim proin,
                metus posuere lacus eu commodo vivamus.
              </motion.p>
              <motion.p variants={fadeUp}>
                Senectus conubia placerat magnis diam natoque lectus cum libero,
                viverra gravida accumsan aliquam lobortis non in, dis feugiat
                vestibulum venenatis nec nascetur nisl.
              </motion.p>
              <motion.p variants={fadeUp}>
                Sapien ridiculus netus justo maecenas euismod orci, imperdiet
                eget habitant cursus dis gravida metus, cum rutrum sagittis
                ligula ornare.
              </motion.p>

              <motion.ul className="skills-list" variants={fadeUp}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React JS</li>
                <li>Git</li>
                <li>WordPress</li>
              </motion.ul>
            </Col>
            {/* <Col>
              <motion.img
                src={ProfilePic}
                alt="ProfilePic"
                className="img-fluid profile-pic"
                variants={fadeUp}
              />
            </Col> */}
          </Row>
        </Container>
      </motion.div>
    </div>
  );
}
