import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import Section from "../components/home/Section";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";

const Index = () => {
	const scrollRef = useRef( );
	useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
	return (
		<div ref={scrollRef}>
			
			<Section />
			<Section2 />
			<Section3 />
		</div>
	);
};

export default Index;
// 