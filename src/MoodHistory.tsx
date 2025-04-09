import React, { useState } from "react";
import type { MoodEntry } from "./types";

interface MoodHistoryProps {
	history: MoodEntry[];
}

const ITEMS_PER_PAGE = 15;

const MoodHistory: React.FC<MoodHistoryProps> = ({ history }) => {
	const [currentPage, setCurrentPage] = useState(1);
	// --- Pagination Calculations ---
	const totalItems = history.length;
	const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));

	const validatedCurrentPage = Math.min(currentPage, totalPages);

	const startIndex = (validatedCurrentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const currentItems = history.slice(startIndex, endIndex);

	const goToPreviousPage = () => {
		setCurrentPage((prev) => Math.max(prev - 1, 1));
	};

	const goToNextPage = () => {
		setCurrentPage((prev) => Math.min(prev + 1, totalPages));
	};

	// --- Date Formatting (remains the same) ---
	const formatDateWithDay = (isoString: string): string => {
		if (!isoString) return "Invalid Date";
		try {
			const date = new Date(isoString);
			const dayName = date.toLocaleDateString(undefined, { weekday: "long" });
			const shortDate = date.toLocaleDateString(undefined, {
				dateStyle: "short",
			});
			// const updateTime = date.toLocaleTimeString(undefined, { timeStyle: 'short' });
			return `${dayName}, ${shortDate}`;
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

			{/* Mood List Section */}
			{totalItems === 0 ? (
				<p className='text-center text-gray-500 italic'>
					No moods recorded yet. Select one above!
				</p>
			) : (
				<div className='min-h-[400px] border border-gray-200 rounded-lg shadow-inner bg-gray-50 p-3 md:p-4'>
					{" "}
					<ul className='space-y-3'>
						{currentItems.map((entry) => (
							<li
								key={entry.id}
								className='flex items-center p-3 bg-white rounded-md shadow-sm border-l-4 transition-colors duration-150' // Added transition
								style={{ borderColor: entry.color }}>
								<span
									className='text-xl mr-3'
									aria-hidden='true'>
									{entry.emoji}
								</span>
								<span className='font-medium text-gray-800 flex-grow capitalize'>
									{entry.name}
								</span>
								<span className='text-xs text-gray-500 ml-3 whitespace-nowrap'>
									{formatDateWithDay(entry.timestamp)}
								</span>
							</li>
						))}
					</ul>
				</div>
			)}

			{/* Pagination Controls Section */}
			{totalPages > 1 && (
				<div className='mt-6 flex items-center justify-between'>
					{/* Previous Button */}
					<button
						onClick={goToPreviousPage}
						disabled={validatedCurrentPage === 1}
						className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed'
						aria-label='Go to previous page'>
						Previous
					</button>

					{/* Page Indicator */}
					<span className='text-sm text-gray-600'>
						Page {validatedCurrentPage} of {totalPages}
					</span>

					{/* Next Button */}
					<button
						onClick={goToNextPage}
						disabled={validatedCurrentPage === totalPages}
						className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed'
						aria-label='Go to next page'>
						Next
					</button>
				</div>
			)}
		</section>
	);
};

export default MoodHistory;
