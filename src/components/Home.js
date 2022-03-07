import React from "react";
import image from "../image/71.jpg";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Home() {
  return (
		<>
    <NavBar/>
			<main>
				<img
					src={image}
					alt="Monstera Leaves"
					className="absolute object-cover w-full h-full"
				/>
				<section className="relative flex justify-center min-h-screen pt-12 lg:pt-32 px-8">
					<h1 className="text-6xl text-green-900 font-bold cursive leading-none lg:leading-snug home-name">
						Hi!!! I'm SAIKAT
					</h1>
				</section>
			</main>
      <Footer/>
		</>
	);
}
