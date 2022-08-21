import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React, {useState} from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import InfoSection from "../InfoSection";
import {homeObjOne, homeObjThree, homeObjTwo} from "../InfoSection/Data";
import Services from "../Services";
import Footer from "../Footer";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;
