import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
	return (
		<>
			<footer class="text-center bg-red-600 text-white">
				<div class="container px-6 pt-6">
					<div class="flex justify-center mb-6">
						<SocialIcon
							url="https://www.linkedin.com/in/saikat-in/"
							className="mr-4 justify-center"
							target="_blank"
							fgColor="#fff"
							style={{ height: 35, width: 35 }}
						/>
						<SocialIcon
							url="https://github.com/saikat100"
							className="mr-4 justify-center"
							target="_blank"
							fgColor="#fff"
							style={{ height: 35, width: 35 }}
						/>
						<SocialIcon
							url="https://www.facebook.com/HashTagSaikat/"
							className="mr-4 justify-center"
							target="_blank"
							fgColor="#fff"
							style={{ height: 35, width: 35 }}
						/>
					</div>
				</div>
				<div
					class="text-center p-4"
					style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
				>
					&copy; {new Date().getFullYear()} Copyright:{" "}
					<a class="text-whitehite" href="https://saikat-hossain.netlify.app/">
						S. M. Saikat Hossain
					</a>
				</div>
			</footer>
		</>
	);
}
