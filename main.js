const init = new TypeIt('#input', {
	strings: ["echo Hello, my name is Sneha", 
		"Hello, my name is Sneha",
		"sneha@cloud:~ #Let's get started, shall we?",
		"sneha@cloud:~ vim README.md",
		"",
		"Sneha Patrachari",
		"============",
		"",
		"----",
		">  A DevOps Engineer whose mind is always in the cloud.",
		"> Keen interest in experimenting with any and all technologies",
		"> (e.g. crafting this website!)",
		"> With an interest in creating social change",
		"",
		"----",
		"Education",
		"---------",
		"",
		"2013-2017",
		":   **B.A.Sc: Cognitive Science, Computer Science **",
		"      University of California, Davis",
		"",
		"So, why don't I save you the time and do the rest myself?",
		"",
		":wq",
		"git add README.me",
		"git commit -m 'Portfolio Upload for Our Friends'",
		"git push origin master",
		'Counting objects: 1, done.',
		'Delta compression using up to 1 thread.',
		'Compressing objects: 100% (1/1), done.',
		'Writing objects: 100% (1/1), 289 bytes | 0 bytes/s, done.',
		'Total 1 (delta 1), reused 0 (delta 0)',
		'To ssh:repository',
		'   59a2d4a..ab9e230  master -> master',
		`updating local tracking ref 'refs/remotes/origin/master'`,
		"sneha@cloud:~ open 'https://github.com/spatrachari/spatrachari.github.io'"],
	speed: 10
}).go();

const emailTrigger = document.getElementById('email_trigger');
console.log(emailTrigger);
const contactForm = document.getElementById('contact_form');

function toggleContactForm() {
	contactForm.classList.length ?
		contactForm.setAttribute('class', '') :
		contactForm.setAttribute('class', 'hidden');
}

emailTrigger.addEventListener('click', toggleContactForm);



