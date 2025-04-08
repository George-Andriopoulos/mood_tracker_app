import React from "react";
import type { MoodEntry } from "./types";

interface MoodHistoryProps {
	history: MoodEntry[];
}

const MoodHistory: React.FC<MoodHistoryProps> = ({ history }) => {
	// Updated formatting function
	const formatDateWithDay = (isoString: string): string => {
		if (!isoString) return "Invalid Date";
		try {
			const date = new Date(isoString);
			// Get day name (e.g., "Tuesday") - uses browser's default locale
			const dayName = date.toLocaleDateString(undefined, { weekday: "long" });
			// Get short date (e.g., "4/8/2025" or "08/04/2025" depending on locale)
			const shortDate = date.toLocaleDateString(undefined, {
				dateStyle: "short",
			});
			// Get time mood was last updated/recorded for that day
			const updateTime = date.toLocaleTimeString(undefined, {
				timeStyle: "short",
			});

			// return `${dayName}, ${shortDate} (Updated: ${updateTime})`; // Option 1: Include update time
			return `${dayName}, ${shortDate}`; // Option 2: Simpler Day, Date
		} catch (error) {
			console.error("Error formatting date:", error);
			return "Invalid Date";
		}
	};

	return (
		<section aria-labelledby='mood-history-heading'>
			<h2
				id='mood-history-heading'
				className='text-xl md:text-2xl font-semibold text-gray-700 text-center mb-5 md:mb-6'>
				Your Mood History
			</h2>
			{history.length === 0 ? (
				<p className='text-center text-gray-500 italic'>
					No moods recorded yet. Select one above!
				</p>
			) : (
				<div className='max-h-96 overflow-y-auto border border-gray-200 rounded-lg shadow-inner bg-gray-50 p-3 md:p-4'>
					<ul className='space-y-3'>
						{/* History is assumed to be sorted newest first */}
						{history.map((entry) => (
							<li
								key={entry.id} // Keep using ID for React key
								className='flex items-center p-3 bg-white rounded-md shadow-sm border-l-4'
								style={{ borderColor: entry.color }}>
								<span
									className='text-xl mr-3'
									aria-hidden='true'>
									{entry.emoji}
								</span>
								<span className='font-medium text-gray-800 flex-grow capitalize'>
									{entry.name}
								</span>
								{/* Use the updated date format function */}
								<span className='text-xs text-gray-500 ml-3 whitespace-nowrap'>
									{formatDateWithDay(entry.timestamp)}
								</span>
							</li>
						))}
					</ul>
				</div>
			)}
		</section>
	);
};

export default MoodHistory;
