import { motion } from "framer-motion";
import { sliderContainer, slider, fadeUp } from "../Animation";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function HeroSection() {
  return (
    <div>
      <motion.div variants={sliderContainer} initial="hidden" animate="visible">
        <motion.div className="frame frame1" variants={slider} />
        <motion.div className="frame frame2" variants={slider} />
        <motion.div className="frame frame3" variants={slider} />
        <motion.div className="frame frame4" variants={slider} />
        <Container>
          <Row>
            <Col className="d-flex flex-column hero-section justify-content-center">
              <motion.h1 variants={fadeUp}>Hi, my name is</motion.h1>
              <motion.h2 variants={fadeUp}>Kiran Kumar,</motion.h2>
              <motion.h3 variants={fadeUp}>
                I build things for the web
              </motion.h3>
              <motion.p variants={fadeUp}>
                I am a software engineer specializing in building design to
                RealWorld web applications Currently, I'm focused on React, and
                I have 2+ years of experience in WordPress
              </motion.p>
              <motion.div variants={fadeUp}>
                <Button variant="outline-secondary" className="herobtn">
                  More About Me
                </Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
}
