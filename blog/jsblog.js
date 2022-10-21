const posts = [
	{
		title: "//Buffer overflow exploit",
		description:
			"A buffer overflow exploit is a type of security exploit in which an attacker overflows a buffer, which is a region of memory set aside to hold data temporarily, such as user input.",
		link: "test.jpg",
		page: "https://plastic-cover-55c.notion.site/Buffer-Overflow-7d66743f2107423dbb024db17282d018",
	},
	{
		title: "Sql Injection cheatsheet",
		description: "Cheat sheet for sql injection",
		link: "matrix.jpg",
		page: "#",
	},
];
let createNewPost = (post) => {
	const newpost = document.createElement("div");
	newpost.classList.add("post");
	newpost.style.background = "url(" + post.link + ")";
	newpost.style.backgroundSize = "cover";
	const image = document.createElement("div");
	image.classList.add("img");
	newpost.appendChild(image);
	const texte = document.createElement("div");
	texte.classList.add("texte");
	newpost.appendChild(texte);
	const container = document.createElement("a");
	container.href = post.page;
	texte.appendChild(container);
	container.classList.add("link-blog");
	const title = document.createElement("p");
	title.innerHTML = post.title;
	title.classList.add("link-txt");
	title.classList.add("title");
	container.appendChild(title);
	const desc = document.createElement("p");
	desc.innerHTML = post.description;
	desc.classList.add("link-txt");
	desc.classList.add("description");
	container.appendChild(desc);
	return newpost;
};

document.addEventListener("DOMContentLoaded", function (event) {
	const main = document.querySelector(".container-post");
	main.appendChild(createNewPost(posts[0]));
	main.appendChild(createNewPost(posts[1]));
});
