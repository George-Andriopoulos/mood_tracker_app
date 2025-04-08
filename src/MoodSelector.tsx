import React from "react";
import type { Mood } from "./types";

interface MoodSelectorProps {
	moods: Mood[];
	onMoodSelected: (mood: Mood) => void;
	// disabled?: boolean; // Optional: Add if visual disabling is desired
}

const MoodSelector: React.FC<MoodSelectorProps> = ({
	moods,
	onMoodSelected,
	// disabled = false // Default to false
}) => {
	return (
		<section aria-labelledby='mood-selector-heading'>
			<h2
				id='mood-selector-heading'
				className='sr-only'>
				Mood Selection
			</h2>
			<div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4'>
				{moods.map((mood) => (
					<button
						key={mood.name}
						onClick={() => onMoodSelected(mood)}
						// disabled={disabled} // Optional: Use disabled prop
						className={`
              flex flex-col items-center justify-center p-3 md:p-4
              border-2 rounded-lg shadow-sm
              bg-white
              cursor-pointer transition-all duration-150 ease-in-out
              hover:shadow-md hover:scale-105 focus:outline-none
              focus:ring-2 focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-sm
            `}
						style={
							{
								borderColor: mood.color,
								"--mood-focus-ring-color": mood.color,
							} as React.CSSProperties
						}
						onFocus={(e) =>
							e.currentTarget.style.setProperty(
								"--tw-ring-color",
								`var(--mood-focus-ring-color)`
							)
						}
						aria-label={`Select mood: ${mood.name}`}>
						<span
							className='text-2xl md:text-3xl mb-1'
							aria-hidden='true'>
							{mood.emoji}
						</span>
						<span className='text-xs sm:text-sm font-medium text-gray-700 text-center capitalize'>
							{mood.name}
						</span>
					</button>
				))}
			</div>
		</section>
	);
};

export default MoodSelector;
