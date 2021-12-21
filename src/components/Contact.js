import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { sliderContainer, slider, fadeUp } from "../Animation";

export default function Contact() {
  return (
    <>
      <motion.div variants={sliderContainer} initial="hidden" animate="visible">
        <motion.div className="frame frame1" variants={slider} />
        <motion.div className="frame frame2" variants={slider} />
        <motion.div className="frame frame3" variants={slider} />
        <motion.div className="frame frame4" variants={slider} />

        <div>
          <Container>
            <Row>
              <Col
                style={{ textAlign: "center", minHeight: "85vh" }}
                className="d-flex justify-content-center align-items-center flex-column"
              >
                <motion.h1 variants={fadeUp}>What's Next?</motion.h1>
                <motion.h2 variants={fadeUp}>Get In Touch</motion.h2>
                <motion.p variants={fadeUp}>
                  Although I'm not currently looking for any new opportunities,
                  my inbox is always open. Whether you have a question or just
                  want to say hi, I'll try my best to get back to you!
                </motion.p>
                <motion.div variants={fadeUp}>
                  <Button
                    variant="outline-secondary"
                    className="herobtn"
                    href="mailto:kirankumar17897@gmail.com"
                  >
                    Say Hello
                  </Button>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </div>
      </motion.div>
    </>
  );
}
