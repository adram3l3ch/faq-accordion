const faqs = [
	{
		question: "How many team members can I invite?",
		answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
	},
	{
		question: "What is the maximum file upload size?",
		answer: "No more than 2GB. All files in your account must fit your allotted storage space.",
	},
	{
		question: "How do I reset my password?",
		answer: "Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed you.",
	},
	{
		question: "Can I cancel my subscription?",
		answer: "Yes! Send us a message and we’ll process your request no questions asked.",
	},
	{
		question: "Do you provide additional support?",
		answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
	},
];

const faqContainer = document.getElementById("faq");

function addFaqsToDom() {
	faqs.forEach((faq, i) => {
		const details = document.createElement("details");
		const summary = document.createElement("summary");
		const image = document.createElement("img");
		image.src = "./images/icon-arrow-down.svg";
		image.alt = "dropdown arrow";
		summary.textContent = faq.question;
		summary.append(image);
		const p = document.createElement("p");
		p.classList.add("answer");
		p.textContent = faq.answer;
		details.appendChild(summary);
		details.appendChild(p);
		faqContainer.appendChild(details);
		details.addEventListener("click", () => handleClick(i));
	});
	findHeight();
}

function findHeight() {
	const details = document.querySelectorAll("details");
	details.forEach(detail => {
		const summary = detail.querySelector("summary");
		const p = detail.querySelector(".answer");
		const summaryHeight = summary.getBoundingClientRect().height;
		const pHeight = p.getBoundingClientRect().height;
		detail.style.setProperty("--height", `${summaryHeight + pHeight}px`);
		detail.style.setProperty("--max-height", `${summaryHeight}px`);
	});
}

function handleClick(index) {
	const details = document.querySelectorAll("details");
	details.forEach((detail, i) => i !== index && detail.removeAttribute("open"));
}

addFaqsToDom();

window.addEventListener("resize", findHeight);
