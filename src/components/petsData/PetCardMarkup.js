

export const CardMarkUp = ({ cardData, id }) => {
	return (
		<ul >
			{Object.entries(cardData)?.map(([key, value], idx) => (
				<li key={`${id}+ ${idx}`} id={id} >
					<p >
						<span>{key} :</span>&nbsp;
						{value}
					</p>
				</li>
			))}
		</ul>
	);
};
