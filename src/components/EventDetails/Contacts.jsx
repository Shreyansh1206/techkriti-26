
import ReactMarkdown from "react-markdown";

export const Contacts = ({ contacts }) => {
	return (
		<div className="details-content-box">
			<div className="details-prose">
				<ReactMarkdown>{contacts}</ReactMarkdown>
			</div>
		</div>
	);
};
