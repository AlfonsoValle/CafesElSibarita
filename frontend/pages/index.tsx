import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import Section from "../components/home/Section";


const Index = () => {
	const scrollRef = useRef();
	useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
	return (
		<div ref={scrollRef}>
			
			
			
			<Section />
		
		</div>
	);
};

export default Index;

