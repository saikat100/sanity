import React, { useState }from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
  return (
		<header className="bg-red-600 sticky top-0 z-50">
			<div className="container mx-auto flex justify-between">
				<NavLink
					to="/"
					exact
					activeClassName="text-white"
					className="items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest visibility-name"
				>
					SAIKAT
				</NavLink>
				<nav className={click ? "nav-menu active" : "nav-menu"}>
					<NavLink
						to="/"
						exact
						activeClassName="text-white"
						className="items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
					>
						SAIKAT
					</NavLink>
					<NavLink
						to="/"
						exact
						className="items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
						activeClassName="text-red-100 bg-red-700"
					>
						Home
					</NavLink>
					<NavLink
						to="/post"
						className="items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
						activeClassName="text-red-100 bg-red-700 active"
					>
						Blog Posts
					</NavLink>
					<NavLink
						to="/project"
						className="items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
						activeClassName="text-red-100 bg-red-700 active"
					>
						Projects
					</NavLink>
					<NavLink
						to="/about"
						className="items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
						activeClassName="text-red-100 bg-red-700 active"
					>
						About Me!
					</NavLink>
				</nav>
				<div className="inline-flex py-3 px-3 my-6 visibility-icon">
					<SocialIcon
						url="https://www.linkedin.com/in/saikat-in/"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url="https://github.com/saikat100"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url="https://www.facebook.com/HashTagSaikat/"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
				</div>
				<div
					className="inline-flex items-center py-3 px-3 my-5 mr-4 mobile-bar"
					onClick={handleClick}
				>
					<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
				</div>
			</div>
		</header>
	);
}
