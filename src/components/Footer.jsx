function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<div className="footer">© {currentYear} Albina Khomenko | klementina</div>
	);
}

export default Footer;
