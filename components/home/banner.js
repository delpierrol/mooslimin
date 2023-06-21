import Image from 'next/image';
import styles from './banner.module.css';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import {
  Col,
  Row,
  Container,
  Carousel
} from "react-bootstrap";
import React, { useState } from 'react';

export default function Banner() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};
	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
		        <img
		          className="d-block w-100"
		          src="/images/ditelaga.jpg"
		          alt="First slide"
		        />
		      </Carousel.Item>
		      <Carousel.Item>
		        <img
		          className="d-block w-100"
		          src="/images/sidekick.jpg"
		          alt="Second slide"
		        />
		      </Carousel.Item>
		</Carousel>
	);
}